import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.wayne.wayne";
export interface Borrow {
    id: number;
    blockHeight: number;
    asset: string;
    amount: number;
    denom: string;
    creator: string;
}
export declare const Borrow: {
    encode(message: Borrow, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Borrow;
    fromJSON(object: any): Borrow;
    toJSON(message: Borrow): unknown;
    fromPartial(object: DeepPartial<Borrow>): Borrow;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
