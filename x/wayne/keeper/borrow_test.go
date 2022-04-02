package keeper_test

import (
	"testing"

	keepertest "github.com/cosmonaut/wayne/testutil/keeper"
	"github.com/cosmonaut/wayne/testutil/nullify"
	"github.com/cosmonaut/wayne/x/wayne/keeper"
	"github.com/cosmonaut/wayne/x/wayne/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNBorrow(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Borrow {
	items := make([]types.Borrow, n)
	for i := range items {
		items[i].Id = keeper.AppendBorrow(ctx, items[i])
	}
	return items
}

func TestBorrowGet(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNBorrow(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetBorrow(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestBorrowRemove(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNBorrow(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBorrow(ctx, item.Id)
		_, found := keeper.GetBorrow(ctx, item.Id)
		require.False(t, found)
	}
}

func TestBorrowGetAll(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNBorrow(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBorrow(ctx)),
	)
}

func TestBorrowCount(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNBorrow(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetBorrowCount(ctx))
}
