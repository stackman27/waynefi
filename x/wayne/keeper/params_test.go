package keeper_test

import (
	"testing"

	testkeeper "github.com/cosmonaut/wayne/testutil/keeper"
	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.WayneKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
