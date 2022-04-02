import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.wayne.wayne";
export interface InterfaceApr {
    id: number;
    blocktime: string;
    timeApr: number;
    creator: string;
}
export declare const InterfaceApr: {
    encode(message: InterfaceApr, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): InterfaceApr;
    fromJSON(object: any): InterfaceApr;
    toJSON(message: InterfaceApr): unknown;
    fromPartial(object: DeepPartial<InterfaceApr>): InterfaceApr;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
