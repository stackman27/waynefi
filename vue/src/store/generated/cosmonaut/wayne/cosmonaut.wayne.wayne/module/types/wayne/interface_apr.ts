/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "cosmonaut.wayne.wayne";

export interface InterfaceApr {
  id: number;
  blocktime: string;
  timeApr: number;
  creator: string;
}

const baseInterfaceApr: object = {
  id: 0,
  blocktime: "",
  timeApr: 0,
  creator: "",
};

export const InterfaceApr = {
  encode(message: InterfaceApr, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.blocktime !== "") {
      writer.uint32(18).string(message.blocktime);
    }
    if (message.timeApr !== 0) {
      writer.uint32(24).int32(message.timeApr);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): InterfaceApr {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInterfaceApr } as InterfaceApr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blocktime = reader.string();
          break;
        case 3:
          message.timeApr = reader.int32();
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterfaceApr {
    const message = { ...baseInterfaceApr } as InterfaceApr;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.blocktime !== undefined && object.blocktime !== null) {
      message.blocktime = String(object.blocktime);
    } else {
      message.blocktime = "";
    }
    if (object.timeApr !== undefined && object.timeApr !== null) {
      message.timeApr = Number(object.timeApr);
    } else {
      message.timeApr = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: InterfaceApr): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.blocktime !== undefined && (obj.blocktime = message.blocktime);
    message.timeApr !== undefined && (obj.timeApr = message.timeApr);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<InterfaceApr>): InterfaceApr {
    const message = { ...baseInterfaceApr } as InterfaceApr;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.blocktime !== undefined && object.blocktime !== null) {
      message.blocktime = object.blocktime;
    } else {
      message.blocktime = "";
    }
    if (object.timeApr !== undefined && object.timeApr !== null) {
      message.timeApr = object.timeApr;
    } else {
      message.timeApr = 0;
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
