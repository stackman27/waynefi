package types

import (
	"testing"

	"github.com/cosmonaut/wayne/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateLoadPoolResponse_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateLoadPoolResponse
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateLoadPoolResponse{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateLoadPoolResponse{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateLoadPoolResponse_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateLoadPoolResponse
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateLoadPoolResponse{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateLoadPoolResponse{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteLoadPoolResponse_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteLoadPoolResponse
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteLoadPoolResponse{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteLoadPoolResponse{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
