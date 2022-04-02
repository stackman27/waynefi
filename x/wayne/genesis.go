package wayne

import (
	"github.com/cosmonaut/wayne/x/wayne/keeper"
	"github.com/cosmonaut/wayne/x/wayne/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the pool
	for _, elem := range genState.PoolList {
		k.SetPool(ctx, elem)
	}

	// Set pool count
	k.SetPoolCount(ctx, genState.PoolCount)
	// Set all the deposit
	for _, elem := range genState.DepositList {
		k.SetDeposit(ctx, elem)
	}

	// Set deposit count
	k.SetDepositCount(ctx, genState.DepositCount)
	// Set all the borrow
	for _, elem := range genState.BorrowList {
		k.SetBorrow(ctx, elem)
	}

	// Set borrow count
	k.SetBorrowCount(ctx, genState.BorrowCount)
	// Set all the user
	for _, elem := range genState.UserList {
		k.SetUser(ctx, elem)
	}

	// Set user count
	k.SetUserCount(ctx, genState.UserCount)
	// Set all the interfaceApr
	for _, elem := range genState.InterfaceAprList {
		k.SetInterfaceApr(ctx, elem)
	}

	// Set interfaceApr count
	k.SetInterfaceAprCount(ctx, genState.InterfaceAprCount)
	// Set all the loadPoolResponse
	for _, elem := range genState.LoadPoolResponseList {
		k.SetLoadPoolResponse(ctx, elem)
	}

	// Set loadPoolResponse count
	k.SetLoadPoolResponseCount(ctx, genState.LoadPoolResponseCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PoolList = k.GetAllPool(ctx)
	genesis.PoolCount = k.GetPoolCount(ctx)
	genesis.DepositList = k.GetAllDeposit(ctx)
	genesis.DepositCount = k.GetDepositCount(ctx)
	genesis.BorrowList = k.GetAllBorrow(ctx)
	genesis.BorrowCount = k.GetBorrowCount(ctx)
	genesis.UserList = k.GetAllUser(ctx)
	genesis.UserCount = k.GetUserCount(ctx)
	genesis.InterfaceAprList = k.GetAllInterfaceApr(ctx)
	genesis.InterfaceAprCount = k.GetInterfaceAprCount(ctx)
	genesis.LoadPoolResponseList = k.GetAllLoadPoolResponse(ctx)
	genesis.LoadPoolResponseCount = k.GetLoadPoolResponseCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
