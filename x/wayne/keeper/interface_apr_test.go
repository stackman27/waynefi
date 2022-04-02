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

func createNInterfaceApr(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.InterfaceApr {
	items := make([]types.InterfaceApr, n)
	for i := range items {
		items[i].Id = keeper.AppendInterfaceApr(ctx, items[i])
	}
	return items
}

func TestInterfaceAprGet(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNInterfaceApr(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetInterfaceApr(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestInterfaceAprRemove(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNInterfaceApr(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveInterfaceApr(ctx, item.Id)
		_, found := keeper.GetInterfaceApr(ctx, item.Id)
		require.False(t, found)
	}
}

func TestInterfaceAprGetAll(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNInterfaceApr(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllInterfaceApr(ctx)),
	)
}

func TestInterfaceAprCount(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNInterfaceApr(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetInterfaceAprCount(ctx))
}
