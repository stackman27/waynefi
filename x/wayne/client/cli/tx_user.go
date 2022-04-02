package cli

import (
	"strconv"

	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-user [collateral] [deposit] [borrow]",
		Short: "Create a new user",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			argsCollateral := []bool{false, false, false, false, false, false}
			initialAktDeposit := types.Deposit{Asset: "akt", Denom: "uakt"}
			initialAtomDeposit := types.Deposit{Asset: "atom", Denom: "uatom"}
			initialCroDeposit := types.Deposit{Asset: "cro", Denom: "ucro"}
			initialDvpnDeposit := types.Deposit{Asset: "dvpn", Denom: "udvpn"}
			initialIrisDeposit := types.Deposit{Asset: "iris", Denom: "uiris"}
			initialXprtDeposit := types.Deposit{Asset: "xprt", Denom: "uxprt"}
			initialAktBorrow := types.Borrow{Asset: "akt", Denom: "uakt"}
			initialAtomBorrow := types.Borrow{Asset: "atom", Denom: "uatom"}
			initialCroBorrow := types.Borrow{Asset: "cro", Denom: "ucro"}
			initialDvpnBorrow := types.Borrow{Asset: "dvpn", Denom: "udvpn"}
			initialIrisBorrow := types.Borrow{Asset: "iris", Denom: "uiris"}
			initialXprtBorrow := types.Borrow{Asset: "xprt", Denom: "uxprt"}
			argsDeposit := []*types.Deposit{&initialAktDeposit, &initialAtomDeposit, &initialCroDeposit, &initialDvpnDeposit, &initialIrisDeposit, &initialXprtDeposit}
			argsBorrow := []*types.Borrow{&initialAktBorrow, &initialAtomBorrow, &initialCroBorrow, &initialDvpnBorrow, &initialIrisBorrow, &initialXprtBorrow}

			argsAssetBalances := []int32{2000, 1000, 1000, 1000, 1000, 1000, 1000, 1000}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateUser(clientCtx.GetFromAddress().String(), argsCollateral, argsDeposit, argsBorrow, argsAssetBalances)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

// func CmdUpdateUser() *cobra.Command {
// 	cmd := &cobra.Command{
// 		Use:   "update-user [id] [collateral] [deposit] [borrow]",
// 		Short: "Update a user",
// 		Args:  cobra.ExactArgs(4),
// 		RunE: func(cmd *cobra.Command, args []string) (err error) {
// 			id, err := strconv.ParseUint(args[0], 10, 64)
// 			if err != nil {
// 				return err
// 			}
// 			argsCollateral := []bool{}
// 			argsDeposit := []*types.Deposit{}
// 			argsBorrow := []*types.Borrow{}
// 			// argCollateral, err := cast.ToBoolE(args[1])
// 			// if err != nil {
// 			// 	return err
// 			// }

// 			// argDeposit, err := cast.ToInt32E(args[2])
// 			// if err != nil {
// 			// 	return err
// 			// }

// 			// argBorrow := args[3]

// 			clientCtx, err := client.GetClientTxContext(cmd)
// 			if err != nil {
// 				return err
// 			}

// 			msg := types.NewMsgUpdateUser(clientCtx.GetFromAddress().String(), id, argsCollateral, argsDeposit, argsBorrow)
// 			if err := msg.ValidateBasic(); err != nil {
// 				return err
// 			}
// 			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
// 		},
// 	}

// 	flags.AddTxFlagsToCmd(cmd)

// 	return cmd
// }

func CmdDeleteUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-user [id]",
		Short: "Delete a user by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteUser(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
