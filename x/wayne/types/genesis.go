package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PoolList:             []Pool{},
		DepositList:          []Deposit{},
		BorrowList:           []Borrow{},
		UserList:             []User{},
		InterfaceAprList:     []InterfaceApr{},
		LoadPoolResponseList: []LoadPoolResponse{},
		WithdrawList:         []Withdraw{},
		RepayList:            []Repay{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in pool
	poolIdMap := make(map[uint64]bool)
	poolCount := gs.GetPoolCount()
	for _, elem := range gs.PoolList {
		if _, ok := poolIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for pool")
		}
		if elem.Id >= poolCount {
			return fmt.Errorf("pool id should be lower or equal than the last id")
		}
		poolIdMap[elem.Id] = true
	}
	// Check for duplicated ID in deposit
	depositIdMap := make(map[uint64]bool)
	depositCount := gs.GetDepositCount()
	for _, elem := range gs.DepositList {
		if _, ok := depositIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for deposit")
		}
		if elem.Id >= depositCount {
			return fmt.Errorf("deposit id should be lower or equal than the last id")
		}
		depositIdMap[elem.Id] = true
	}
	// Check for duplicated ID in borrow
	borrowIdMap := make(map[uint64]bool)
	borrowCount := gs.GetBorrowCount()
	for _, elem := range gs.BorrowList {
		if _, ok := borrowIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for borrow")
		}
		if elem.Id >= borrowCount {
			return fmt.Errorf("borrow id should be lower or equal than the last id")
		}
		borrowIdMap[elem.Id] = true
	}
	// Check for duplicated ID in user
	userIdMap := make(map[uint64]bool)
	userCount := gs.GetUserCount()
	for _, elem := range gs.UserList {
		if _, ok := userIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for user")
		}
		if elem.Id >= userCount {
			return fmt.Errorf("user id should be lower or equal than the last id")
		}
		userIdMap[elem.Id] = true
	}
	// Check for duplicated ID in interfaceApr
	interfaceAprIdMap := make(map[uint64]bool)
	interfaceAprCount := gs.GetInterfaceAprCount()
	for _, elem := range gs.InterfaceAprList {
		if _, ok := interfaceAprIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for interfaceApr")
		}
		if elem.Id >= interfaceAprCount {
			return fmt.Errorf("interfaceApr id should be lower or equal than the last id")
		}
		interfaceAprIdMap[elem.Id] = true
	}
	// Check for duplicated ID in loadPoolResponse
	loadPoolResponseIdMap := make(map[uint64]bool)
	loadPoolResponseCount := gs.GetLoadPoolResponseCount()
	for _, elem := range gs.LoadPoolResponseList {
		if _, ok := loadPoolResponseIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for loadPoolResponse")
		}
		if elem.Id >= loadPoolResponseCount {
			return fmt.Errorf("loadPoolResponse id should be lower or equal than the last id")
		}
		loadPoolResponseIdMap[elem.Id] = true
	}
	// Check for duplicated ID in withdraw
	withdrawIdMap := make(map[uint64]bool)
	withdrawCount := gs.GetWithdrawCount()
	for _, elem := range gs.WithdrawList {
		if _, ok := withdrawIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for withdraw")
		}
		if elem.Id >= withdrawCount {
			return fmt.Errorf("withdraw id should be lower or equal than the last id")
		}
		withdrawIdMap[elem.Id] = true
	}
	// Check for duplicated ID in repay
	repayIdMap := make(map[uint64]bool)
	repayCount := gs.GetRepayCount()
	for _, elem := range gs.RepayList {
		if _, ok := repayIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for repay")
		}
		if elem.Id >= repayCount {
			return fmt.Errorf("repay id should be lower or equal than the last id")
		}
		repayIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
