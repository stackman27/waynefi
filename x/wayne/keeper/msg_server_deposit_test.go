package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/cosmonaut/wayne/x/wayne/types"
)

func TestDepositMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateDeposit(ctx, &types.MsgCreateDeposit{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestDepositMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDeposit
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDeposit{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDeposit{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDeposit{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateDeposit(ctx, &types.MsgCreateDeposit{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateDeposit(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestDepositMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDeposit
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDeposit{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDeposit{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteDeposit{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateDeposit(ctx, &types.MsgCreateDeposit{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDeposit(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
