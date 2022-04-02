package wayne_test

import (
	"testing"

	keepertest "github.com/cosmonaut/wayne/testutil/keeper"
	"github.com/cosmonaut/wayne/testutil/nullify"
	"github.com/cosmonaut/wayne/x/wayne"
	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		PoolList: []types.Pool{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		PoolCount: 2,
		DepositList: []types.Deposit{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DepositCount: 2,
		BorrowList: []types.Borrow{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		BorrowCount: 2,
		UserList: []types.User{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		UserCount: 2,
		InterfaceAprList: []types.InterfaceApr{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		InterfaceAprCount: 2,
		LoadPoolResponseList: []types.LoadPoolResponse{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		LoadPoolResponseCount: 2,
		WithdrawList: []types.Withdraw{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		WithdrawCount: 2,
		RepayList: []types.Repay{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		RepayCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WayneKeeper(t)
	wayne.InitGenesis(ctx, *k, genesisState)
	got := wayne.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.PoolList, got.PoolList)
	require.Equal(t, genesisState.PoolCount, got.PoolCount)
	require.ElementsMatch(t, genesisState.DepositList, got.DepositList)
	require.Equal(t, genesisState.DepositCount, got.DepositCount)
	require.ElementsMatch(t, genesisState.BorrowList, got.BorrowList)
	require.Equal(t, genesisState.BorrowCount, got.BorrowCount)
	require.ElementsMatch(t, genesisState.UserList, got.UserList)
	require.Equal(t, genesisState.UserCount, got.UserCount)
	require.ElementsMatch(t, genesisState.InterfaceAprList, got.InterfaceAprList)
	require.Equal(t, genesisState.InterfaceAprCount, got.InterfaceAprCount)
	require.ElementsMatch(t, genesisState.LoadPoolResponseList, got.LoadPoolResponseList)
	require.Equal(t, genesisState.LoadPoolResponseCount, got.LoadPoolResponseCount)
	require.ElementsMatch(t, genesisState.WithdrawList, got.WithdrawList)
	require.Equal(t, genesisState.WithdrawCount, got.WithdrawCount)
	require.ElementsMatch(t, genesisState.RepayList, got.RepayList)
	require.Equal(t, genesisState.RepayCount, got.RepayCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
