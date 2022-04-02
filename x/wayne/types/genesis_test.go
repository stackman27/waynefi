package types_test

import (
	"testing"

	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated pool",
			genState: &types.GenesisState{
				PoolList: []types.Pool{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid pool count",
			genState: &types.GenesisState{
				PoolList: []types.Pool{
					{
						Id: 1,
					},
				},
				PoolCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated deposit",
			genState: &types.GenesisState{
				DepositList: []types.Deposit{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid deposit count",
			genState: &types.GenesisState{
				DepositList: []types.Deposit{
					{
						Id: 1,
					},
				},
				DepositCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated borrow",
			genState: &types.GenesisState{
				BorrowList: []types.Borrow{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid borrow count",
			genState: &types.GenesisState{
				BorrowList: []types.Borrow{
					{
						Id: 1,
					},
				},
				BorrowCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated user",
			genState: &types.GenesisState{
				UserList: []types.User{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid user count",
			genState: &types.GenesisState{
				UserList: []types.User{
					{
						Id: 1,
					},
				},
				UserCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated interfaceApr",
			genState: &types.GenesisState{
				InterfaceAprList: []types.InterfaceApr{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid interfaceApr count",
			genState: &types.GenesisState{
				InterfaceAprList: []types.InterfaceApr{
					{
						Id: 1,
					},
				},
				InterfaceAprCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated loadPoolResponse",
			genState: &types.GenesisState{
				LoadPoolResponseList: []types.LoadPoolResponse{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid loadPoolResponse count",
			genState: &types.GenesisState{
				LoadPoolResponseList: []types.LoadPoolResponse{
					{
						Id: 1,
					},
				},
				LoadPoolResponseCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated withdraw",
			genState: &types.GenesisState{
				WithdrawList: []types.Withdraw{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid withdraw count",
			genState: &types.GenesisState{
				WithdrawList: []types.Withdraw{
					{
						Id: 1,
					},
				},
				WithdrawCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
