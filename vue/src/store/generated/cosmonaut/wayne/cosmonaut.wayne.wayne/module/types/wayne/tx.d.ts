import { Reader, Writer } from "protobufjs/minimal";
import { InterfaceApr } from "../wayne/interface_apr";
import { User } from "../wayne/user";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";
export declare const protobufPackage = "cosmonaut.wayne.wayne";
export interface MsgCreatePool {
    creator: string;
    asset: string;
    denom: string;
    collatoralFactor: number;
    depth: number;
    aPR: InterfaceApr[];
    users: User[];
}
export interface MsgCreatePoolResponse {
    id: number;
}
export interface MsgUpdatePool {
    creator: string;
    id: number;
    asset: string;
    denom: string;
    collatoralFactor: number;
    depth: number;
    aPR: InterfaceApr[];
    users: User[];
}
export interface MsgUpdatePoolResponse {
}
export interface MsgDeletePool {
    creator: string;
    id: number;
}
export interface MsgDeletePoolResponse {
}
export interface MsgCreateDeposit {
    creator: string;
    blockHeight: number;
    asset: string;
    amount: number;
    denom: string;
}
export interface MsgCreateDepositResponse {
    id: number;
}
export interface MsgUpdateDeposit {
    creator: string;
    id: number;
    blockHeight: number;
    asset: string;
    amount: number;
    denom: string;
}
export interface MsgUpdateDepositResponse {
}
export interface MsgDeleteDeposit {
    creator: string;
    id: number;
}
export interface MsgDeleteDepositResponse {
}
export interface MsgCreateBorrow {
    creator: string;
    blockHeight: number;
    asset: string;
    amount: number;
    denom: string;
}
export interface MsgCreateBorrowResponse {
    id: number;
}
export interface MsgUpdateBorrow {
    creator: string;
    id: number;
    blockHeight: number;
    asset: string;
    amount: number;
    denom: string;
}
export interface MsgUpdateBorrowResponse {
}
export interface MsgDeleteBorrow {
    creator: string;
    id: number;
}
export interface MsgDeleteBorrowResponse {
}
export interface MsgCreateUser {
    creator: string;
    collateral: boolean[];
    deposit: Deposit[];
    borrow: Borrow[];
}
export interface MsgCreateUserResponse {
    id: number;
}
export interface MsgUpdateUser {
    creator: string;
    id: number;
    collateral: boolean[];
    deposit: Deposit[];
    borrow: Borrow[];
}
export interface MsgUpdateUserResponse {
}
export interface MsgDeleteUser {
    creator: string;
    id: number;
}
export interface MsgDeleteUserResponse {
}
export interface MsgCreateInterfaceApr {
    creator: string;
    blocktime: string;
    timeApr: number;
}
export interface MsgCreateInterfaceAprResponse {
    id: number;
}
export interface MsgUpdateInterfaceApr {
    creator: string;
    id: number;
    blocktime: string;
    timeApr: number;
}
export interface MsgUpdateInterfaceAprResponse {
}
export interface MsgDeleteInterfaceApr {
    creator: string;
    id: number;
}
export interface MsgDeleteInterfaceAprResponse {
}
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool;
    fromJSON(object: any): MsgCreatePool;
    toJSON(message: MsgCreatePool): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(message: MsgCreatePoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromJSON(object: any): MsgCreatePoolResponse;
    toJSON(message: MsgCreatePoolResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
};
export declare const MsgUpdatePool: {
    encode(message: MsgUpdatePool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool;
    fromJSON(object: any): MsgUpdatePool;
    toJSON(message: MsgUpdatePool): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool;
};
export declare const MsgUpdatePoolResponse: {
    encode(_: MsgUpdatePoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePoolResponse;
    fromJSON(_: any): MsgUpdatePoolResponse;
    toJSON(_: MsgUpdatePoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse;
};
export declare const MsgDeletePool: {
    encode(message: MsgDeletePool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool;
    fromJSON(object: any): MsgDeletePool;
    toJSON(message: MsgDeletePool): unknown;
    fromPartial(object: DeepPartial<MsgDeletePool>): MsgDeletePool;
};
export declare const MsgDeletePoolResponse: {
    encode(_: MsgDeletePoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePoolResponse;
    fromJSON(_: any): MsgDeletePoolResponse;
    toJSON(_: MsgDeletePoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePoolResponse>): MsgDeletePoolResponse;
};
export declare const MsgCreateDeposit: {
    encode(message: MsgCreateDeposit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDeposit;
    fromJSON(object: any): MsgCreateDeposit;
    toJSON(message: MsgCreateDeposit): unknown;
    fromPartial(object: DeepPartial<MsgCreateDeposit>): MsgCreateDeposit;
};
export declare const MsgCreateDepositResponse: {
    encode(message: MsgCreateDepositResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDepositResponse;
    fromJSON(object: any): MsgCreateDepositResponse;
    toJSON(message: MsgCreateDepositResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateDepositResponse>): MsgCreateDepositResponse;
};
export declare const MsgUpdateDeposit: {
    encode(message: MsgUpdateDeposit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDeposit;
    fromJSON(object: any): MsgUpdateDeposit;
    toJSON(message: MsgUpdateDeposit): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDeposit>): MsgUpdateDeposit;
};
export declare const MsgUpdateDepositResponse: {
    encode(_: MsgUpdateDepositResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDepositResponse;
    fromJSON(_: any): MsgUpdateDepositResponse;
    toJSON(_: MsgUpdateDepositResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDepositResponse>): MsgUpdateDepositResponse;
};
export declare const MsgDeleteDeposit: {
    encode(message: MsgDeleteDeposit, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDeposit;
    fromJSON(object: any): MsgDeleteDeposit;
    toJSON(message: MsgDeleteDeposit): unknown;
    fromPartial(object: DeepPartial<MsgDeleteDeposit>): MsgDeleteDeposit;
};
export declare const MsgDeleteDepositResponse: {
    encode(_: MsgDeleteDepositResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteDepositResponse;
    fromJSON(_: any): MsgDeleteDepositResponse;
    toJSON(_: MsgDeleteDepositResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteDepositResponse>): MsgDeleteDepositResponse;
};
export declare const MsgCreateBorrow: {
    encode(message: MsgCreateBorrow, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBorrow;
    fromJSON(object: any): MsgCreateBorrow;
    toJSON(message: MsgCreateBorrow): unknown;
    fromPartial(object: DeepPartial<MsgCreateBorrow>): MsgCreateBorrow;
};
export declare const MsgCreateBorrowResponse: {
    encode(message: MsgCreateBorrowResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateBorrowResponse;
    fromJSON(object: any): MsgCreateBorrowResponse;
    toJSON(message: MsgCreateBorrowResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBorrowResponse>): MsgCreateBorrowResponse;
};
export declare const MsgUpdateBorrow: {
    encode(message: MsgUpdateBorrow, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBorrow;
    fromJSON(object: any): MsgUpdateBorrow;
    toJSON(message: MsgUpdateBorrow): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBorrow>): MsgUpdateBorrow;
};
export declare const MsgUpdateBorrowResponse: {
    encode(_: MsgUpdateBorrowResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBorrowResponse;
    fromJSON(_: any): MsgUpdateBorrowResponse;
    toJSON(_: MsgUpdateBorrowResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBorrowResponse>): MsgUpdateBorrowResponse;
};
export declare const MsgDeleteBorrow: {
    encode(message: MsgDeleteBorrow, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBorrow;
    fromJSON(object: any): MsgDeleteBorrow;
    toJSON(message: MsgDeleteBorrow): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBorrow>): MsgDeleteBorrow;
};
export declare const MsgDeleteBorrowResponse: {
    encode(_: MsgDeleteBorrowResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteBorrowResponse;
    fromJSON(_: any): MsgDeleteBorrowResponse;
    toJSON(_: MsgDeleteBorrowResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBorrowResponse>): MsgDeleteBorrowResponse;
};
export declare const MsgCreateUser: {
    encode(message: MsgCreateUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUser;
    fromJSON(object: any): MsgCreateUser;
    toJSON(message: MsgCreateUser): unknown;
    fromPartial(object: DeepPartial<MsgCreateUser>): MsgCreateUser;
};
export declare const MsgCreateUserResponse: {
    encode(message: MsgCreateUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUserResponse;
    fromJSON(object: any): MsgCreateUserResponse;
    toJSON(message: MsgCreateUserResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateUserResponse>): MsgCreateUserResponse;
};
export declare const MsgUpdateUser: {
    encode(message: MsgUpdateUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUser;
    fromJSON(object: any): MsgUpdateUser;
    toJSON(message: MsgUpdateUser): unknown;
    fromPartial(object: DeepPartial<MsgUpdateUser>): MsgUpdateUser;
};
export declare const MsgUpdateUserResponse: {
    encode(_: MsgUpdateUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserResponse;
    fromJSON(_: any): MsgUpdateUserResponse;
    toJSON(_: MsgUpdateUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateUserResponse>): MsgUpdateUserResponse;
};
export declare const MsgDeleteUser: {
    encode(message: MsgDeleteUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUser;
    fromJSON(object: any): MsgDeleteUser;
    toJSON(message: MsgDeleteUser): unknown;
    fromPartial(object: DeepPartial<MsgDeleteUser>): MsgDeleteUser;
};
export declare const MsgDeleteUserResponse: {
    encode(_: MsgDeleteUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserResponse;
    fromJSON(_: any): MsgDeleteUserResponse;
    toJSON(_: MsgDeleteUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteUserResponse>): MsgDeleteUserResponse;
};
export declare const MsgCreateInterfaceApr: {
    encode(message: MsgCreateInterfaceApr, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateInterfaceApr;
    fromJSON(object: any): MsgCreateInterfaceApr;
    toJSON(message: MsgCreateInterfaceApr): unknown;
    fromPartial(object: DeepPartial<MsgCreateInterfaceApr>): MsgCreateInterfaceApr;
};
export declare const MsgCreateInterfaceAprResponse: {
    encode(message: MsgCreateInterfaceAprResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateInterfaceAprResponse;
    fromJSON(object: any): MsgCreateInterfaceAprResponse;
    toJSON(message: MsgCreateInterfaceAprResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateInterfaceAprResponse>): MsgCreateInterfaceAprResponse;
};
export declare const MsgUpdateInterfaceApr: {
    encode(message: MsgUpdateInterfaceApr, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInterfaceApr;
    fromJSON(object: any): MsgUpdateInterfaceApr;
    toJSON(message: MsgUpdateInterfaceApr): unknown;
    fromPartial(object: DeepPartial<MsgUpdateInterfaceApr>): MsgUpdateInterfaceApr;
};
export declare const MsgUpdateInterfaceAprResponse: {
    encode(_: MsgUpdateInterfaceAprResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInterfaceAprResponse;
    fromJSON(_: any): MsgUpdateInterfaceAprResponse;
    toJSON(_: MsgUpdateInterfaceAprResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateInterfaceAprResponse>): MsgUpdateInterfaceAprResponse;
};
export declare const MsgDeleteInterfaceApr: {
    encode(message: MsgDeleteInterfaceApr, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteInterfaceApr;
    fromJSON(object: any): MsgDeleteInterfaceApr;
    toJSON(message: MsgDeleteInterfaceApr): unknown;
    fromPartial(object: DeepPartial<MsgDeleteInterfaceApr>): MsgDeleteInterfaceApr;
};
export declare const MsgDeleteInterfaceAprResponse: {
    encode(_: MsgDeleteInterfaceAprResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteInterfaceAprResponse;
    fromJSON(_: any): MsgDeleteInterfaceAprResponse;
    toJSON(_: MsgDeleteInterfaceAprResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteInterfaceAprResponse>): MsgDeleteInterfaceAprResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse>;
    CreateDeposit(request: MsgCreateDeposit): Promise<MsgCreateDepositResponse>;
    UpdateDeposit(request: MsgUpdateDeposit): Promise<MsgUpdateDepositResponse>;
    DeleteDeposit(request: MsgDeleteDeposit): Promise<MsgDeleteDepositResponse>;
    CreateBorrow(request: MsgCreateBorrow): Promise<MsgCreateBorrowResponse>;
    UpdateBorrow(request: MsgUpdateBorrow): Promise<MsgUpdateBorrowResponse>;
    DeleteBorrow(request: MsgDeleteBorrow): Promise<MsgDeleteBorrowResponse>;
    CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
    UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>;
    DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
    CreateInterfaceApr(request: MsgCreateInterfaceApr): Promise<MsgCreateInterfaceAprResponse>;
    UpdateInterfaceApr(request: MsgUpdateInterfaceApr): Promise<MsgUpdateInterfaceAprResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteInterfaceApr(request: MsgDeleteInterfaceApr): Promise<MsgDeleteInterfaceAprResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse>;
    CreateDeposit(request: MsgCreateDeposit): Promise<MsgCreateDepositResponse>;
    UpdateDeposit(request: MsgUpdateDeposit): Promise<MsgUpdateDepositResponse>;
    DeleteDeposit(request: MsgDeleteDeposit): Promise<MsgDeleteDepositResponse>;
    CreateBorrow(request: MsgCreateBorrow): Promise<MsgCreateBorrowResponse>;
    UpdateBorrow(request: MsgUpdateBorrow): Promise<MsgUpdateBorrowResponse>;
    DeleteBorrow(request: MsgDeleteBorrow): Promise<MsgDeleteBorrowResponse>;
    CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
    UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>;
    DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
    CreateInterfaceApr(request: MsgCreateInterfaceApr): Promise<MsgCreateInterfaceAprResponse>;
    UpdateInterfaceApr(request: MsgUpdateInterfaceApr): Promise<MsgUpdateInterfaceAprResponse>;
    DeleteInterfaceApr(request: MsgDeleteInterfaceApr): Promise<MsgDeleteInterfaceAprResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
