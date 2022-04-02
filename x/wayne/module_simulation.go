package wayne

import (
	"math/rand"

	"github.com/cosmonaut/wayne/testutil/sample"
	waynesimulation "github.com/cosmonaut/wayne/x/wayne/simulation"
	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = waynesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreatePool = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreatePool int = 100

	opWeightMsgUpdatePool = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePool int = 100

	opWeightMsgDeletePool = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePool int = 100

	opWeightMsgCreateDeposit = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDeposit int = 100

	opWeightMsgUpdateDeposit = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDeposit int = 100

	opWeightMsgDeleteDeposit = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDeposit int = 100

	opWeightMsgCreateBorrow = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBorrow int = 100

	opWeightMsgUpdateBorrow = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateBorrow int = 100

	opWeightMsgDeleteBorrow = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteBorrow int = 100

	opWeightMsgCreateUser = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateUser int = 100

	opWeightMsgUpdateUser = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateUser int = 100

	opWeightMsgDeleteUser = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteUser int = 100

	opWeightMsgCreateInterfaceApr = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateInterfaceApr int = 100

	opWeightMsgUpdateInterfaceApr = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateInterfaceApr int = 100

	opWeightMsgDeleteInterfaceApr = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteInterfaceApr int = 100

	opWeightMsgCreateLoadPoolResponse = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateLoadPoolResponse int = 100

	opWeightMsgUpdateLoadPoolResponse = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateLoadPoolResponse int = 100

	opWeightMsgDeleteLoadPoolResponse = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteLoadPoolResponse int = 100

	opWeightMsgCreateWithdraw = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateWithdraw int = 100

	opWeightMsgUpdateWithdraw = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateWithdraw int = 100

	opWeightMsgDeleteWithdraw = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteWithdraw int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	wayneGenesis := types.GenesisState{
		PoolList: []types.Pool{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		PoolCount: 2,
		DepositList: []types.Deposit{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DepositCount: 2,
		BorrowList: []types.Borrow{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		BorrowCount: 2,
		UserList: []types.User{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		UserCount: 2,
		InterfaceAprList: []types.InterfaceApr{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		InterfaceAprCount: 2,
		LoadPoolResponseList: []types.LoadPoolResponse{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		LoadPoolResponseCount: 2,
		WithdrawList: []types.Withdraw{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		WithdrawCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&wayneGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreatePool int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreatePool, &weightMsgCreatePool, nil,
		func(_ *rand.Rand) {
			weightMsgCreatePool = defaultWeightMsgCreatePool
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreatePool,
		waynesimulation.SimulateMsgCreatePool(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePool int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePool, &weightMsgUpdatePool, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePool = defaultWeightMsgUpdatePool
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePool,
		waynesimulation.SimulateMsgUpdatePool(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePool int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePool, &weightMsgDeletePool, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePool = defaultWeightMsgDeletePool
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePool,
		waynesimulation.SimulateMsgDeletePool(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateDeposit int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDeposit, &weightMsgCreateDeposit, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDeposit = defaultWeightMsgCreateDeposit
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDeposit,
		waynesimulation.SimulateMsgCreateDeposit(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDeposit int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDeposit, &weightMsgUpdateDeposit, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDeposit = defaultWeightMsgUpdateDeposit
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDeposit,
		waynesimulation.SimulateMsgUpdateDeposit(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDeposit int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDeposit, &weightMsgDeleteDeposit, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDeposit = defaultWeightMsgDeleteDeposit
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDeposit,
		waynesimulation.SimulateMsgDeleteDeposit(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateBorrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBorrow, &weightMsgCreateBorrow, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBorrow = defaultWeightMsgCreateBorrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBorrow,
		waynesimulation.SimulateMsgCreateBorrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateBorrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateBorrow, &weightMsgUpdateBorrow, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateBorrow = defaultWeightMsgUpdateBorrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateBorrow,
		waynesimulation.SimulateMsgUpdateBorrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteBorrow int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteBorrow, &weightMsgDeleteBorrow, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteBorrow = defaultWeightMsgDeleteBorrow
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteBorrow,
		waynesimulation.SimulateMsgDeleteBorrow(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateUser int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateUser, &weightMsgCreateUser, nil,
		func(_ *rand.Rand) {
			weightMsgCreateUser = defaultWeightMsgCreateUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateUser,
		waynesimulation.SimulateMsgCreateUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateUser int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateUser, &weightMsgUpdateUser, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateUser = defaultWeightMsgUpdateUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateUser,
		waynesimulation.SimulateMsgUpdateUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteUser int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteUser, &weightMsgDeleteUser, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteUser = defaultWeightMsgDeleteUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteUser,
		waynesimulation.SimulateMsgDeleteUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateInterfaceApr int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateInterfaceApr, &weightMsgCreateInterfaceApr, nil,
		func(_ *rand.Rand) {
			weightMsgCreateInterfaceApr = defaultWeightMsgCreateInterfaceApr
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateInterfaceApr,
		waynesimulation.SimulateMsgCreateInterfaceApr(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateInterfaceApr int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateInterfaceApr, &weightMsgUpdateInterfaceApr, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateInterfaceApr = defaultWeightMsgUpdateInterfaceApr
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateInterfaceApr,
		waynesimulation.SimulateMsgUpdateInterfaceApr(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteInterfaceApr int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteInterfaceApr, &weightMsgDeleteInterfaceApr, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteInterfaceApr = defaultWeightMsgDeleteInterfaceApr
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteInterfaceApr,
		waynesimulation.SimulateMsgDeleteInterfaceApr(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateLoadPoolResponse int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateLoadPoolResponse, &weightMsgCreateLoadPoolResponse, nil,
		func(_ *rand.Rand) {
			weightMsgCreateLoadPoolResponse = defaultWeightMsgCreateLoadPoolResponse
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateLoadPoolResponse,
		waynesimulation.SimulateMsgCreateLoadPoolResponse(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateLoadPoolResponse int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateLoadPoolResponse, &weightMsgUpdateLoadPoolResponse, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateLoadPoolResponse = defaultWeightMsgUpdateLoadPoolResponse
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateLoadPoolResponse,
		waynesimulation.SimulateMsgUpdateLoadPoolResponse(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteLoadPoolResponse int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteLoadPoolResponse, &weightMsgDeleteLoadPoolResponse, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteLoadPoolResponse = defaultWeightMsgDeleteLoadPoolResponse
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteLoadPoolResponse,
		waynesimulation.SimulateMsgDeleteLoadPoolResponse(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateWithdraw int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateWithdraw, &weightMsgCreateWithdraw, nil,
		func(_ *rand.Rand) {
			weightMsgCreateWithdraw = defaultWeightMsgCreateWithdraw
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateWithdraw,
		waynesimulation.SimulateMsgCreateWithdraw(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateWithdraw int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateWithdraw, &weightMsgUpdateWithdraw, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateWithdraw = defaultWeightMsgUpdateWithdraw
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateWithdraw,
		waynesimulation.SimulateMsgUpdateWithdraw(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteWithdraw int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteWithdraw, &weightMsgDeleteWithdraw, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteWithdraw = defaultWeightMsgDeleteWithdraw
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteWithdraw,
		waynesimulation.SimulateMsgDeleteWithdraw(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
