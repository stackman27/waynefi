package cli

import (
	"strconv"

	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdCreateLoadPoolResponse() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-load-pool-response [asset] [collatoral-factor] [liquidity] [deposit-apy] [borrow-apy]",
		Short: "Create a new loadPoolResponse",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAsset := args[0]
			argCollatoralFactor, err := cast.ToInt32E(args[1])
			if err != nil {
				return err
			}
			argLiquidity, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}
			argDepositApy, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}
			argBorrowApy, err := cast.ToInt32E(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateLoadPoolResponse(clientCtx.GetFromAddress().String(), argAsset, argCollatoralFactor, argLiquidity, argDepositApy, argBorrowApy)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateLoadPoolResponse() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-load-pool-response [id] [asset] [collatoral-factor] [liquidity] [deposit-apy] [borrow-apy]",
		Short: "Update a loadPoolResponse",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argAsset := args[1]

			argCollatoralFactor, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}

			argLiquidity, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}

			argDepositApy, err := cast.ToInt32E(args[4])
			if err != nil {
				return err
			}

			argBorrowApy, err := cast.ToInt32E(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateLoadPoolResponse(clientCtx.GetFromAddress().String(), id, argAsset, argCollatoralFactor, argLiquidity, argDepositApy, argBorrowApy)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteLoadPoolResponse() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-load-pool-response [id]",
		Short: "Delete a loadPoolResponse by id",
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

			msg := types.NewMsgDeleteLoadPoolResponse(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
