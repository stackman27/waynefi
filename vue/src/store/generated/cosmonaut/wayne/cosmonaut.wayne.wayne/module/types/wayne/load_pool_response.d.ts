import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "cosmonaut.wayne.wayne";
export interface LoadPoolResponse {
    id: number;
    asset: string;
    collatoralFactor: number;
    liquidity: number;
    depositApy: number;
    borrowApy: number;
    creator: string;
}
export declare const LoadPoolResponse: {
    encode(message: LoadPoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): LoadPoolResponse;
    fromJSON(object: any): LoadPoolResponse;
    toJSON(message: LoadPoolResponse): unknown;
    fromPartial(object: DeepPartial<LoadPoolResponse>): LoadPoolResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
