import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteLoadPoolResponse } from "./types/wayne/tx";
import { MsgCreatePool } from "./types/wayne/tx";
import { MsgCreateUser } from "./types/wayne/tx";
import { MsgUpdateInterfaceApr } from "./types/wayne/tx";
import { MsgCreateWithdraw } from "./types/wayne/tx";
import { MsgCreateDeposit } from "./types/wayne/tx";
import { MsgDeleteInterfaceApr } from "./types/wayne/tx";
import { MsgCreateInterfaceApr } from "./types/wayne/tx";
import { MsgCreateLoadPoolResponse } from "./types/wayne/tx";
import { MsgDeleteWithdraw } from "./types/wayne/tx";
import { MsgDeleteUser } from "./types/wayne/tx";
import { MsgDeletePool } from "./types/wayne/tx";
import { MsgUpdateRepay } from "./types/wayne/tx";
import { MsgCreateBorrow } from "./types/wayne/tx";
import { MsgUpdateLoadPoolResponse } from "./types/wayne/tx";
import { MsgDeleteDeposit } from "./types/wayne/tx";
import { MsgUpdateWithdraw } from "./types/wayne/tx";
import { MsgCreateRepay } from "./types/wayne/tx";
import { MsgUpdateDeposit } from "./types/wayne/tx";
import { MsgDeleteBorrow } from "./types/wayne/tx";
import { MsgUpdateUser } from "./types/wayne/tx";
import { MsgDeleteRepay } from "./types/wayne/tx";
import { MsgUpdatePool } from "./types/wayne/tx";
import { MsgUpdateBorrow } from "./types/wayne/tx";
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
    msgDeleteLoadPoolResponse: (data: MsgDeleteLoadPoolResponse) => EncodeObject;
    msgCreatePool: (data: MsgCreatePool) => EncodeObject;
    msgCreateUser: (data: MsgCreateUser) => EncodeObject;
    msgUpdateInterfaceApr: (data: MsgUpdateInterfaceApr) => EncodeObject;
    msgCreateWithdraw: (data: MsgCreateWithdraw) => EncodeObject;
    msgCreateDeposit: (data: MsgCreateDeposit) => EncodeObject;
    msgDeleteInterfaceApr: (data: MsgDeleteInterfaceApr) => EncodeObject;
    msgCreateInterfaceApr: (data: MsgCreateInterfaceApr) => EncodeObject;
    msgCreateLoadPoolResponse: (data: MsgCreateLoadPoolResponse) => EncodeObject;
    msgDeleteWithdraw: (data: MsgDeleteWithdraw) => EncodeObject;
    msgDeleteUser: (data: MsgDeleteUser) => EncodeObject;
    msgDeletePool: (data: MsgDeletePool) => EncodeObject;
    msgUpdateRepay: (data: MsgUpdateRepay) => EncodeObject;
    msgCreateBorrow: (data: MsgCreateBorrow) => EncodeObject;
    msgUpdateLoadPoolResponse: (data: MsgUpdateLoadPoolResponse) => EncodeObject;
    msgDeleteDeposit: (data: MsgDeleteDeposit) => EncodeObject;
    msgUpdateWithdraw: (data: MsgUpdateWithdraw) => EncodeObject;
    msgCreateRepay: (data: MsgCreateRepay) => EncodeObject;
    msgUpdateDeposit: (data: MsgUpdateDeposit) => EncodeObject;
    msgDeleteBorrow: (data: MsgDeleteBorrow) => EncodeObject;
    msgUpdateUser: (data: MsgUpdateUser) => EncodeObject;
    msgDeleteRepay: (data: MsgDeleteRepay) => EncodeObject;
    msgUpdatePool: (data: MsgUpdatePool) => EncodeObject;
    msgUpdateBorrow: (data: MsgUpdateBorrow) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
