import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteDeposit } from "./types/wayne/tx";
import { MsgUpdateRepay } from "./types/wayne/tx";
import { MsgUpdatePool } from "./types/wayne/tx";
import { MsgUpdateInterfaceApr } from "./types/wayne/tx";
import { MsgCreatePool } from "./types/wayne/tx";
import { MsgCreateLoadPoolResponse } from "./types/wayne/tx";
import { MsgDeleteWithdraw } from "./types/wayne/tx";
import { MsgCreateInterfaceApr } from "./types/wayne/tx";
import { MsgCreateRepay } from "./types/wayne/tx";
import { MsgDeleteRepay } from "./types/wayne/tx";
import { MsgDeletePool } from "./types/wayne/tx";
import { MsgUpdateWithdraw } from "./types/wayne/tx";
import { MsgUpdateBorrow } from "./types/wayne/tx";
import { MsgDeleteUser } from "./types/wayne/tx";
import { MsgCreateWithdraw } from "./types/wayne/tx";
import { MsgUpdateUser } from "./types/wayne/tx";
import { MsgDeleteLoadPoolResponse } from "./types/wayne/tx";
import { MsgDeleteBorrow } from "./types/wayne/tx";
import { MsgCreateUser } from "./types/wayne/tx";
import { MsgCreateBorrow } from "./types/wayne/tx";
import { MsgDeleteInterfaceApr } from "./types/wayne/tx";
import { MsgUpdateLoadPoolResponse } from "./types/wayne/tx";
import { MsgUpdateDeposit } from "./types/wayne/tx";
import { MsgCreateDeposit } from "./types/wayne/tx";
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
    msgDeleteDeposit: (data: MsgDeleteDeposit) => EncodeObject;
    msgUpdateRepay: (data: MsgUpdateRepay) => EncodeObject;
    msgUpdatePool: (data: MsgUpdatePool) => EncodeObject;
    msgUpdateInterfaceApr: (data: MsgUpdateInterfaceApr) => EncodeObject;
    msgCreatePool: (data: MsgCreatePool) => EncodeObject;
    msgCreateLoadPoolResponse: (data: MsgCreateLoadPoolResponse) => EncodeObject;
    msgDeleteWithdraw: (data: MsgDeleteWithdraw) => EncodeObject;
    msgCreateInterfaceApr: (data: MsgCreateInterfaceApr) => EncodeObject;
    msgCreateRepay: (data: MsgCreateRepay) => EncodeObject;
    msgDeleteRepay: (data: MsgDeleteRepay) => EncodeObject;
    msgDeletePool: (data: MsgDeletePool) => EncodeObject;
    msgUpdateWithdraw: (data: MsgUpdateWithdraw) => EncodeObject;
    msgUpdateBorrow: (data: MsgUpdateBorrow) => EncodeObject;
    msgDeleteUser: (data: MsgDeleteUser) => EncodeObject;
    msgCreateWithdraw: (data: MsgCreateWithdraw) => EncodeObject;
    msgUpdateUser: (data: MsgUpdateUser) => EncodeObject;
    msgDeleteLoadPoolResponse: (data: MsgDeleteLoadPoolResponse) => EncodeObject;
    msgDeleteBorrow: (data: MsgDeleteBorrow) => EncodeObject;
    msgCreateUser: (data: MsgCreateUser) => EncodeObject;
    msgCreateBorrow: (data: MsgCreateBorrow) => EncodeObject;
    msgDeleteInterfaceApr: (data: MsgDeleteInterfaceApr) => EncodeObject;
    msgUpdateLoadPoolResponse: (data: MsgUpdateLoadPoolResponse) => EncodeObject;
    msgUpdateDeposit: (data: MsgUpdateDeposit) => EncodeObject;
    msgCreateDeposit: (data: MsgCreateDeposit) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
