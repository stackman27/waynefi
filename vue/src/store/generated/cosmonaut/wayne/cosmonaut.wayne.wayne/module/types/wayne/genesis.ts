/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../wayne/params";
import { Pool } from "../wayne/pool";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";
import { User } from "../wayne/user";
import { InterfaceApr } from "../wayne/interface_apr";

export const protobufPackage = "cosmonaut.wayne.wayne";

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
  /** this line is used by starport scaffolding # genesis/proto/state */
  interfaceAprCount: number;
}

const baseGenesisState: object = {
  poolCount: 0,
  depositCount: 0,
  borrowCount: 0,
  userCount: 0,
  interfaceAprCount: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.poolCount !== 0) {
      writer.uint32(24).uint64(message.poolCount);
    }
    for (const v of message.depositList) {
      Deposit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositCount !== 0) {
      writer.uint32(40).uint64(message.depositCount);
    }
    for (const v of message.borrowList) {
      Borrow.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.borrowCount !== 0) {
      writer.uint32(56).uint64(message.borrowCount);
    }
    for (const v of message.userList) {
      User.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.userCount !== 0) {
      writer.uint32(72).uint64(message.userCount);
    }
    for (const v of message.interfaceAprList) {
      InterfaceApr.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.interfaceAprCount !== 0) {
      writer.uint32(88).uint64(message.interfaceAprCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.poolList = [];
    message.depositList = [];
    message.borrowList = [];
    message.userList = [];
    message.interfaceAprList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolList.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.poolCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.depositList.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.depositCount = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.borrowList.push(Borrow.decode(reader, reader.uint32()));
          break;
        case 7:
          message.borrowCount = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.userList.push(User.decode(reader, reader.uint32()));
          break;
        case 9:
          message.userCount = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.interfaceAprList.push(
            InterfaceApr.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.interfaceAprCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.poolList = [];
    message.depositList = [];
    message.borrowList = [];
    message.userList = [];
    message.interfaceAprList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.poolList !== undefined && object.poolList !== null) {
      for (const e of object.poolList) {
        message.poolList.push(Pool.fromJSON(e));
      }
    }
    if (object.poolCount !== undefined && object.poolCount !== null) {
      message.poolCount = Number(object.poolCount);
    } else {
      message.poolCount = 0;
    }
    if (object.depositList !== undefined && object.depositList !== null) {
      for (const e of object.depositList) {
        message.depositList.push(Deposit.fromJSON(e));
      }
    }
    if (object.depositCount !== undefined && object.depositCount !== null) {
      message.depositCount = Number(object.depositCount);
    } else {
      message.depositCount = 0;
    }
    if (object.borrowList !== undefined && object.borrowList !== null) {
      for (const e of object.borrowList) {
        message.borrowList.push(Borrow.fromJSON(e));
      }
    }
    if (object.borrowCount !== undefined && object.borrowCount !== null) {
      message.borrowCount = Number(object.borrowCount);
    } else {
      message.borrowCount = 0;
    }
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromJSON(e));
      }
    }
    if (object.userCount !== undefined && object.userCount !== null) {
      message.userCount = Number(object.userCount);
    } else {
      message.userCount = 0;
    }
    if (
      object.interfaceAprList !== undefined &&
      object.interfaceAprList !== null
    ) {
      for (const e of object.interfaceAprList) {
        message.interfaceAprList.push(InterfaceApr.fromJSON(e));
      }
    }
    if (
      object.interfaceAprCount !== undefined &&
      object.interfaceAprCount !== null
    ) {
      message.interfaceAprCount = Number(object.interfaceAprCount);
    } else {
      message.interfaceAprCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolList) {
      obj.poolList = message.poolList.map((e) =>
        e ? Pool.toJSON(e) : undefined
      );
    } else {
      obj.poolList = [];
    }
    message.poolCount !== undefined && (obj.poolCount = message.poolCount);
    if (message.depositList) {
      obj.depositList = message.depositList.map((e) =>
        e ? Deposit.toJSON(e) : undefined
      );
    } else {
      obj.depositList = [];
    }
    message.depositCount !== undefined &&
      (obj.depositCount = message.depositCount);
    if (message.borrowList) {
      obj.borrowList = message.borrowList.map((e) =>
        e ? Borrow.toJSON(e) : undefined
      );
    } else {
      obj.borrowList = [];
    }
    message.borrowCount !== undefined &&
      (obj.borrowCount = message.borrowCount);
    if (message.userList) {
      obj.userList = message.userList.map((e) =>
        e ? User.toJSON(e) : undefined
      );
    } else {
      obj.userList = [];
    }
    message.userCount !== undefined && (obj.userCount = message.userCount);
    if (message.interfaceAprList) {
      obj.interfaceAprList = message.interfaceAprList.map((e) =>
        e ? InterfaceApr.toJSON(e) : undefined
      );
    } else {
      obj.interfaceAprList = [];
    }
    message.interfaceAprCount !== undefined &&
      (obj.interfaceAprCount = message.interfaceAprCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.poolList = [];
    message.depositList = [];
    message.borrowList = [];
    message.userList = [];
    message.interfaceAprList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.poolList !== undefined && object.poolList !== null) {
      for (const e of object.poolList) {
        message.poolList.push(Pool.fromPartial(e));
      }
    }
    if (object.poolCount !== undefined && object.poolCount !== null) {
      message.poolCount = object.poolCount;
    } else {
      message.poolCount = 0;
    }
    if (object.depositList !== undefined && object.depositList !== null) {
      for (const e of object.depositList) {
        message.depositList.push(Deposit.fromPartial(e));
      }
    }
    if (object.depositCount !== undefined && object.depositCount !== null) {
      message.depositCount = object.depositCount;
    } else {
      message.depositCount = 0;
    }
    if (object.borrowList !== undefined && object.borrowList !== null) {
      for (const e of object.borrowList) {
        message.borrowList.push(Borrow.fromPartial(e));
      }
    }
    if (object.borrowCount !== undefined && object.borrowCount !== null) {
      message.borrowCount = object.borrowCount;
    } else {
      message.borrowCount = 0;
    }
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromPartial(e));
      }
    }
    if (object.userCount !== undefined && object.userCount !== null) {
      message.userCount = object.userCount;
    } else {
      message.userCount = 0;
    }
    if (
      object.interfaceAprList !== undefined &&
      object.interfaceAprList !== null
    ) {
      for (const e of object.interfaceAprList) {
        message.interfaceAprList.push(InterfaceApr.fromPartial(e));
      }
    }
    if (
      object.interfaceAprCount !== undefined &&
      object.interfaceAprCount !== null
    ) {
      message.interfaceAprCount = object.interfaceAprCount;
    } else {
      message.interfaceAprCount = 0;
    }
    return message;
  },
};

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
