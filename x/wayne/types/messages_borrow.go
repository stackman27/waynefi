package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateBorrow = "create_borrow"
	TypeMsgUpdateBorrow = "update_borrow"
	TypeMsgDeleteBorrow = "delete_borrow"
)

var _ sdk.Msg = &MsgCreateBorrow{}

func NewMsgCreateBorrow(creator string, blockHeight int32, asset string, amount int32, denom string) *MsgCreateBorrow {
	return &MsgCreateBorrow{
		Creator:     creator,
		BlockHeight: blockHeight,
		Asset:       asset,
		Amount:      amount,
		Denom:       denom,
	}
}

func (msg *MsgCreateBorrow) Route() string {
	return RouterKey
}

func (msg *MsgCreateBorrow) Type() string {
	return TypeMsgCreateBorrow
}

func (msg *MsgCreateBorrow) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateBorrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateBorrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateBorrow{}

func NewMsgUpdateBorrow(creator string, id uint64, blockHeight int32, asset string, amount int32, denom string) *MsgUpdateBorrow {
	return &MsgUpdateBorrow{
		Id:          id,
		Creator:     creator,
		BlockHeight: blockHeight,
		Asset:       asset,
		Amount:      amount,
		Denom:       denom,
	}
}

func (msg *MsgUpdateBorrow) Route() string {
	return RouterKey
}

func (msg *MsgUpdateBorrow) Type() string {
	return TypeMsgUpdateBorrow
}

func (msg *MsgUpdateBorrow) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateBorrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateBorrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteBorrow{}

func NewMsgDeleteBorrow(creator string, id uint64) *MsgDeleteBorrow {
	return &MsgDeleteBorrow{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteBorrow) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBorrow) Type() string {
	return TypeMsgDeleteBorrow
}

func (msg *MsgDeleteBorrow) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBorrow) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBorrow) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
