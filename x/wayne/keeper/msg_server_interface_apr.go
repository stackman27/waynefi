package keeper

import (
	"context"
	"fmt"

	"github.com/cosmonaut/wayne/x/wayne/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateInterfaceApr(goCtx context.Context, msg *types.MsgCreateInterfaceApr) (*types.MsgCreateInterfaceAprResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var interfaceApr = types.InterfaceApr{
		Creator:   msg.Creator,
		Blocktime: msg.Blocktime,
		TimeApr:   msg.TimeApr,
	}

	id := k.AppendInterfaceApr(
		ctx,
		interfaceApr,
	)

	return &types.MsgCreateInterfaceAprResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateInterfaceApr(goCtx context.Context, msg *types.MsgUpdateInterfaceApr) (*types.MsgUpdateInterfaceAprResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var interfaceApr = types.InterfaceApr{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Blocktime: msg.Blocktime,
		TimeApr:   msg.TimeApr,
	}

	// Checks that the element exists
	val, found := k.GetInterfaceApr(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetInterfaceApr(ctx, interfaceApr)

	return &types.MsgUpdateInterfaceAprResponse{}, nil
}

func (k msgServer) DeleteInterfaceApr(goCtx context.Context, msg *types.MsgDeleteInterfaceApr) (*types.MsgDeleteInterfaceAprResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetInterfaceApr(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveInterfaceApr(ctx, msg.Id)

	return &types.MsgDeleteInterfaceAprResponse{}, nil
}
