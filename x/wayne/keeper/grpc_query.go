package keeper

import (
	"github.com/cosmonaut/wayne/x/wayne/types"
)

var _ types.QueryServer = Keeper{}
