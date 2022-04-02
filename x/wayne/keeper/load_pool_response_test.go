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

func createNLoadPoolResponse(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.LoadPoolResponse {
	items := make([]types.LoadPoolResponse, n)
	for i := range items {
		items[i].Id = keeper.AppendLoadPoolResponse(ctx, items[i])
	}
	return items
}

func TestLoadPoolResponseGet(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNLoadPoolResponse(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetLoadPoolResponse(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestLoadPoolResponseRemove(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNLoadPoolResponse(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLoadPoolResponse(ctx, item.Id)
		_, found := keeper.GetLoadPoolResponse(ctx, item.Id)
		require.False(t, found)
	}
}

func TestLoadPoolResponseGetAll(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNLoadPoolResponse(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllLoadPoolResponse(ctx)),
	)
}

func TestLoadPoolResponseCount(t *testing.T) {
	keeper, ctx := keepertest.WayneKeeper(t)
	items := createNLoadPoolResponse(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetLoadPoolResponseCount(ctx))
}
