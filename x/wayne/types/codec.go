package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreatePool{}, "wayne/CreatePool", nil)
	cdc.RegisterConcrete(&MsgUpdatePool{}, "wayne/UpdatePool", nil)
	cdc.RegisterConcrete(&MsgDeletePool{}, "wayne/DeletePool", nil)
	cdc.RegisterConcrete(&MsgCreateDeposit{}, "wayne/CreateDeposit", nil)
	cdc.RegisterConcrete(&MsgUpdateDeposit{}, "wayne/UpdateDeposit", nil)
	cdc.RegisterConcrete(&MsgDeleteDeposit{}, "wayne/DeleteDeposit", nil)
	cdc.RegisterConcrete(&MsgCreateBorrow{}, "wayne/CreateBorrow", nil)
	cdc.RegisterConcrete(&MsgUpdateBorrow{}, "wayne/UpdateBorrow", nil)
	cdc.RegisterConcrete(&MsgDeleteBorrow{}, "wayne/DeleteBorrow", nil)
	cdc.RegisterConcrete(&MsgCreateUser{}, "wayne/CreateUser", nil)
	cdc.RegisterConcrete(&MsgUpdateUser{}, "wayne/UpdateUser", nil)
	cdc.RegisterConcrete(&MsgDeleteUser{}, "wayne/DeleteUser", nil)
	cdc.RegisterConcrete(&MsgCreateInterfaceApr{}, "wayne/CreateInterfaceApr", nil)
	cdc.RegisterConcrete(&MsgUpdateInterfaceApr{}, "wayne/UpdateInterfaceApr", nil)
	cdc.RegisterConcrete(&MsgDeleteInterfaceApr{}, "wayne/DeleteInterfaceApr", nil)
	cdc.RegisterConcrete(&MsgCreateLoadPoolResponse{}, "wayne/CreateLoadPoolResponse", nil)
	cdc.RegisterConcrete(&MsgUpdateLoadPoolResponse{}, "wayne/UpdateLoadPoolResponse", nil)
	cdc.RegisterConcrete(&MsgDeleteLoadPoolResponse{}, "wayne/DeleteLoadPoolResponse", nil)
	cdc.RegisterConcrete(&MsgCreateWithdraw{}, "wayne/CreateWithdraw", nil)
	cdc.RegisterConcrete(&MsgUpdateWithdraw{}, "wayne/UpdateWithdraw", nil)
	cdc.RegisterConcrete(&MsgDeleteWithdraw{}, "wayne/DeleteWithdraw", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePool{},
		&MsgUpdatePool{},
		&MsgDeletePool{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDeposit{},
		&MsgUpdateDeposit{},
		&MsgDeleteDeposit{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBorrow{},
		&MsgUpdateBorrow{},
		&MsgDeleteBorrow{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateUser{},
		&MsgUpdateUser{},
		&MsgDeleteUser{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateInterfaceApr{},
		&MsgUpdateInterfaceApr{},
		&MsgDeleteInterfaceApr{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateLoadPoolResponse{},
		&MsgUpdateLoadPoolResponse{},
		&MsgDeleteLoadPoolResponse{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateWithdraw{},
		&MsgUpdateWithdraw{},
		&MsgDeleteWithdraw{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
