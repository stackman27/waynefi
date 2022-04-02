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
		BlockHeight: msg.BlockHeight,
		Asset:       msg.Asset,
		Amount:      msg.Amount,
		Denom:       msg.Denom,
	}

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
