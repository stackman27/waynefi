import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateBorrow } from "./types/wayne/tx";
import { MsgUpdateInterfaceApr } from "./types/wayne/tx";
import { MsgUpdateRepay } from "./types/wayne/tx";
import { MsgCreateLoadPoolResponse } from "./types/wayne/tx";
import { MsgDeletePool } from "./types/wayne/tx";
import { MsgCreateDeposit } from "./types/wayne/tx";
import { MsgDeleteUser } from "./types/wayne/tx";
import { MsgCreateWithdraw } from "./types/wayne/tx";
import { MsgCreateRepay } from "./types/wayne/tx";
import { MsgUpdatePool } from "./types/wayne/tx";
import { MsgDeleteBorrow } from "./types/wayne/tx";
import { MsgCreateUser } from "./types/wayne/tx";
import { MsgUpdateUser } from "./types/wayne/tx";
import { MsgUpdateWithdraw } from "./types/wayne/tx";
import { MsgUpdateLoadPoolResponse } from "./types/wayne/tx";
import { MsgDeleteWithdraw } from "./types/wayne/tx";
import { MsgDeleteRepay } from "./types/wayne/tx";
import { MsgDeleteDeposit } from "./types/wayne/tx";
import { MsgDeleteLoadPoolResponse } from "./types/wayne/tx";
import { MsgCreateInterfaceApr } from "./types/wayne/tx";
import { MsgCreatePool } from "./types/wayne/tx";
import { MsgUpdateDeposit } from "./types/wayne/tx";
import { MsgCreateBorrow } from "./types/wayne/tx";
import { MsgDeleteInterfaceApr } from "./types/wayne/tx";
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
    msgUpdateBorrow: (data: MsgUpdateBorrow) => EncodeObject;
    msgUpdateInterfaceApr: (data: MsgUpdateInterfaceApr) => EncodeObject;
    msgUpdateRepay: (data: MsgUpdateRepay) => EncodeObject;
    msgCreateLoadPoolResponse: (data: MsgCreateLoadPoolResponse) => EncodeObject;
    msgDeletePool: (data: MsgDeletePool) => EncodeObject;
    msgCreateDeposit: (data: MsgCreateDeposit) => EncodeObject;
    msgDeleteUser: (data: MsgDeleteUser) => EncodeObject;
    msgCreateWithdraw: (data: MsgCreateWithdraw) => EncodeObject;
    msgCreateRepay: (data: MsgCreateRepay) => EncodeObject;
    msgUpdatePool: (data: MsgUpdatePool) => EncodeObject;
    msgDeleteBorrow: (data: MsgDeleteBorrow) => EncodeObject;
    msgCreateUser: (data: MsgCreateUser) => EncodeObject;
    msgUpdateUser: (data: MsgUpdateUser) => EncodeObject;
    msgUpdateWithdraw: (data: MsgUpdateWithdraw) => EncodeObject;
    msgUpdateLoadPoolResponse: (data: MsgUpdateLoadPoolResponse) => EncodeObject;
    msgDeleteWithdraw: (data: MsgDeleteWithdraw) => EncodeObject;
    msgDeleteRepay: (data: MsgDeleteRepay) => EncodeObject;
    msgDeleteDeposit: (data: MsgDeleteDeposit) => EncodeObject;
    msgDeleteLoadPoolResponse: (data: MsgDeleteLoadPoolResponse) => EncodeObject;
    msgCreateInterfaceApr: (data: MsgCreateInterfaceApr) => EncodeObject;
    msgCreatePool: (data: MsgCreatePool) => EncodeObject;
    msgUpdateDeposit: (data: MsgUpdateDeposit) => EncodeObject;
    msgCreateBorrow: (data: MsgCreateBorrow) => EncodeObject;
    msgDeleteInterfaceApr: (data: MsgDeleteInterfaceApr) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
