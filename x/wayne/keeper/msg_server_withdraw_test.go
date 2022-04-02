package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/cosmonaut/wayne/x/wayne/types"
)

func TestWithdrawMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateWithdraw(ctx, &types.MsgCreateWithdraw{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestWithdrawMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateWithdraw
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateWithdraw{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateWithdraw{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateWithdraw{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateWithdraw(ctx, &types.MsgCreateWithdraw{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateWithdraw(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestWithdrawMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteWithdraw
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteWithdraw{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteWithdraw{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteWithdraw{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateWithdraw(ctx, &types.MsgCreateWithdraw{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteWithdraw(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
