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

func createNRepay(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Repay {
	items := make([]types.Repay, n)
	for i := range items {
		items[i].Id = keeper.AppendRepay(ctx, items[i])
	}
	return items
}

func TestRepayGet(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNRepay(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetRepay(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestRepayRemove(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNRepay(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveRepay(ctx, item.Id)
		_, found := keeper.GetRepay(ctx, item.Id)
		require.False(t, found)
	}
}

func TestRepayGetAll(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNRepay(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllRepay(ctx)),
	)
}

func TestRepayCount(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNRepay(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetRepayCount(ctx))
}
