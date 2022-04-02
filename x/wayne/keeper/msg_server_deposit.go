package keeper

import (
	"context"
	"fmt"

	"github.com/cosmonaut/wayne/x/wayne/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// TODO: Take the asset out of User and Put it in the pool
func (k msgServer) CreateDeposit(goCtx context.Context, msg *types.MsgCreateDeposit) (*types.MsgCreateDepositResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var deposit = types.Deposit{
		Creator:     msg.Creator,
		BlockHeight: msg.BlockHeight,
		Asset:       msg.Asset,
		Amount:      msg.Amount,
		Denom:       msg.Denom,
	}

	/***
	WRITE CODE HERE

	*/

	// GET TOKEN WITH DENOM
	feeCoins, err := sdk.ParseCoinsNormalized(fmt.Sprint(msg.Amount, msg.Denom))
	if err != nil {
		return nil, err
	}

	// GET THE USER WHO IS TRYNA DEPOSIT
	userList := k.GetAllUser(ctx)
	var queryUser types.User
	for _, user := range userList {
		if user.Creator == msg.Creator {
			queryUser = user
		}
	}
	queryUser.Deposit = append(queryUser.Deposit, &deposit)
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

	// DEPOSIT THE ASSET IN THE SPECIFIED POOL
	poolList := k.GetAllPool(ctx)
	var queryPool types.Pool
	for _, pool := range poolList {
		if pool.Asset == msg.Asset {
			queryPool = pool
		}
	}
	queryPool.DepositBalance = queryPool.DepositBalance + msg.Amount
	k.SetPool(ctx, queryPool)

	id := k.AppendDeposit(
		ctx,
		deposit,
	)

	return &types.MsgCreateDepositResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDeposit(goCtx context.Context, msg *types.MsgUpdateDeposit) (*types.MsgUpdateDepositResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var deposit = types.Deposit{
		Creator:     msg.Creator,
		Id:          msg.Id,
		BlockHeight: msg.BlockHeight,
		Asset:       msg.Asset,
		Amount:      msg.Amount,
		Denom:       msg.Denom,
	}

	// Checks that the element exists
	val, found := k.GetDeposit(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDeposit(ctx, deposit)

	return &types.MsgUpdateDepositResponse{}, nil
}

func (k msgServer) DeleteDeposit(goCtx context.Context, msg *types.MsgDeleteDeposit) (*types.MsgDeleteDepositResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDeposit(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDeposit(ctx, msg.Id)

	return &types.MsgDeleteDepositResponse{}, nil
}
