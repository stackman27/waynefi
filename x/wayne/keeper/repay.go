package keeper

import (
	"encoding/binary"

	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetRepayCount get the total number of repay
func (k Keeper) GetRepayCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.RepayCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetRepayCount set the total number of repay
func (k Keeper) SetRepayCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.RepayCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendRepay appends a repay in the store with a new id and update the count
func (k Keeper) AppendRepay(
	ctx sdk.Context,
	repay types.Repay,
) uint64 {
	// Create the repay
	count := k.GetRepayCount(ctx)

	// Set the ID of the appended value
	repay.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RepayKey))
	appendedValue := k.cdc.MustMarshal(&repay)
	store.Set(GetRepayIDBytes(repay.Id), appendedValue)

	// Update repay count
	k.SetRepayCount(ctx, count+1)

	return count
}

// SetRepay set a specific repay in the store
func (k Keeper) SetRepay(ctx sdk.Context, repay types.Repay) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RepayKey))
	b := k.cdc.MustMarshal(&repay)
	store.Set(GetRepayIDBytes(repay.Id), b)
}

// GetRepay returns a repay from its id
func (k Keeper) GetRepay(ctx sdk.Context, id uint64) (val types.Repay, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RepayKey))
	b := store.Get(GetRepayIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveRepay removes a repay from the store
func (k Keeper) RemoveRepay(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RepayKey))
	store.Delete(GetRepayIDBytes(id))
}

// GetAllRepay returns all repay
func (k Keeper) GetAllRepay(ctx sdk.Context) (list []types.Repay) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RepayKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Repay
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetRepayIDBytes returns the byte representation of the ID
func GetRepayIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetRepayIDFromBytes returns ID in uint64 format from a byte array
func GetRepayIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
