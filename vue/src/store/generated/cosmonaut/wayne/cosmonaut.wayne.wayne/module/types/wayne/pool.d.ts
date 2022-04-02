import { Writer, Reader } from "protobufjs/minimal";
import { InterfaceApr } from "../wayne/interface_apr";
import { User } from "../wayne/user";
export declare const protobufPackage = "cosmonaut.wayne.wayne";
export interface Pool {
    id: number;
    asset: string;
    denom: string;
    collatoralFactor: number;
    depth: number;
    aPR: InterfaceApr[];
    users: User[];
    creator: string;
}
export declare const Pool: {
    encode(message: Pool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: DeepPartial<Pool>): Pool;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
