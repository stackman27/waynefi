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

func (k Keeper) LoadPoolResponseAll(c context.Context, req *types.QueryAllLoadPoolResponseRequest) (*types.QueryAllLoadPoolResponseResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var loadPoolResponses []types.LoadPoolResponse
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	loadPoolResponseStore := prefix.NewStore(store, types.KeyPrefix(types.LoadPoolResponseKey))

	pageRes, err := query.Paginate(loadPoolResponseStore, req.Pagination, func(key []byte, value []byte) error {
		var loadPoolResponse types.LoadPoolResponse
		if err := k.cdc.Unmarshal(value, &loadPoolResponse); err != nil {
			return err
		}

		loadPoolResponses = append(loadPoolResponses, loadPoolResponse)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLoadPoolResponseResponse{LoadPoolResponse: loadPoolResponses, Pagination: pageRes}, nil
}

func (k Keeper) LoadPoolResponse(c context.Context, req *types.QueryGetLoadPoolResponseRequest) (*types.QueryGetLoadPoolResponseResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	loadPoolResponse, found := k.GetLoadPoolResponse(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetLoadPoolResponseResponse{LoadPoolResponse: loadPoolResponse}, nil
}
