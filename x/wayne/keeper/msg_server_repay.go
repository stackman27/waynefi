package keeper

import (
	"context"
	"fmt"

	"github.com/cosmonaut/wayne/x/wayne/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRepay(goCtx context.Context, msg *types.MsgCreateRepay) (*types.MsgCreateRepayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var repay = types.Repay{
		Creator:     msg.Creator,
		BlockHeight: int32(ctx.BlockHeight()),
		Asset:       msg.Asset,
		Amount:      msg.Amount,
		Denom:       msg.Denom,
	}

	feeCoins, err := sdk.ParseCoinsNormalized(fmt.Sprint(msg.Amount, msg.Denom))
	if err != nil {
		return nil, err
	}
	userList := k.GetAllUser(ctx)

	var queryUser types.User
	for _, user := range userList {
		if user.Creator == msg.Creator {
			queryUser = user
		}
	}

	for i, eachBorrow := range queryUser.Borrow {
		if eachBorrow.Denom == msg.Denom {
			queryUser.Borrow[i].Amount = queryUser.Borrow[i].Amount - msg.Amount
		}
	}
	k.SetUser(ctx, queryUser)

	creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	// SUBTRACT THE AMOUNT FROM USER ADDRESS AND SEND THE AMOUNT TO THE MODULE
	err = k.bankKeeper.SendCoinsFromAccountToModule(ctx, creatorAddress, types.ModuleName, feeCoins)
	if err != nil {
		return nil, err
	}

	// BURN THE TOKENS THAT HAS BEEN DEPOSITED
	err = k.bankKeeper.BurnCoins(ctx, types.ModuleName, feeCoins)
	if err != nil {
		return nil, err
	}

	poolList := k.GetAllPool(ctx)
	var queryPool types.Pool
	for _, pool := range poolList {
		if pool.Asset == msg.Asset {
			queryPool = pool
		}
	}
	queryPool.BorrowBalance = queryPool.BorrowBalance - msg.Amount
	k.SetPool(ctx, queryPool)

	//TODO : ADD APY LOGIC WHEN REPAYING THE LOAN
	//TODO : DEDUCT THE RETURNING AMOUNT WITH APY

	id := k.AppendRepay(
		ctx,
		repay,
	)

	return &types.MsgCreateRepayResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateRepay(goCtx context.Context, msg *types.MsgUpdateRepay) (*types.MsgUpdateRepayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var repay = types.Repay{
		Creator:     msg.Creator,
		Id:          msg.Id,
		BlockHeight: msg.BlockHeight,
		Asset:       msg.Asset,
		Amount:      msg.Amount,
		Denom:       msg.Denom,
	}

	// Checks that the element exists
	val, found := k.GetRepay(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetRepay(ctx, repay)

	return &types.MsgUpdateRepayResponse{}, nil
}

func (k msgServer) DeleteRepay(goCtx context.Context, msg *types.MsgDeleteRepay) (*types.MsgDeleteRepayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetRepay(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRepay(ctx, msg.Id)

	return &types.MsgDeleteRepayResponse{}, nil
}
