package keeper

import (
	"context"

	"github.com/cosmonaut/wayne/x/wayne/oracle"
	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) UserAll(c context.Context, req *types.QueryAllUserRequest) (*types.QueryAllUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var users []types.User
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	userStore := prefix.NewStore(store, types.KeyPrefix(types.UserKey))

	pageRes, err := query.Paginate(userStore, req.Pagination, func(key []byte, value []byte) error {
		var user types.User
		if err := k.cdc.Unmarshal(value, &user); err != nil {
			return err
		}

		users = append(users, user)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllUserResponse{User: users, Pagination: pageRes}, nil
}

func (k Keeper) User(c context.Context, req *types.QueryGetUserRequest) (*types.QueryGetUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	user, found := k.GetUser(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetUserResponse{User: user}, nil
}

func (k Keeper) UserLoad(c context.Context, req *types.QueryLoadUserRequest) (*types.QueryLoadUserResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	// var user types.User
	ctx := sdk.UnwrapSDKContext(c)

	userList := k.GetAllUser(ctx)

	var queryUser types.User
	for _, user := range userList {
		if user.Creator == req.Id {
			queryUser = user
		}
	}
	//TODO: keynotfound error when user has not been found
	var userAssetList []*types.LoadUserResponse

	userAddress, err := sdk.AccAddressFromBech32(req.Id)
	if err != nil {
		return nil, err
	}

	assetBalances := k.bankKeeper.GetAllBalances(ctx, userAddress)[1:]
	assetPrices := oracle.GetAllPrices()

	for i := 0; i < assetBalances.Len(); i++ {
		var userAsset types.LoadUserResponse
		userAsset.AssetBalance = assetBalances[i].Amount.Int64()
		userAsset.AssetDenom = assetBalances[i].Denom
		userAsset.AssetPrice = int32(assetPrices[i] * 1000000)
		userAsset.Collateral = queryUser.Collateral[i]
		userAsset.AssetDeposit = queryUser.Deposit[i].Amount
		userAsset.AssetBorrow = queryUser.Borrow[i].Amount

		userAssetList = append(userAssetList, &userAsset)
	}
	// store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UserKey))
	// k.cdc.MustUnmarshalBinaryBare(store.Get(GetUserIDBytes(req.Id)), &user)

	return &types.QueryLoadUserResponse{LoadUserResponse: userAssetList}, nil
}
