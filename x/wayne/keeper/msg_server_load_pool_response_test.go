package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/cosmonaut/wayne/x/wayne/types"
)

func TestLoadPoolResponseMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateLoadPoolResponse(ctx, &types.MsgCreateLoadPoolResponse{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestLoadPoolResponseMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateLoadPoolResponse
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateLoadPoolResponse{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateLoadPoolResponse{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateLoadPoolResponse{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateLoadPoolResponse(ctx, &types.MsgCreateLoadPoolResponse{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateLoadPoolResponse(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestLoadPoolResponseMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteLoadPoolResponse
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteLoadPoolResponse{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteLoadPoolResponse{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteLoadPoolResponse{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateLoadPoolResponse(ctx, &types.MsgCreateLoadPoolResponse{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteLoadPoolResponse(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
