import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateDeposit } from "./types/wayne/tx";
import { MsgUpdateBorrow } from "./types/wayne/tx";
import { MsgUpdateInterfaceApr } from "./types/wayne/tx";
import { MsgDeleteInterfaceApr } from "./types/wayne/tx";
import { MsgUpdatePool } from "./types/wayne/tx";
import { MsgCreateInterfaceApr } from "./types/wayne/tx";
import { MsgCreateDeposit } from "./types/wayne/tx";
import { MsgCreateBorrow } from "./types/wayne/tx";
import { MsgCreateUser } from "./types/wayne/tx";
import { MsgDeletePool } from "./types/wayne/tx";
import { MsgDeleteUser } from "./types/wayne/tx";
import { MsgCreatePool } from "./types/wayne/tx";
import { MsgDeleteDeposit } from "./types/wayne/tx";
import { MsgDeleteBorrow } from "./types/wayne/tx";
import { MsgUpdateUser } from "./types/wayne/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgUpdateDeposit: (data: MsgUpdateDeposit) => EncodeObject;
    msgUpdateBorrow: (data: MsgUpdateBorrow) => EncodeObject;
    msgUpdateInterfaceApr: (data: MsgUpdateInterfaceApr) => EncodeObject;
    msgDeleteInterfaceApr: (data: MsgDeleteInterfaceApr) => EncodeObject;
    msgUpdatePool: (data: MsgUpdatePool) => EncodeObject;
    msgCreateInterfaceApr: (data: MsgCreateInterfaceApr) => EncodeObject;
    msgCreateDeposit: (data: MsgCreateDeposit) => EncodeObject;
    msgCreateBorrow: (data: MsgCreateBorrow) => EncodeObject;
    msgCreateUser: (data: MsgCreateUser) => EncodeObject;
    msgDeletePool: (data: MsgDeletePool) => EncodeObject;
    msgDeleteUser: (data: MsgDeleteUser) => EncodeObject;
    msgCreatePool: (data: MsgCreatePool) => EncodeObject;
    msgDeleteDeposit: (data: MsgDeleteDeposit) => EncodeObject;
    msgDeleteBorrow: (data: MsgDeleteBorrow) => EncodeObject;
    msgUpdateUser: (data: MsgUpdateUser) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
