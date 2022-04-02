import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../wayne/params";
import { Pool } from "../wayne/pool";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { LoadPoolResponse } from "../wayne/load_pool_response";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";
import { User } from "../wayne/user";
import { InterfaceApr } from "../wayne/interface_apr";
export declare const protobufPackage = "cosmonaut.wayne.wayne";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetPoolRequest {
    id: number;
}
export interface QueryGetPoolResponse {
    Pool: Pool | undefined;
}
export interface QueryAllPoolRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPoolResponse {
    Pool: Pool[];
    pagination: PageResponse | undefined;
}
export interface QueryLoadPoolRequest {
    pagination: PageRequest | undefined;
}
export interface QueryLoadPoolResponse {
    LoadPoolResponse: LoadPoolResponse[];
    pagination: PageResponse | undefined;
}
export interface QueryGetDepositRequest {
    id: number;
}
export interface QueryGetDepositResponse {
    Deposit: Deposit | undefined;
}
export interface QueryAllDepositRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDepositResponse {
    Deposit: Deposit[];
    pagination: PageResponse | undefined;
}
export interface QueryGetBorrowRequest {
    id: number;
}
export interface QueryGetBorrowResponse {
    Borrow: Borrow | undefined;
}
export interface QueryAllBorrowRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBorrowResponse {
    Borrow: Borrow[];
    pagination: PageResponse | undefined;
}
export interface QueryGetUserRequest {
    id: number;
}
export interface QueryGetUserResponse {
    User: User | undefined;
}
export interface QueryAllUserRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllUserResponse {
    User: User[];
    pagination: PageResponse | undefined;
}
export interface QueryGetInterfaceAprRequest {
    id: number;
}
export interface QueryGetInterfaceAprResponse {
    InterfaceApr: InterfaceApr | undefined;
}
export interface QueryAllInterfaceAprRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllInterfaceAprResponse {
    InterfaceApr: InterfaceApr[];
    pagination: PageResponse | undefined;
}
export interface QueryGetLoadPoolResponseRequest {
    id: number;
}
export interface QueryGetLoadPoolResponseResponse {
    LoadPoolResponse: LoadPoolResponse | undefined;
}
export interface QueryAllLoadPoolResponseRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllLoadPoolResponseResponse {
    LoadPoolResponse: LoadPoolResponse[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetPoolRequest: {
    encode(message: QueryGetPoolRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPoolRequest;
    fromJSON(object: any): QueryGetPoolRequest;
    toJSON(message: QueryGetPoolRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest;
};
export declare const QueryGetPoolResponse: {
    encode(message: QueryGetPoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPoolResponse;
    fromJSON(object: any): QueryGetPoolResponse;
    toJSON(message: QueryGetPoolResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse;
};
export declare const QueryAllPoolRequest: {
    encode(message: QueryAllPoolRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPoolRequest;
    fromJSON(object: any): QueryAllPoolRequest;
    toJSON(message: QueryAllPoolRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPoolRequest>): QueryAllPoolRequest;
};
export declare const QueryAllPoolResponse: {
    encode(message: QueryAllPoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPoolResponse;
    fromJSON(object: any): QueryAllPoolResponse;
    toJSON(message: QueryAllPoolResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPoolResponse>): QueryAllPoolResponse;
};
export declare const QueryLoadPoolRequest: {
    encode(message: QueryLoadPoolRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLoadPoolRequest;
    fromJSON(object: any): QueryLoadPoolRequest;
    toJSON(message: QueryLoadPoolRequest): unknown;
    fromPartial(object: DeepPartial<QueryLoadPoolRequest>): QueryLoadPoolRequest;
};
export declare const QueryLoadPoolResponse: {
    encode(message: QueryLoadPoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryLoadPoolResponse;
    fromJSON(object: any): QueryLoadPoolResponse;
    toJSON(message: QueryLoadPoolResponse): unknown;
    fromPartial(object: DeepPartial<QueryLoadPoolResponse>): QueryLoadPoolResponse;
};
export declare const QueryGetDepositRequest: {
    encode(message: QueryGetDepositRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDepositRequest;
    fromJSON(object: any): QueryGetDepositRequest;
    toJSON(message: QueryGetDepositRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDepositRequest>): QueryGetDepositRequest;
};
export declare const QueryGetDepositResponse: {
    encode(message: QueryGetDepositResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDepositResponse;
    fromJSON(object: any): QueryGetDepositResponse;
    toJSON(message: QueryGetDepositResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDepositResponse>): QueryGetDepositResponse;
};
export declare const QueryAllDepositRequest: {
    encode(message: QueryAllDepositRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDepositRequest;
    fromJSON(object: any): QueryAllDepositRequest;
    toJSON(message: QueryAllDepositRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDepositRequest>): QueryAllDepositRequest;
};
export declare const QueryAllDepositResponse: {
    encode(message: QueryAllDepositResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDepositResponse;
    fromJSON(object: any): QueryAllDepositResponse;
    toJSON(message: QueryAllDepositResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDepositResponse>): QueryAllDepositResponse;
};
export declare const QueryGetBorrowRequest: {
    encode(message: QueryGetBorrowRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBorrowRequest;
    fromJSON(object: any): QueryGetBorrowRequest;
    toJSON(message: QueryGetBorrowRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBorrowRequest>): QueryGetBorrowRequest;
};
export declare const QueryGetBorrowResponse: {
    encode(message: QueryGetBorrowResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBorrowResponse;
    fromJSON(object: any): QueryGetBorrowResponse;
    toJSON(message: QueryGetBorrowResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBorrowResponse>): QueryGetBorrowResponse;
};
export declare const QueryAllBorrowRequest: {
    encode(message: QueryAllBorrowRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBorrowRequest;
    fromJSON(object: any): QueryAllBorrowRequest;
    toJSON(message: QueryAllBorrowRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBorrowRequest>): QueryAllBorrowRequest;
};
export declare const QueryAllBorrowResponse: {
    encode(message: QueryAllBorrowResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBorrowResponse;
    fromJSON(object: any): QueryAllBorrowResponse;
    toJSON(message: QueryAllBorrowResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBorrowResponse>): QueryAllBorrowResponse;
};
export declare const QueryGetUserRequest: {
    encode(message: QueryGetUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUserRequest;
    fromJSON(object: any): QueryGetUserRequest;
    toJSON(message: QueryGetUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetUserRequest>): QueryGetUserRequest;
};
export declare const QueryGetUserResponse: {
    encode(message: QueryGetUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUserResponse;
    fromJSON(object: any): QueryGetUserResponse;
    toJSON(message: QueryGetUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetUserResponse>): QueryGetUserResponse;
};
export declare const QueryAllUserRequest: {
    encode(message: QueryAllUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUserRequest;
    fromJSON(object: any): QueryAllUserRequest;
    toJSON(message: QueryAllUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllUserRequest>): QueryAllUserRequest;
};
export declare const QueryAllUserResponse: {
    encode(message: QueryAllUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUserResponse;
    fromJSON(object: any): QueryAllUserResponse;
    toJSON(message: QueryAllUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllUserResponse>): QueryAllUserResponse;
};
export declare const QueryGetInterfaceAprRequest: {
    encode(message: QueryGetInterfaceAprRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInterfaceAprRequest;
    fromJSON(object: any): QueryGetInterfaceAprRequest;
    toJSON(message: QueryGetInterfaceAprRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetInterfaceAprRequest>): QueryGetInterfaceAprRequest;
};
export declare const QueryGetInterfaceAprResponse: {
    encode(message: QueryGetInterfaceAprResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInterfaceAprResponse;
    fromJSON(object: any): QueryGetInterfaceAprResponse;
    toJSON(message: QueryGetInterfaceAprResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetInterfaceAprResponse>): QueryGetInterfaceAprResponse;
};
export declare const QueryAllInterfaceAprRequest: {
    encode(message: QueryAllInterfaceAprRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInterfaceAprRequest;
    fromJSON(object: any): QueryAllInterfaceAprRequest;
    toJSON(message: QueryAllInterfaceAprRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllInterfaceAprRequest>): QueryAllInterfaceAprRequest;
};
export declare const QueryAllInterfaceAprResponse: {
    encode(message: QueryAllInterfaceAprResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInterfaceAprResponse;
    fromJSON(object: any): QueryAllInterfaceAprResponse;
    toJSON(message: QueryAllInterfaceAprResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllInterfaceAprResponse>): QueryAllInterfaceAprResponse;
};
export declare const QueryGetLoadPoolResponseRequest: {
    encode(message: QueryGetLoadPoolResponseRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetLoadPoolResponseRequest;
    fromJSON(object: any): QueryGetLoadPoolResponseRequest;
    toJSON(message: QueryGetLoadPoolResponseRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetLoadPoolResponseRequest>): QueryGetLoadPoolResponseRequest;
};
export declare const QueryGetLoadPoolResponseResponse: {
    encode(message: QueryGetLoadPoolResponseResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetLoadPoolResponseResponse;
    fromJSON(object: any): QueryGetLoadPoolResponseResponse;
    toJSON(message: QueryGetLoadPoolResponseResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetLoadPoolResponseResponse>): QueryGetLoadPoolResponseResponse;
};
export declare const QueryAllLoadPoolResponseRequest: {
    encode(message: QueryAllLoadPoolResponseRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllLoadPoolResponseRequest;
    fromJSON(object: any): QueryAllLoadPoolResponseRequest;
    toJSON(message: QueryAllLoadPoolResponseRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllLoadPoolResponseRequest>): QueryAllLoadPoolResponseRequest;
};
export declare const QueryAllLoadPoolResponseResponse: {
    encode(message: QueryAllLoadPoolResponseResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllLoadPoolResponseResponse;
    fromJSON(object: any): QueryAllLoadPoolResponseResponse;
    toJSON(message: QueryAllLoadPoolResponseResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllLoadPoolResponseResponse>): QueryAllLoadPoolResponseResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Pool by id. */
    Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
    /** Queries a list of Pool items. */
    PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
    PoolLoad(request: QueryLoadPoolRequest): Promise<QueryLoadPoolResponse>;
    /** Queries a Deposit by id. */
    Deposit(request: QueryGetDepositRequest): Promise<QueryGetDepositResponse>;
    /** Queries a list of Deposit items. */
    DepositAll(request: QueryAllDepositRequest): Promise<QueryAllDepositResponse>;
    /** Queries a Borrow by id. */
    Borrow(request: QueryGetBorrowRequest): Promise<QueryGetBorrowResponse>;
    /** Queries a list of Borrow items. */
    BorrowAll(request: QueryAllBorrowRequest): Promise<QueryAllBorrowResponse>;
    /** Queries a User by id. */
    User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    /** Queries a list of User items. */
    UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
    /** Queries a InterfaceApr by id. */
    InterfaceApr(request: QueryGetInterfaceAprRequest): Promise<QueryGetInterfaceAprResponse>;
    /** Queries a list of InterfaceApr items. */
    InterfaceAprAll(request: QueryAllInterfaceAprRequest): Promise<QueryAllInterfaceAprResponse>;
    /** Queries a LoadPoolResponse by id. */
    LoadPoolResponse(request: QueryGetLoadPoolResponseRequest): Promise<QueryGetLoadPoolResponseResponse>;
    /** Queries a list of LoadPoolResponse items. */
    LoadPoolResponseAll(request: QueryAllLoadPoolResponseRequest): Promise<QueryAllLoadPoolResponseResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
    PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
    PoolLoad(request: QueryLoadPoolRequest): Promise<QueryLoadPoolResponse>;
    Deposit(request: QueryGetDepositRequest): Promise<QueryGetDepositResponse>;
    DepositAll(request: QueryAllDepositRequest): Promise<QueryAllDepositResponse>;
    Borrow(request: QueryGetBorrowRequest): Promise<QueryGetBorrowResponse>;
    BorrowAll(request: QueryAllBorrowRequest): Promise<QueryAllBorrowResponse>;
    User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
    InterfaceApr(request: QueryGetInterfaceAprRequest): Promise<QueryGetInterfaceAprResponse>;
    InterfaceAprAll(request: QueryAllInterfaceAprRequest): Promise<QueryAllInterfaceAprResponse>;
    LoadPoolResponse(request: QueryGetLoadPoolResponseRequest): Promise<QueryGetLoadPoolResponseResponse>;
    LoadPoolResponseAll(request: QueryAllLoadPoolResponseRequest): Promise<QueryAllLoadPoolResponseResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
