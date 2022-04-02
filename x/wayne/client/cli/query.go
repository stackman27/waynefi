package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmonaut/wayne/x/wayne/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group wayne queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListPool())
	cmd.AddCommand(CmdShowPool())
	cmd.AddCommand(CmdLoadPoolGrpc())

	cmd.AddCommand(CmdListDeposit())
	cmd.AddCommand(CmdShowDeposit())

	cmd.AddCommand(CmdListBorrow())
	cmd.AddCommand(CmdShowBorrow())

	cmd.AddCommand(CmdListUser())
	cmd.AddCommand(CmdShowUser())

	cmd.AddCommand(CmdListInterfaceApr())
	cmd.AddCommand(CmdShowInterfaceApr())
	cmd.AddCommand(CmdListLoadPoolResponse())
	cmd.AddCommand(CmdShowLoadPoolResponse())

	cmd.AddCommand(CmdListWithdraw())
	cmd.AddCommand(CmdShowWithdraw())
	// this line is used by starport scaffolding # 1

	return cmd
}
