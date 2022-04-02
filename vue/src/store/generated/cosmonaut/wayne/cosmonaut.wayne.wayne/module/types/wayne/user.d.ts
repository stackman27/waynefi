import { Writer, Reader } from "protobufjs/minimal";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";
export declare const protobufPackage = "cosmonaut.wayne.wayne";
export interface User {
    creator: string;
    id: number;
    collateral: boolean[];
    deposit: Deposit[];
    borrow: Borrow[];
}
export declare const User: {
    encode(message: User, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial(object: DeepPartial<User>): User;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
