package keeper

import (
	"context"

	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RepayAll(c context.Context, req *types.QueryAllRepayRequest) (*types.QueryAllRepayResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var repays []types.Repay
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	repayStore := prefix.NewStore(store, types.KeyPrefix(types.RepayKey))

	pageRes, err := query.Paginate(repayStore, req.Pagination, func(key []byte, value []byte) error {
		var repay types.Repay
		if err := k.cdc.Unmarshal(value, &repay); err != nil {
			return err
		}

		repays = append(repays, repay)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRepayResponse{Repay: repays, Pagination: pageRes}, nil
}

func (k Keeper) Repay(c context.Context, req *types.QueryGetRepayRequest) (*types.QueryGetRepayResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	repay, found := k.GetRepay(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetRepayResponse{Repay: repay}, nil
}
