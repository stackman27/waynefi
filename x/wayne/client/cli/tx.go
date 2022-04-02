package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmonaut/wayne/x/wayne/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
	listSeparator              = ","
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdCreatePool())
	//cmd.AddCommand(CmdUpdatePool())
	cmd.AddCommand(CmdDeletePool())

	cmd.AddCommand(CmdCreateAllPool())

	cmd.AddCommand(CmdCreateDeposit())
	cmd.AddCommand(CmdUpdateDeposit())
	cmd.AddCommand(CmdDeleteDeposit())

	cmd.AddCommand(CmdCreateBorrow())
	cmd.AddCommand(CmdUpdateBorrow())
	cmd.AddCommand(CmdDeleteBorrow())

	cmd.AddCommand(CmdCreateUser())
	//cmd.AddCommand(CmdUpdateUser())
	cmd.AddCommand(CmdDeleteUser())
	cmd.AddCommand(CmdCreateInterfaceApr())
	cmd.AddCommand(CmdUpdateInterfaceApr())
	cmd.AddCommand(CmdDeleteInterfaceApr())
	cmd.AddCommand(CmdCreateLoadPoolResponse())
	cmd.AddCommand(CmdUpdateLoadPoolResponse())
	cmd.AddCommand(CmdDeleteLoadPoolResponse())
	cmd.AddCommand(CmdCreateWithdraw())
	cmd.AddCommand(CmdUpdateWithdraw())
	cmd.AddCommand(CmdDeleteWithdraw())
	cmd.AddCommand(CmdCreateRepay())
	cmd.AddCommand(CmdUpdateRepay())
	cmd.AddCommand(CmdDeleteRepay())
	// this line is used by starport scaffolding # 1

	return cmd
}
