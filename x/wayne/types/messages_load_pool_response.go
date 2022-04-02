package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateLoadPoolResponse = "create_load_pool_response"
	TypeMsgUpdateLoadPoolResponse = "update_load_pool_response"
	TypeMsgDeleteLoadPoolResponse = "delete_load_pool_response"
)

var _ sdk.Msg = &MsgCreateLoadPoolResponse{}

func NewMsgCreateLoadPoolResponse(creator string, asset string, collatoralFactor int32, liquidity int32, depositApy int32, borrowApy int32) *MsgCreateLoadPoolResponse {
	return &MsgCreateLoadPoolResponse{
		Creator:          creator,
		Asset:            asset,
		CollatoralFactor: collatoralFactor,
		Liquidity:        liquidity,
		DepositApy:       depositApy,
		BorrowApy:        borrowApy,
	}
}

func (msg *MsgCreateLoadPoolResponse) Route() string {
	return RouterKey
}

func (msg *MsgCreateLoadPoolResponse) Type() string {
	return TypeMsgCreateLoadPoolResponse
}

func (msg *MsgCreateLoadPoolResponse) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateLoadPoolResponse) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateLoadPoolResponse) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateLoadPoolResponse{}

func NewMsgUpdateLoadPoolResponse(creator string, id uint64, asset string, collatoralFactor int32, liquidity int32, depositApy int32, borrowApy int32) *MsgUpdateLoadPoolResponse {
	return &MsgUpdateLoadPoolResponse{
		Id:               id,
		Creator:          creator,
		Asset:            asset,
		CollatoralFactor: collatoralFactor,
		Liquidity:        liquidity,
		DepositApy:       depositApy,
		BorrowApy:        borrowApy,
	}
}

func (msg *MsgUpdateLoadPoolResponse) Route() string {
	return RouterKey
}

func (msg *MsgUpdateLoadPoolResponse) Type() string {
	return TypeMsgUpdateLoadPoolResponse
}

func (msg *MsgUpdateLoadPoolResponse) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateLoadPoolResponse) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateLoadPoolResponse) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteLoadPoolResponse{}

func NewMsgDeleteLoadPoolResponse(creator string, id uint64) *MsgDeleteLoadPoolResponse {
	return &MsgDeleteLoadPoolResponse{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteLoadPoolResponse) Route() string {
	return RouterKey
}

func (msg *MsgDeleteLoadPoolResponse) Type() string {
	return TypeMsgDeleteLoadPoolResponse
}

func (msg *MsgDeleteLoadPoolResponse) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteLoadPoolResponse) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteLoadPoolResponse) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
