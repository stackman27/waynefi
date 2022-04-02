package keeper

import (
	"encoding/binary"

	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetBorrowCount get the total number of borrow
func (k Keeper) GetBorrowCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BorrowCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetBorrowCount set the total number of borrow
func (k Keeper) SetBorrowCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.BorrowCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendBorrow appends a borrow in the store with a new id and update the count
func (k Keeper) AppendBorrow(
	ctx sdk.Context,
	borrow types.Borrow,
) uint64 {
	// Create the borrow
	count := k.GetBorrowCount(ctx)

	// Set the ID of the appended value
	borrow.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BorrowKey))
	appendedValue := k.cdc.MustMarshal(&borrow)
	store.Set(GetBorrowIDBytes(borrow.Id), appendedValue)

	// Update borrow count
	k.SetBorrowCount(ctx, count+1)

	return count
}

// SetBorrow set a specific borrow in the store
func (k Keeper) SetBorrow(ctx sdk.Context, borrow types.Borrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BorrowKey))
	b := k.cdc.MustMarshal(&borrow)
	store.Set(GetBorrowIDBytes(borrow.Id), b)
}

// GetBorrow returns a borrow from its id
func (k Keeper) GetBorrow(ctx sdk.Context, id uint64) (val types.Borrow, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BorrowKey))
	b := store.Get(GetBorrowIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBorrow removes a borrow from the store
func (k Keeper) RemoveBorrow(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BorrowKey))
	store.Delete(GetBorrowIDBytes(id))
}

// GetAllBorrow returns all borrow
func (k Keeper) GetAllBorrow(ctx sdk.Context) (list []types.Borrow) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BorrowKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Borrow
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetBorrowIDBytes returns the byte representation of the ID
func GetBorrowIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetBorrowIDFromBytes returns ID in uint64 format from a byte array
func GetBorrowIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
