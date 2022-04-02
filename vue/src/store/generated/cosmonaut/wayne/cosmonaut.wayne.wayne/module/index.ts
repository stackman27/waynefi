// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteDeposit } from "./types/wayne/tx";
import { MsgUpdateUser } from "./types/wayne/tx";
import { MsgCreateBorrow } from "./types/wayne/tx";
import { MsgDeleteBorrow } from "./types/wayne/tx";
import { MsgCreatePool } from "./types/wayne/tx";
import { MsgCreateLoadPoolResponse } from "./types/wayne/tx";
import { MsgCreateDeposit } from "./types/wayne/tx";
import { MsgUpdateBorrow } from "./types/wayne/tx";
import { MsgDeleteInterfaceApr } from "./types/wayne/tx";
import { MsgDeleteUser } from "./types/wayne/tx";
import { MsgCreateInterfaceApr } from "./types/wayne/tx";
import { MsgUpdateDeposit } from "./types/wayne/tx";
import { MsgCreateUser } from "./types/wayne/tx";
import { MsgUpdateLoadPoolResponse } from "./types/wayne/tx";
import { MsgDeletePool } from "./types/wayne/tx";
import { MsgDeleteLoadPoolResponse } from "./types/wayne/tx";
import { MsgUpdateInterfaceApr } from "./types/wayne/tx";
import { MsgUpdatePool } from "./types/wayne/tx";


const types = [
  ["/cosmonaut.wayne.wayne.MsgDeleteDeposit", MsgDeleteDeposit],
  ["/cosmonaut.wayne.wayne.MsgUpdateUser", MsgUpdateUser],
  ["/cosmonaut.wayne.wayne.MsgCreateBorrow", MsgCreateBorrow],
  ["/cosmonaut.wayne.wayne.MsgDeleteBorrow", MsgDeleteBorrow],
  ["/cosmonaut.wayne.wayne.MsgCreatePool", MsgCreatePool],
  ["/cosmonaut.wayne.wayne.MsgCreateLoadPoolResponse", MsgCreateLoadPoolResponse],
  ["/cosmonaut.wayne.wayne.MsgCreateDeposit", MsgCreateDeposit],
  ["/cosmonaut.wayne.wayne.MsgUpdateBorrow", MsgUpdateBorrow],
  ["/cosmonaut.wayne.wayne.MsgDeleteInterfaceApr", MsgDeleteInterfaceApr],
  ["/cosmonaut.wayne.wayne.MsgDeleteUser", MsgDeleteUser],
  ["/cosmonaut.wayne.wayne.MsgCreateInterfaceApr", MsgCreateInterfaceApr],
  ["/cosmonaut.wayne.wayne.MsgUpdateDeposit", MsgUpdateDeposit],
  ["/cosmonaut.wayne.wayne.MsgCreateUser", MsgCreateUser],
  ["/cosmonaut.wayne.wayne.MsgUpdateLoadPoolResponse", MsgUpdateLoadPoolResponse],
  ["/cosmonaut.wayne.wayne.MsgDeletePool", MsgDeletePool],
  ["/cosmonaut.wayne.wayne.MsgDeleteLoadPoolResponse", MsgDeleteLoadPoolResponse],
  ["/cosmonaut.wayne.wayne.MsgUpdateInterfaceApr", MsgUpdateInterfaceApr],
  ["/cosmonaut.wayne.wayne.MsgUpdatePool", MsgUpdatePool],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteDeposit: (data: MsgDeleteDeposit): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteDeposit", value: MsgDeleteDeposit.fromPartial( data ) }),
    msgUpdateUser: (data: MsgUpdateUser): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateUser", value: MsgUpdateUser.fromPartial( data ) }),
    msgCreateBorrow: (data: MsgCreateBorrow): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateBorrow", value: MsgCreateBorrow.fromPartial( data ) }),
    msgDeleteBorrow: (data: MsgDeleteBorrow): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteBorrow", value: MsgDeleteBorrow.fromPartial( data ) }),
    msgCreatePool: (data: MsgCreatePool): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreatePool", value: MsgCreatePool.fromPartial( data ) }),
    msgCreateLoadPoolResponse: (data: MsgCreateLoadPoolResponse): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateLoadPoolResponse", value: MsgCreateLoadPoolResponse.fromPartial( data ) }),
    msgCreateDeposit: (data: MsgCreateDeposit): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateDeposit", value: MsgCreateDeposit.fromPartial( data ) }),
    msgUpdateBorrow: (data: MsgUpdateBorrow): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateBorrow", value: MsgUpdateBorrow.fromPartial( data ) }),
    msgDeleteInterfaceApr: (data: MsgDeleteInterfaceApr): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteInterfaceApr", value: MsgDeleteInterfaceApr.fromPartial( data ) }),
    msgDeleteUser: (data: MsgDeleteUser): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteUser", value: MsgDeleteUser.fromPartial( data ) }),
    msgCreateInterfaceApr: (data: MsgCreateInterfaceApr): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateInterfaceApr", value: MsgCreateInterfaceApr.fromPartial( data ) }),
    msgUpdateDeposit: (data: MsgUpdateDeposit): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateDeposit", value: MsgUpdateDeposit.fromPartial( data ) }),
    msgCreateUser: (data: MsgCreateUser): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateUser", value: MsgCreateUser.fromPartial( data ) }),
    msgUpdateLoadPoolResponse: (data: MsgUpdateLoadPoolResponse): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateLoadPoolResponse", value: MsgUpdateLoadPoolResponse.fromPartial( data ) }),
    msgDeletePool: (data: MsgDeletePool): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeletePool", value: MsgDeletePool.fromPartial( data ) }),
    msgDeleteLoadPoolResponse: (data: MsgDeleteLoadPoolResponse): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteLoadPoolResponse", value: MsgDeleteLoadPoolResponse.fromPartial( data ) }),
    msgUpdateInterfaceApr: (data: MsgUpdateInterfaceApr): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateInterfaceApr", value: MsgUpdateInterfaceApr.fromPartial( data ) }),
    msgUpdatePool: (data: MsgUpdatePool): EncodeObject => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdatePool", value: MsgUpdatePool.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
