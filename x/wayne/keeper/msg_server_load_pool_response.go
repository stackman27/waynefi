package keeper

import (
	"context"
	"fmt"

	"github.com/cosmonaut/wayne/x/wayne/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateLoadPoolResponse(goCtx context.Context, msg *types.MsgCreateLoadPoolResponse) (*types.MsgCreateLoadPoolResponseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var loadPoolResponse = types.LoadPoolResponse{
		Creator:          msg.Creator,
		Asset:            msg.Asset,
		CollatoralFactor: msg.CollatoralFactor,
		Liquidity:        msg.Liquidity,
		DepositApy:       msg.DepositApy,
		BorrowApy:        msg.BorrowApy,
	}

	id := k.AppendLoadPoolResponse(
		ctx,
		loadPoolResponse,
	)

	return &types.MsgCreateLoadPoolResponseResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateLoadPoolResponse(goCtx context.Context, msg *types.MsgUpdateLoadPoolResponse) (*types.MsgUpdateLoadPoolResponseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var loadPoolResponse = types.LoadPoolResponse{
		Creator:          msg.Creator,
		Id:               msg.Id,
		Asset:            msg.Asset,
		CollatoralFactor: msg.CollatoralFactor,
		Liquidity:        msg.Liquidity,
		DepositApy:       msg.DepositApy,
		BorrowApy:        msg.BorrowApy,
	}

	// Checks that the element exists
	val, found := k.GetLoadPoolResponse(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetLoadPoolResponse(ctx, loadPoolResponse)

	return &types.MsgUpdateLoadPoolResponseResponse{}, nil
}

func (k msgServer) DeleteLoadPoolResponse(goCtx context.Context, msg *types.MsgDeleteLoadPoolResponse) (*types.MsgDeleteLoadPoolResponseResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetLoadPoolResponse(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveLoadPoolResponse(ctx, msg.Id)

	return &types.MsgDeleteLoadPoolResponseResponse{}, nil
}
