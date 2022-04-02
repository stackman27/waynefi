/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { InterfaceApr } from "../wayne/interface_apr";
import { User } from "../wayne/user";

export const protobufPackage = "cosmonaut.wayne.wayne";

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

const basePool: object = {
  id: 0,
  asset: "",
  denom: "",
  collatoralFactor: 0,
  depth: 0,
  creator: "",
};

export const Pool = {
  encode(message: Pool, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.collatoralFactor !== 0) {
      writer.uint32(32).int32(message.collatoralFactor);
    }
    if (message.depth !== 0) {
      writer.uint32(40).int32(message.depth);
    }
    for (const v of message.aPR) {
      InterfaceApr.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(66).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePool } as Pool;
    message.aPR = [];
    message.users = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.collatoralFactor = reader.int32();
          break;
        case 5:
          message.depth = reader.int32();
          break;
        case 6:
          message.aPR.push(InterfaceApr.decode(reader, reader.uint32()));
          break;
        case 7:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        case 8:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    const message = { ...basePool } as Pool;
    message.aPR = [];
    message.users = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = String(object.asset);
    } else {
      message.asset = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (
      object.collatoralFactor !== undefined &&
      object.collatoralFactor !== null
    ) {
      message.collatoralFactor = Number(object.collatoralFactor);
    } else {
      message.collatoralFactor = 0;
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = Number(object.depth);
    } else {
      message.depth = 0;
    }
    if (object.aPR !== undefined && object.aPR !== null) {
      for (const e of object.aPR) {
        message.aPR.push(InterfaceApr.fromJSON(e));
      }
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromJSON(e));
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.asset !== undefined && (obj.asset = message.asset);
    message.denom !== undefined && (obj.denom = message.denom);
    message.collatoralFactor !== undefined &&
      (obj.collatoralFactor = message.collatoralFactor);
    message.depth !== undefined && (obj.depth = message.depth);
    if (message.aPR) {
      obj.aPR = message.aPR.map((e) =>
        e ? InterfaceApr.toJSON(e) : undefined
      );
    } else {
      obj.aPR = [];
    }
    if (message.users) {
      obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
    } else {
      obj.users = [];
    }
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = { ...basePool } as Pool;
    message.aPR = [];
    message.users = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    } else {
      message.asset = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (
      object.collatoralFactor !== undefined &&
      object.collatoralFactor !== null
    ) {
      message.collatoralFactor = object.collatoralFactor;
    } else {
      message.collatoralFactor = 0;
    }
    if (object.depth !== undefined && object.depth !== null) {
      message.depth = object.depth;
    } else {
      message.depth = 0;
    }
    if (object.aPR !== undefined && object.aPR !== null) {
      for (const e of object.aPR) {
        message.aPR.push(InterfaceApr.fromPartial(e));
      }
    }
    if (object.users !== undefined && object.users !== null) {
      for (const e of object.users) {
        message.users.push(User.fromPartial(e));
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
