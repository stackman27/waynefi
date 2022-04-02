import { Writer, Reader } from "protobufjs/minimal";
import { Params } from "../wayne/params";
import { Pool } from "../wayne/pool";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";
import { User } from "../wayne/user";
import { InterfaceApr } from "../wayne/interface_apr";
import { LoadPoolResponse } from "../wayne/load_pool_response";
export declare const protobufPackage = "cosmonaut.wayne.wayne";
/** GenesisState defines the wayne module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    poolList: Pool[];
    poolCount: number;
    depositList: Deposit[];
    depositCount: number;
    borrowList: Borrow[];
    borrowCount: number;
    userList: User[];
    userCount: number;
    interfaceAprList: InterfaceApr[];
    interfaceAprCount: number;
    loadPoolResponseList: LoadPoolResponse[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    loadPoolResponseCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
