/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../wayne/params";
import { Pool } from "../wayne/pool";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { LoadPoolResponse } from "../wayne/load_pool_response";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";
import { User } from "../wayne/user";
import { InterfaceApr } from "../wayne/interface_apr";
import { Withdraw } from "../wayne/withdraw";

export const protobufPackage = "cosmonaut.wayne.wayne";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

export interface QueryGetWithdrawRequest {
  id: number;
}

export interface QueryGetWithdrawResponse {
  Withdraw: Withdraw | undefined;
}

export interface QueryAllWithdrawRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWithdrawResponse {
  Withdraw: Withdraw[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetPoolRequest: object = { id: 0 };

export const QueryGetPoolRequest = {
  encode(
    message: QueryGetPoolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolRequest {
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPoolResponse: object = {};

export const QueryGetPoolResponse = {
  encode(
    message: QueryGetPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Pool !== undefined) {
      Pool.encode(message.Pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPoolResponse {
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse;
    if (object.Pool !== undefined && object.Pool !== null) {
      message.Pool = Pool.fromJSON(object.Pool);
    } else {
      message.Pool = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {};
    message.Pool !== undefined &&
      (obj.Pool = message.Pool ? Pool.toJSON(message.Pool) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse;
    if (object.Pool !== undefined && object.Pool !== null) {
      message.Pool = Pool.fromPartial(object.Pool);
    } else {
      message.Pool = undefined;
    }
    return message;
  },
};

const baseQueryAllPoolRequest: object = {};

export const QueryAllPoolRequest = {
  encode(
    message: QueryAllPoolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPoolRequest } as QueryAllPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolRequest {
    const message = { ...baseQueryAllPoolRequest } as QueryAllPoolRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = { ...baseQueryAllPoolRequest } as QueryAllPoolRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPoolResponse: object = {};

export const QueryAllPoolResponse = {
  encode(
    message: QueryAllPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPoolResponse } as QueryAllPoolResponse;
    message.Pool = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPoolResponse {
    const message = { ...baseQueryAllPoolResponse } as QueryAllPoolResponse;
    message.Pool = [];
    if (object.Pool !== undefined && object.Pool !== null) {
      for (const e of object.Pool) {
        message.Pool.push(Pool.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPoolResponse): unknown {
    const obj: any = {};
    if (message.Pool) {
      obj.Pool = message.Pool.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.Pool = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = { ...baseQueryAllPoolResponse } as QueryAllPoolResponse;
    message.Pool = [];
    if (object.Pool !== undefined && object.Pool !== null) {
      for (const e of object.Pool) {
        message.Pool.push(Pool.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryLoadPoolRequest: object = {};

export const QueryLoadPoolRequest = {
  encode(
    message: QueryLoadPoolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLoadPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLoadPoolRequest } as QueryLoadPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLoadPoolRequest {
    const message = { ...baseQueryLoadPoolRequest } as QueryLoadPoolRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryLoadPoolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLoadPoolRequest>): QueryLoadPoolRequest {
    const message = { ...baseQueryLoadPoolRequest } as QueryLoadPoolRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryLoadPoolResponse: object = {};

export const QueryLoadPoolResponse = {
  encode(
    message: QueryLoadPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.LoadPoolResponse) {
      LoadPoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryLoadPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryLoadPoolResponse } as QueryLoadPoolResponse;
    message.LoadPoolResponse = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LoadPoolResponse.push(
            LoadPoolResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLoadPoolResponse {
    const message = { ...baseQueryLoadPoolResponse } as QueryLoadPoolResponse;
    message.LoadPoolResponse = [];
    if (
      object.LoadPoolResponse !== undefined &&
      object.LoadPoolResponse !== null
    ) {
      for (const e of object.LoadPoolResponse) {
        message.LoadPoolResponse.push(LoadPoolResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryLoadPoolResponse): unknown {
    const obj: any = {};
    if (message.LoadPoolResponse) {
      obj.LoadPoolResponse = message.LoadPoolResponse.map((e) =>
        e ? LoadPoolResponse.toJSON(e) : undefined
      );
    } else {
      obj.LoadPoolResponse = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryLoadPoolResponse>
  ): QueryLoadPoolResponse {
    const message = { ...baseQueryLoadPoolResponse } as QueryLoadPoolResponse;
    message.LoadPoolResponse = [];
    if (
      object.LoadPoolResponse !== undefined &&
      object.LoadPoolResponse !== null
    ) {
      for (const e of object.LoadPoolResponse) {
        message.LoadPoolResponse.push(LoadPoolResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDepositRequest: object = { id: 0 };

export const QueryGetDepositRequest = {
  encode(
    message: QueryGetDepositRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDepositRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDepositRequest } as QueryGetDepositRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDepositRequest {
    const message = { ...baseQueryGetDepositRequest } as QueryGetDepositRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetDepositRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDepositRequest>
  ): QueryGetDepositRequest {
    const message = { ...baseQueryGetDepositRequest } as QueryGetDepositRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetDepositResponse: object = {};

export const QueryGetDepositResponse = {
  encode(
    message: QueryGetDepositResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Deposit !== undefined) {
      Deposit.encode(message.Deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDepositResponse,
    } as QueryGetDepositResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDepositResponse {
    const message = {
      ...baseQueryGetDepositResponse,
    } as QueryGetDepositResponse;
    if (object.Deposit !== undefined && object.Deposit !== null) {
      message.Deposit = Deposit.fromJSON(object.Deposit);
    } else {
      message.Deposit = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDepositResponse): unknown {
    const obj: any = {};
    message.Deposit !== undefined &&
      (obj.Deposit = message.Deposit
        ? Deposit.toJSON(message.Deposit)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDepositResponse>
  ): QueryGetDepositResponse {
    const message = {
      ...baseQueryGetDepositResponse,
    } as QueryGetDepositResponse;
    if (object.Deposit !== undefined && object.Deposit !== null) {
      message.Deposit = Deposit.fromPartial(object.Deposit);
    } else {
      message.Deposit = undefined;
    }
    return message;
  },
};

const baseQueryAllDepositRequest: object = {};

export const QueryAllDepositRequest = {
  encode(
    message: QueryAllDepositRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDepositRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllDepositRequest } as QueryAllDepositRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDepositRequest {
    const message = { ...baseQueryAllDepositRequest } as QueryAllDepositRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDepositRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDepositRequest>
  ): QueryAllDepositRequest {
    const message = { ...baseQueryAllDepositRequest } as QueryAllDepositRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDepositResponse: object = {};

export const QueryAllDepositResponse = {
  encode(
    message: QueryAllDepositResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Deposit) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDepositResponse,
    } as QueryAllDepositResponse;
    message.Deposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Deposit.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDepositResponse {
    const message = {
      ...baseQueryAllDepositResponse,
    } as QueryAllDepositResponse;
    message.Deposit = [];
    if (object.Deposit !== undefined && object.Deposit !== null) {
      for (const e of object.Deposit) {
        message.Deposit.push(Deposit.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDepositResponse): unknown {
    const obj: any = {};
    if (message.Deposit) {
      obj.Deposit = message.Deposit.map((e) =>
        e ? Deposit.toJSON(e) : undefined
      );
    } else {
      obj.Deposit = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDepositResponse>
  ): QueryAllDepositResponse {
    const message = {
      ...baseQueryAllDepositResponse,
    } as QueryAllDepositResponse;
    message.Deposit = [];
    if (object.Deposit !== undefined && object.Deposit !== null) {
      for (const e of object.Deposit) {
        message.Deposit.push(Deposit.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetBorrowRequest: object = { id: 0 };

export const QueryGetBorrowRequest = {
  encode(
    message: QueryGetBorrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBorrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBorrowRequest } as QueryGetBorrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBorrowRequest {
    const message = { ...baseQueryGetBorrowRequest } as QueryGetBorrowRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetBorrowRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBorrowRequest>
  ): QueryGetBorrowRequest {
    const message = { ...baseQueryGetBorrowRequest } as QueryGetBorrowRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetBorrowResponse: object = {};

export const QueryGetBorrowResponse = {
  encode(
    message: QueryGetBorrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Borrow !== undefined) {
      Borrow.encode(message.Borrow, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetBorrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetBorrowResponse } as QueryGetBorrowResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Borrow = Borrow.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBorrowResponse {
    const message = { ...baseQueryGetBorrowResponse } as QueryGetBorrowResponse;
    if (object.Borrow !== undefined && object.Borrow !== null) {
      message.Borrow = Borrow.fromJSON(object.Borrow);
    } else {
      message.Borrow = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetBorrowResponse): unknown {
    const obj: any = {};
    message.Borrow !== undefined &&
      (obj.Borrow = message.Borrow ? Borrow.toJSON(message.Borrow) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetBorrowResponse>
  ): QueryGetBorrowResponse {
    const message = { ...baseQueryGetBorrowResponse } as QueryGetBorrowResponse;
    if (object.Borrow !== undefined && object.Borrow !== null) {
      message.Borrow = Borrow.fromPartial(object.Borrow);
    } else {
      message.Borrow = undefined;
    }
    return message;
  },
};

const baseQueryAllBorrowRequest: object = {};

export const QueryAllBorrowRequest = {
  encode(
    message: QueryAllBorrowRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBorrowRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBorrowRequest } as QueryAllBorrowRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBorrowRequest {
    const message = { ...baseQueryAllBorrowRequest } as QueryAllBorrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBorrowRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBorrowRequest>
  ): QueryAllBorrowRequest {
    const message = { ...baseQueryAllBorrowRequest } as QueryAllBorrowRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllBorrowResponse: object = {};

export const QueryAllBorrowResponse = {
  encode(
    message: QueryAllBorrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Borrow) {
      Borrow.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllBorrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllBorrowResponse } as QueryAllBorrowResponse;
    message.Borrow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Borrow.push(Borrow.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBorrowResponse {
    const message = { ...baseQueryAllBorrowResponse } as QueryAllBorrowResponse;
    message.Borrow = [];
    if (object.Borrow !== undefined && object.Borrow !== null) {
      for (const e of object.Borrow) {
        message.Borrow.push(Borrow.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllBorrowResponse): unknown {
    const obj: any = {};
    if (message.Borrow) {
      obj.Borrow = message.Borrow.map((e) =>
        e ? Borrow.toJSON(e) : undefined
      );
    } else {
      obj.Borrow = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBorrowResponse>
  ): QueryAllBorrowResponse {
    const message = { ...baseQueryAllBorrowResponse } as QueryAllBorrowResponse;
    message.Borrow = [];
    if (object.Borrow !== undefined && object.Borrow !== null) {
      for (const e of object.Borrow) {
        message.Borrow.push(Borrow.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetUserRequest: object = { id: 0 };

export const QueryGetUserRequest = {
  encode(
    message: QueryGetUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetUserRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUserRequest>): QueryGetUserRequest {
    const message = { ...baseQueryGetUserRequest } as QueryGetUserRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetUserResponse: object = {};

export const QueryGetUserResponse = {
  encode(
    message: QueryGetUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.User !== undefined) {
      User.encode(message.User, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.User = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse;
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromJSON(object.User);
    } else {
      message.User = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUserResponse): unknown {
    const obj: any = {};
    message.User !== undefined &&
      (obj.User = message.User ? User.toJSON(message.User) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUserResponse>): QueryGetUserResponse {
    const message = { ...baseQueryGetUserResponse } as QueryGetUserResponse;
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromPartial(object.User);
    } else {
      message.User = undefined;
    }
    return message;
  },
};

const baseQueryAllUserRequest: object = {};

export const QueryAllUserRequest = {
  encode(
    message: QueryAllUserRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUserRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserRequest>): QueryAllUserRequest {
    const message = { ...baseQueryAllUserRequest } as QueryAllUserRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUserResponse: object = {};

export const QueryAllUserResponse = {
  encode(
    message: QueryAllUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.User) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse;
    message.User = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.User.push(User.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse;
    message.User = [];
    if (object.User !== undefined && object.User !== null) {
      for (const e of object.User) {
        message.User.push(User.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUserResponse): unknown {
    const obj: any = {};
    if (message.User) {
      obj.User = message.User.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.User = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUserResponse>): QueryAllUserResponse {
    const message = { ...baseQueryAllUserResponse } as QueryAllUserResponse;
    message.User = [];
    if (object.User !== undefined && object.User !== null) {
      for (const e of object.User) {
        message.User.push(User.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetInterfaceAprRequest: object = { id: 0 };

export const QueryGetInterfaceAprRequest = {
  encode(
    message: QueryGetInterfaceAprRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetInterfaceAprRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetInterfaceAprRequest,
    } as QueryGetInterfaceAprRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInterfaceAprRequest {
    const message = {
      ...baseQueryGetInterfaceAprRequest,
    } as QueryGetInterfaceAprRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetInterfaceAprRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetInterfaceAprRequest>
  ): QueryGetInterfaceAprRequest {
    const message = {
      ...baseQueryGetInterfaceAprRequest,
    } as QueryGetInterfaceAprRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetInterfaceAprResponse: object = {};

export const QueryGetInterfaceAprResponse = {
  encode(
    message: QueryGetInterfaceAprResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.InterfaceApr !== undefined) {
      InterfaceApr.encode(
        message.InterfaceApr,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetInterfaceAprResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetInterfaceAprResponse,
    } as QueryGetInterfaceAprResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.InterfaceApr = InterfaceApr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInterfaceAprResponse {
    const message = {
      ...baseQueryGetInterfaceAprResponse,
    } as QueryGetInterfaceAprResponse;
    if (object.InterfaceApr !== undefined && object.InterfaceApr !== null) {
      message.InterfaceApr = InterfaceApr.fromJSON(object.InterfaceApr);
    } else {
      message.InterfaceApr = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetInterfaceAprResponse): unknown {
    const obj: any = {};
    message.InterfaceApr !== undefined &&
      (obj.InterfaceApr = message.InterfaceApr
        ? InterfaceApr.toJSON(message.InterfaceApr)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetInterfaceAprResponse>
  ): QueryGetInterfaceAprResponse {
    const message = {
      ...baseQueryGetInterfaceAprResponse,
    } as QueryGetInterfaceAprResponse;
    if (object.InterfaceApr !== undefined && object.InterfaceApr !== null) {
      message.InterfaceApr = InterfaceApr.fromPartial(object.InterfaceApr);
    } else {
      message.InterfaceApr = undefined;
    }
    return message;
  },
};

const baseQueryAllInterfaceAprRequest: object = {};

export const QueryAllInterfaceAprRequest = {
  encode(
    message: QueryAllInterfaceAprRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllInterfaceAprRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllInterfaceAprRequest,
    } as QueryAllInterfaceAprRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInterfaceAprRequest {
    const message = {
      ...baseQueryAllInterfaceAprRequest,
    } as QueryAllInterfaceAprRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInterfaceAprRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllInterfaceAprRequest>
  ): QueryAllInterfaceAprRequest {
    const message = {
      ...baseQueryAllInterfaceAprRequest,
    } as QueryAllInterfaceAprRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllInterfaceAprResponse: object = {};

export const QueryAllInterfaceAprResponse = {
  encode(
    message: QueryAllInterfaceAprResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.InterfaceApr) {
      InterfaceApr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllInterfaceAprResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllInterfaceAprResponse,
    } as QueryAllInterfaceAprResponse;
    message.InterfaceApr = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.InterfaceApr.push(
            InterfaceApr.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInterfaceAprResponse {
    const message = {
      ...baseQueryAllInterfaceAprResponse,
    } as QueryAllInterfaceAprResponse;
    message.InterfaceApr = [];
    if (object.InterfaceApr !== undefined && object.InterfaceApr !== null) {
      for (const e of object.InterfaceApr) {
        message.InterfaceApr.push(InterfaceApr.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInterfaceAprResponse): unknown {
    const obj: any = {};
    if (message.InterfaceApr) {
      obj.InterfaceApr = message.InterfaceApr.map((e) =>
        e ? InterfaceApr.toJSON(e) : undefined
      );
    } else {
      obj.InterfaceApr = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllInterfaceAprResponse>
  ): QueryAllInterfaceAprResponse {
    const message = {
      ...baseQueryAllInterfaceAprResponse,
    } as QueryAllInterfaceAprResponse;
    message.InterfaceApr = [];
    if (object.InterfaceApr !== undefined && object.InterfaceApr !== null) {
      for (const e of object.InterfaceApr) {
        message.InterfaceApr.push(InterfaceApr.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetLoadPoolResponseRequest: object = { id: 0 };

export const QueryGetLoadPoolResponseRequest = {
  encode(
    message: QueryGetLoadPoolResponseRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLoadPoolResponseRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLoadPoolResponseRequest,
    } as QueryGetLoadPoolResponseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLoadPoolResponseRequest {
    const message = {
      ...baseQueryGetLoadPoolResponseRequest,
    } as QueryGetLoadPoolResponseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetLoadPoolResponseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLoadPoolResponseRequest>
  ): QueryGetLoadPoolResponseRequest {
    const message = {
      ...baseQueryGetLoadPoolResponseRequest,
    } as QueryGetLoadPoolResponseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetLoadPoolResponseResponse: object = {};

export const QueryGetLoadPoolResponseResponse = {
  encode(
    message: QueryGetLoadPoolResponseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.LoadPoolResponse !== undefined) {
      LoadPoolResponse.encode(
        message.LoadPoolResponse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetLoadPoolResponseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetLoadPoolResponseResponse,
    } as QueryGetLoadPoolResponseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LoadPoolResponse = LoadPoolResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetLoadPoolResponseResponse {
    const message = {
      ...baseQueryGetLoadPoolResponseResponse,
    } as QueryGetLoadPoolResponseResponse;
    if (
      object.LoadPoolResponse !== undefined &&
      object.LoadPoolResponse !== null
    ) {
      message.LoadPoolResponse = LoadPoolResponse.fromJSON(
        object.LoadPoolResponse
      );
    } else {
      message.LoadPoolResponse = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetLoadPoolResponseResponse): unknown {
    const obj: any = {};
    message.LoadPoolResponse !== undefined &&
      (obj.LoadPoolResponse = message.LoadPoolResponse
        ? LoadPoolResponse.toJSON(message.LoadPoolResponse)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetLoadPoolResponseResponse>
  ): QueryGetLoadPoolResponseResponse {
    const message = {
      ...baseQueryGetLoadPoolResponseResponse,
    } as QueryGetLoadPoolResponseResponse;
    if (
      object.LoadPoolResponse !== undefined &&
      object.LoadPoolResponse !== null
    ) {
      message.LoadPoolResponse = LoadPoolResponse.fromPartial(
        object.LoadPoolResponse
      );
    } else {
      message.LoadPoolResponse = undefined;
    }
    return message;
  },
};

const baseQueryAllLoadPoolResponseRequest: object = {};

export const QueryAllLoadPoolResponseRequest = {
  encode(
    message: QueryAllLoadPoolResponseRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLoadPoolResponseRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLoadPoolResponseRequest,
    } as QueryAllLoadPoolResponseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLoadPoolResponseRequest {
    const message = {
      ...baseQueryAllLoadPoolResponseRequest,
    } as QueryAllLoadPoolResponseRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLoadPoolResponseRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLoadPoolResponseRequest>
  ): QueryAllLoadPoolResponseRequest {
    const message = {
      ...baseQueryAllLoadPoolResponseRequest,
    } as QueryAllLoadPoolResponseRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllLoadPoolResponseResponse: object = {};

export const QueryAllLoadPoolResponseResponse = {
  encode(
    message: QueryAllLoadPoolResponseResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.LoadPoolResponse) {
      LoadPoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllLoadPoolResponseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllLoadPoolResponseResponse,
    } as QueryAllLoadPoolResponseResponse;
    message.LoadPoolResponse = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LoadPoolResponse.push(
            LoadPoolResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllLoadPoolResponseResponse {
    const message = {
      ...baseQueryAllLoadPoolResponseResponse,
    } as QueryAllLoadPoolResponseResponse;
    message.LoadPoolResponse = [];
    if (
      object.LoadPoolResponse !== undefined &&
      object.LoadPoolResponse !== null
    ) {
      for (const e of object.LoadPoolResponse) {
        message.LoadPoolResponse.push(LoadPoolResponse.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllLoadPoolResponseResponse): unknown {
    const obj: any = {};
    if (message.LoadPoolResponse) {
      obj.LoadPoolResponse = message.LoadPoolResponse.map((e) =>
        e ? LoadPoolResponse.toJSON(e) : undefined
      );
    } else {
      obj.LoadPoolResponse = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllLoadPoolResponseResponse>
  ): QueryAllLoadPoolResponseResponse {
    const message = {
      ...baseQueryAllLoadPoolResponseResponse,
    } as QueryAllLoadPoolResponseResponse;
    message.LoadPoolResponse = [];
    if (
      object.LoadPoolResponse !== undefined &&
      object.LoadPoolResponse !== null
    ) {
      for (const e of object.LoadPoolResponse) {
        message.LoadPoolResponse.push(LoadPoolResponse.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetWithdrawRequest: object = { id: 0 };

export const QueryGetWithdrawRequest = {
  encode(
    message: QueryGetWithdrawRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWithdrawRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWithdrawRequest,
    } as QueryGetWithdrawRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWithdrawRequest {
    const message = {
      ...baseQueryGetWithdrawRequest,
    } as QueryGetWithdrawRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetWithdrawRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWithdrawRequest>
  ): QueryGetWithdrawRequest {
    const message = {
      ...baseQueryGetWithdrawRequest,
    } as QueryGetWithdrawRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetWithdrawResponse: object = {};

export const QueryGetWithdrawResponse = {
  encode(
    message: QueryGetWithdrawResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Withdraw !== undefined) {
      Withdraw.encode(message.Withdraw, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetWithdrawResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWithdrawResponse,
    } as QueryGetWithdrawResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Withdraw = Withdraw.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWithdrawResponse {
    const message = {
      ...baseQueryGetWithdrawResponse,
    } as QueryGetWithdrawResponse;
    if (object.Withdraw !== undefined && object.Withdraw !== null) {
      message.Withdraw = Withdraw.fromJSON(object.Withdraw);
    } else {
      message.Withdraw = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWithdrawResponse): unknown {
    const obj: any = {};
    message.Withdraw !== undefined &&
      (obj.Withdraw = message.Withdraw
        ? Withdraw.toJSON(message.Withdraw)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWithdrawResponse>
  ): QueryGetWithdrawResponse {
    const message = {
      ...baseQueryGetWithdrawResponse,
    } as QueryGetWithdrawResponse;
    if (object.Withdraw !== undefined && object.Withdraw !== null) {
      message.Withdraw = Withdraw.fromPartial(object.Withdraw);
    } else {
      message.Withdraw = undefined;
    }
    return message;
  },
};

const baseQueryAllWithdrawRequest: object = {};

export const QueryAllWithdrawRequest = {
  encode(
    message: QueryAllWithdrawRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWithdrawRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWithdrawRequest,
    } as QueryAllWithdrawRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWithdrawRequest {
    const message = {
      ...baseQueryAllWithdrawRequest,
    } as QueryAllWithdrawRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWithdrawRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWithdrawRequest>
  ): QueryAllWithdrawRequest {
    const message = {
      ...baseQueryAllWithdrawRequest,
    } as QueryAllWithdrawRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWithdrawResponse: object = {};

export const QueryAllWithdrawResponse = {
  encode(
    message: QueryAllWithdrawResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Withdraw) {
      Withdraw.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWithdrawResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWithdrawResponse,
    } as QueryAllWithdrawResponse;
    message.Withdraw = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Withdraw.push(Withdraw.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWithdrawResponse {
    const message = {
      ...baseQueryAllWithdrawResponse,
    } as QueryAllWithdrawResponse;
    message.Withdraw = [];
    if (object.Withdraw !== undefined && object.Withdraw !== null) {
      for (const e of object.Withdraw) {
        message.Withdraw.push(Withdraw.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWithdrawResponse): unknown {
    const obj: any = {};
    if (message.Withdraw) {
      obj.Withdraw = message.Withdraw.map((e) =>
        e ? Withdraw.toJSON(e) : undefined
      );
    } else {
      obj.Withdraw = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWithdrawResponse>
  ): QueryAllWithdrawResponse {
    const message = {
      ...baseQueryAllWithdrawResponse,
    } as QueryAllWithdrawResponse;
    message.Withdraw = [];
    if (object.Withdraw !== undefined && object.Withdraw !== null) {
      for (const e of object.Withdraw) {
        message.Withdraw.push(Withdraw.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
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
  InterfaceApr(
    request: QueryGetInterfaceAprRequest
  ): Promise<QueryGetInterfaceAprResponse>;
  /** Queries a list of InterfaceApr items. */
  InterfaceAprAll(
    request: QueryAllInterfaceAprRequest
  ): Promise<QueryAllInterfaceAprResponse>;
  /** Queries a LoadPoolResponse by id. */
  LoadPoolResponse(
    request: QueryGetLoadPoolResponseRequest
  ): Promise<QueryGetLoadPoolResponseResponse>;
  /** Queries a list of LoadPoolResponse items. */
  LoadPoolResponseAll(
    request: QueryAllLoadPoolResponseRequest
  ): Promise<QueryAllLoadPoolResponseResponse>;
  /** Queries a Withdraw by id. */
  Withdraw(request: QueryGetWithdrawRequest): Promise<QueryGetWithdrawResponse>;
  /** Queries a list of Withdraw items. */
  WithdrawAll(
    request: QueryAllWithdrawRequest
  ): Promise<QueryAllWithdrawResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "Pool",
      data
    );
    return promise.then((data) =>
      QueryGetPoolResponse.decode(new Reader(data))
    );
  }

  PoolAll(request: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "PoolAll",
      data
    );
    return promise.then((data) =>
      QueryAllPoolResponse.decode(new Reader(data))
    );
  }

  PoolLoad(request: QueryLoadPoolRequest): Promise<QueryLoadPoolResponse> {
    const data = QueryLoadPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "PoolLoad",
      data
    );
    return promise.then((data) =>
      QueryLoadPoolResponse.decode(new Reader(data))
    );
  }

  Deposit(request: QueryGetDepositRequest): Promise<QueryGetDepositResponse> {
    const data = QueryGetDepositRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "Deposit",
      data
    );
    return promise.then((data) =>
      QueryGetDepositResponse.decode(new Reader(data))
    );
  }

  DepositAll(
    request: QueryAllDepositRequest
  ): Promise<QueryAllDepositResponse> {
    const data = QueryAllDepositRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "DepositAll",
      data
    );
    return promise.then((data) =>
      QueryAllDepositResponse.decode(new Reader(data))
    );
  }

  Borrow(request: QueryGetBorrowRequest): Promise<QueryGetBorrowResponse> {
    const data = QueryGetBorrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "Borrow",
      data
    );
    return promise.then((data) =>
      QueryGetBorrowResponse.decode(new Reader(data))
    );
  }

  BorrowAll(request: QueryAllBorrowRequest): Promise<QueryAllBorrowResponse> {
    const data = QueryAllBorrowRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "BorrowAll",
      data
    );
    return promise.then((data) =>
      QueryAllBorrowResponse.decode(new Reader(data))
    );
  }

  User(request: QueryGetUserRequest): Promise<QueryGetUserResponse> {
    const data = QueryGetUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "User",
      data
    );
    return promise.then((data) =>
      QueryGetUserResponse.decode(new Reader(data))
    );
  }

  UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse> {
    const data = QueryAllUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "UserAll",
      data
    );
    return promise.then((data) =>
      QueryAllUserResponse.decode(new Reader(data))
    );
  }

  InterfaceApr(
    request: QueryGetInterfaceAprRequest
  ): Promise<QueryGetInterfaceAprResponse> {
    const data = QueryGetInterfaceAprRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "InterfaceApr",
      data
    );
    return promise.then((data) =>
      QueryGetInterfaceAprResponse.decode(new Reader(data))
    );
  }

  InterfaceAprAll(
    request: QueryAllInterfaceAprRequest
  ): Promise<QueryAllInterfaceAprResponse> {
    const data = QueryAllInterfaceAprRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "InterfaceAprAll",
      data
    );
    return promise.then((data) =>
      QueryAllInterfaceAprResponse.decode(new Reader(data))
    );
  }

  LoadPoolResponse(
    request: QueryGetLoadPoolResponseRequest
  ): Promise<QueryGetLoadPoolResponseResponse> {
    const data = QueryGetLoadPoolResponseRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "LoadPoolResponse",
      data
    );
    return promise.then((data) =>
      QueryGetLoadPoolResponseResponse.decode(new Reader(data))
    );
  }

  LoadPoolResponseAll(
    request: QueryAllLoadPoolResponseRequest
  ): Promise<QueryAllLoadPoolResponseResponse> {
    const data = QueryAllLoadPoolResponseRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "LoadPoolResponseAll",
      data
    );
    return promise.then((data) =>
      QueryAllLoadPoolResponseResponse.decode(new Reader(data))
    );
  }

  Withdraw(
    request: QueryGetWithdrawRequest
  ): Promise<QueryGetWithdrawResponse> {
    const data = QueryGetWithdrawRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "Withdraw",
      data
    );
    return promise.then((data) =>
      QueryGetWithdrawResponse.decode(new Reader(data))
    );
  }

  WithdrawAll(
    request: QueryAllWithdrawRequest
  ): Promise<QueryAllWithdrawResponse> {
    const data = QueryAllWithdrawRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Query",
      "WithdrawAll",
      data
    );
    return promise.then((data) =>
      QueryAllWithdrawResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
