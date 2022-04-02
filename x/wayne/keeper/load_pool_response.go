package keeper

import (
	"encoding/binary"

	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetLoadPoolResponseCount get the total number of loadPoolResponse
func (k Keeper) GetLoadPoolResponseCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.LoadPoolResponseCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetLoadPoolResponseCount set the total number of loadPoolResponse
func (k Keeper) SetLoadPoolResponseCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.LoadPoolResponseCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendLoadPoolResponse appends a loadPoolResponse in the store with a new id and update the count
func (k Keeper) AppendLoadPoolResponse(
	ctx sdk.Context,
	loadPoolResponse types.LoadPoolResponse,
) uint64 {
	// Create the loadPoolResponse
	count := k.GetLoadPoolResponseCount(ctx)

	// Set the ID of the appended value
	loadPoolResponse.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LoadPoolResponseKey))
	appendedValue := k.cdc.MustMarshal(&loadPoolResponse)
	store.Set(GetLoadPoolResponseIDBytes(loadPoolResponse.Id), appendedValue)

	// Update loadPoolResponse count
	k.SetLoadPoolResponseCount(ctx, count+1)

	return count
}

// SetLoadPoolResponse set a specific loadPoolResponse in the store
func (k Keeper) SetLoadPoolResponse(ctx sdk.Context, loadPoolResponse types.LoadPoolResponse) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LoadPoolResponseKey))
	b := k.cdc.MustMarshal(&loadPoolResponse)
	store.Set(GetLoadPoolResponseIDBytes(loadPoolResponse.Id), b)
}

// GetLoadPoolResponse returns a loadPoolResponse from its id
func (k Keeper) GetLoadPoolResponse(ctx sdk.Context, id uint64) (val types.LoadPoolResponse, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LoadPoolResponseKey))
	b := store.Get(GetLoadPoolResponseIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveLoadPoolResponse removes a loadPoolResponse from the store
func (k Keeper) RemoveLoadPoolResponse(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LoadPoolResponseKey))
	store.Delete(GetLoadPoolResponseIDBytes(id))
}

// GetAllLoadPoolResponse returns all loadPoolResponse
func (k Keeper) GetAllLoadPoolResponse(ctx sdk.Context) (list []types.LoadPoolResponse) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.LoadPoolResponseKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.LoadPoolResponse
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetLoadPoolResponseIDBytes returns the byte representation of the ID
func GetLoadPoolResponseIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetLoadPoolResponseIDFromBytes returns ID in uint64 format from a byte array
func GetLoadPoolResponseIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
