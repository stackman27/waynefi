package types

import (
	"testing"

	"github.com/cosmonaut/wayne/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateInterfaceApr_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateInterfaceApr
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateInterfaceApr{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateInterfaceApr{
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

func TestMsgUpdateInterfaceApr_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateInterfaceApr
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateInterfaceApr{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateInterfaceApr{
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

func TestMsgDeleteInterfaceApr_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteInterfaceApr
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteInterfaceApr{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteInterfaceApr{
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
