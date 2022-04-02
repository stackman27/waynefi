// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateRepay } from "./types/wayne/tx";
import { MsgCreateInterfaceApr } from "./types/wayne/tx";
import { MsgDeleteDeposit } from "./types/wayne/tx";
import { MsgCreateWithdraw } from "./types/wayne/tx";
import { MsgCreateUser } from "./types/wayne/tx";
import { MsgUpdateWithdraw } from "./types/wayne/tx";
import { MsgDeleteUser } from "./types/wayne/tx";
import { MsgUpdateRepay } from "./types/wayne/tx";
import { MsgDeleteRepay } from "./types/wayne/tx";
import { MsgDeleteWithdraw } from "./types/wayne/tx";
import { MsgCreateLoadPoolResponse } from "./types/wayne/tx";
import { MsgCreateDeposit } from "./types/wayne/tx";
import { MsgDeleteBorrow } from "./types/wayne/tx";
import { MsgDeleteLoadPoolResponse } from "./types/wayne/tx";
import { MsgUpdateLoadPoolResponse } from "./types/wayne/tx";
import { MsgUpdateBorrow } from "./types/wayne/tx";
import { MsgUpdateDeposit } from "./types/wayne/tx";
import { MsgUpdateUser } from "./types/wayne/tx";
import { MsgUpdateInterfaceApr } from "./types/wayne/tx";
import { MsgDeleteInterfaceApr } from "./types/wayne/tx";
import { MsgCreatePool } from "./types/wayne/tx";
import { MsgDeletePool } from "./types/wayne/tx";
import { MsgCreateBorrow } from "./types/wayne/tx";
import { MsgUpdatePool } from "./types/wayne/tx";
const types = [
    ["/cosmonaut.wayne.wayne.MsgCreateRepay", MsgCreateRepay],
    ["/cosmonaut.wayne.wayne.MsgCreateInterfaceApr", MsgCreateInterfaceApr],
    ["/cosmonaut.wayne.wayne.MsgDeleteDeposit", MsgDeleteDeposit],
    ["/cosmonaut.wayne.wayne.MsgCreateWithdraw", MsgCreateWithdraw],
    ["/cosmonaut.wayne.wayne.MsgCreateUser", MsgCreateUser],
    ["/cosmonaut.wayne.wayne.MsgUpdateWithdraw", MsgUpdateWithdraw],
    ["/cosmonaut.wayne.wayne.MsgDeleteUser", MsgDeleteUser],
    ["/cosmonaut.wayne.wayne.MsgUpdateRepay", MsgUpdateRepay],
    ["/cosmonaut.wayne.wayne.MsgDeleteRepay", MsgDeleteRepay],
    ["/cosmonaut.wayne.wayne.MsgDeleteWithdraw", MsgDeleteWithdraw],
    ["/cosmonaut.wayne.wayne.MsgCreateLoadPoolResponse", MsgCreateLoadPoolResponse],
    ["/cosmonaut.wayne.wayne.MsgCreateDeposit", MsgCreateDeposit],
    ["/cosmonaut.wayne.wayne.MsgDeleteBorrow", MsgDeleteBorrow],
    ["/cosmonaut.wayne.wayne.MsgDeleteLoadPoolResponse", MsgDeleteLoadPoolResponse],
    ["/cosmonaut.wayne.wayne.MsgUpdateLoadPoolResponse", MsgUpdateLoadPoolResponse],
    ["/cosmonaut.wayne.wayne.MsgUpdateBorrow", MsgUpdateBorrow],
    ["/cosmonaut.wayne.wayne.MsgUpdateDeposit", MsgUpdateDeposit],
    ["/cosmonaut.wayne.wayne.MsgUpdateUser", MsgUpdateUser],
    ["/cosmonaut.wayne.wayne.MsgUpdateInterfaceApr", MsgUpdateInterfaceApr],
    ["/cosmonaut.wayne.wayne.MsgDeleteInterfaceApr", MsgDeleteInterfaceApr],
    ["/cosmonaut.wayne.wayne.MsgCreatePool", MsgCreatePool],
    ["/cosmonaut.wayne.wayne.MsgDeletePool", MsgDeletePool],
    ["/cosmonaut.wayne.wayne.MsgCreateBorrow", MsgCreateBorrow],
    ["/cosmonaut.wayne.wayne.MsgUpdatePool", MsgUpdatePool],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateRepay: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateRepay", value: MsgCreateRepay.fromPartial(data) }),
        msgCreateInterfaceApr: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateInterfaceApr", value: MsgCreateInterfaceApr.fromPartial(data) }),
        msgDeleteDeposit: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteDeposit", value: MsgDeleteDeposit.fromPartial(data) }),
        msgCreateWithdraw: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateWithdraw", value: MsgCreateWithdraw.fromPartial(data) }),
        msgCreateUser: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateUser", value: MsgCreateUser.fromPartial(data) }),
        msgUpdateWithdraw: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateWithdraw", value: MsgUpdateWithdraw.fromPartial(data) }),
        msgDeleteUser: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteUser", value: MsgDeleteUser.fromPartial(data) }),
        msgUpdateRepay: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateRepay", value: MsgUpdateRepay.fromPartial(data) }),
        msgDeleteRepay: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteRepay", value: MsgDeleteRepay.fromPartial(data) }),
        msgDeleteWithdraw: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteWithdraw", value: MsgDeleteWithdraw.fromPartial(data) }),
        msgCreateLoadPoolResponse: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateLoadPoolResponse", value: MsgCreateLoadPoolResponse.fromPartial(data) }),
        msgCreateDeposit: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateDeposit", value: MsgCreateDeposit.fromPartial(data) }),
        msgDeleteBorrow: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteBorrow", value: MsgDeleteBorrow.fromPartial(data) }),
        msgDeleteLoadPoolResponse: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteLoadPoolResponse", value: MsgDeleteLoadPoolResponse.fromPartial(data) }),
        msgUpdateLoadPoolResponse: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateLoadPoolResponse", value: MsgUpdateLoadPoolResponse.fromPartial(data) }),
        msgUpdateBorrow: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateBorrow", value: MsgUpdateBorrow.fromPartial(data) }),
        msgUpdateDeposit: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateDeposit", value: MsgUpdateDeposit.fromPartial(data) }),
        msgUpdateUser: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateUser", value: MsgUpdateUser.fromPartial(data) }),
        msgUpdateInterfaceApr: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdateInterfaceApr", value: MsgUpdateInterfaceApr.fromPartial(data) }),
        msgDeleteInterfaceApr: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeleteInterfaceApr", value: MsgDeleteInterfaceApr.fromPartial(data) }),
        msgCreatePool: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreatePool", value: MsgCreatePool.fromPartial(data) }),
        msgDeletePool: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgDeletePool", value: MsgDeletePool.fromPartial(data) }),
        msgCreateBorrow: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgCreateBorrow", value: MsgCreateBorrow.fromPartial(data) }),
        msgUpdatePool: (data) => ({ typeUrl: "/cosmonaut.wayne.wayne.MsgUpdatePool", value: MsgUpdatePool.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
