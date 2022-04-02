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

func (k Keeper) InterfaceAprAll(c context.Context, req *types.QueryAllInterfaceAprRequest) (*types.QueryAllInterfaceAprResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var interfaceAprs []types.InterfaceApr
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	interfaceAprStore := prefix.NewStore(store, types.KeyPrefix(types.InterfaceAprKey))

	pageRes, err := query.Paginate(interfaceAprStore, req.Pagination, func(key []byte, value []byte) error {
		var interfaceApr types.InterfaceApr
		if err := k.cdc.Unmarshal(value, &interfaceApr); err != nil {
			return err
		}

		interfaceAprs = append(interfaceAprs, interfaceApr)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllInterfaceAprResponse{InterfaceApr: interfaceAprs, Pagination: pageRes}, nil
}

func (k Keeper) InterfaceApr(c context.Context, req *types.QueryGetInterfaceAprRequest) (*types.QueryGetInterfaceAprResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	interfaceApr, found := k.GetInterfaceApr(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetInterfaceAprResponse{InterfaceApr: interfaceApr}, nil
}
