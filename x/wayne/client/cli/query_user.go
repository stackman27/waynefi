package cli

import (
	"context"
	"strconv"

	"github.com/cosmonaut/wayne/x/wayne/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

func CmdListUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-user",
		Short: "list all user",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllUserRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.UserAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-user [id]",
		Short: "shows a user",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetUserRequest{
				Id: id,
			}

			res, err := queryClient.User(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdLoadUser() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "load-user [id]",
		Short: "loads assets for specific user",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			walletAddress, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}

			params := &types.QueryLoadUserRequest{
				Id: walletAddress,
			}

			res, err := queryClient.UserLoad(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
