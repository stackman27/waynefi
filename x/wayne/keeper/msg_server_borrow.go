package keeper

import (
	"context"
	"fmt"

	"github.com/cosmonaut/wayne/x/wayne/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

//TODO: Take the asset our of pool and put it in users account
func (k msgServer) CreateBorrow(goCtx context.Context, msg *types.MsgCreateBorrow) (*types.MsgCreateBorrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var borrow = types.Borrow{
		Creator:     msg.Creator,
		BlockHeight: msg.BlockHeight,
		Asset:       msg.Asset,
		Amount:      msg.Amount,
		Denom:       msg.Denom,
	}

	// PREPARE THE TOKENS FOR BORROWIN
	coinsWithDenom, err := sdk.ParseCoinsNormalized(fmt.Sprint(msg.Amount, msg.Denom))
	if err != nil {
		return nil, err
	}

	// GET INFO ABOUT
	getUser := k.GetAllUser(ctx)
	var queryUser types.User
	for _, user := range getUser {
		if user.Creator == msg.Creator {
			queryUser = user
		}
	}

	for i, borrow := range queryUser.Borrow {
		if borrow.Denom == msg.Denom {
			queryUser.Borrow[i].Amount = queryUser.Borrow[i].Amount + msg.Amount
		}
	}
	k.SetUser(ctx, queryUser)

	creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	err = k.bankKeeper.MintCoins(ctx, types.ModuleName, coinsWithDenom)
	if err != nil {
		return nil, err
	}

	err = k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, creatorAddress, coinsWithDenom)
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

	queryPool.BorrowBalance = queryPool.BorrowBalance + msg.Amount
	k.SetPool(ctx, queryPool)

	// TOOD: ADD COLLATERAL LOGIC WHEN BORROWING
	// TODO: USER CAN ONLY GET "collateral_factor" AMOUNT OF THE TOKEN THAT THEY DEPOSIT

	id := k.AppendBorrow(
		ctx,
		borrow,
	)

	return &types.MsgCreateBorrowResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateBorrow(goCtx context.Context, msg *types.MsgUpdateBorrow) (*types.MsgUpdateBorrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var borrow = types.Borrow{
		Creator:     msg.Creator,
		Id:          msg.Id,
		BlockHeight: msg.BlockHeight,
		Asset:       msg.Asset,
		Amount:      msg.Amount,
		Denom:       msg.Denom,
	}

	// Checks that the element exists
	val, found := k.GetBorrow(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetBorrow(ctx, borrow)

	return &types.MsgUpdateBorrowResponse{}, nil
}

func (k msgServer) DeleteBorrow(goCtx context.Context, msg *types.MsgDeleteBorrow) (*types.MsgDeleteBorrowResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetBorrow(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveBorrow(ctx, msg.Id)

	return &types.MsgDeleteBorrowResponse{}, nil
}
