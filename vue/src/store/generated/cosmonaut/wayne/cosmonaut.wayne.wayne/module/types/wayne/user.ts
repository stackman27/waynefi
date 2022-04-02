/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";

export const protobufPackage = "cosmonaut.wayne.wayne";

export interface User {
  creator: string;
  id: number;
  collateral: boolean[];
  deposit: Deposit[];
  borrow: Borrow[];
  assetBalances: number[];
}

const baseUser: object = {
  creator: "",
  id: 0,
  collateral: false,
  assetBalances: 0,
};

export const User = {
  encode(message: User, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    writer.uint32(26).fork();
    for (const v of message.collateral) {
      writer.bool(v);
    }
    writer.ldelim();
    for (const v of message.deposit) {
      Deposit.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.borrow) {
      Borrow.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.assetBalances) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): User {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    message.collateral = [];
    message.deposit = [];
    message.borrow = [];
    message.assetBalances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.collateral.push(reader.bool());
            }
          } else {
            message.collateral.push(reader.bool());
          }
          break;
        case 4:
          message.deposit.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.borrow.push(Borrow.decode(reader, reader.uint32()));
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.assetBalances.push(reader.int32());
            }
          } else {
            message.assetBalances.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    message.collateral = [];
    message.deposit = [];
    message.borrow = [];
    message.assetBalances = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      for (const e of object.collateral) {
        message.collateral.push(Boolean(e));
      }
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      for (const e of object.deposit) {
        message.deposit.push(Deposit.fromJSON(e));
      }
    }
    if (object.borrow !== undefined && object.borrow !== null) {
      for (const e of object.borrow) {
        message.borrow.push(Borrow.fromJSON(e));
      }
    }
    if (object.assetBalances !== undefined && object.assetBalances !== null) {
      for (const e of object.assetBalances) {
        message.assetBalances.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    if (message.collateral) {
      obj.collateral = message.collateral.map((e) => e);
    } else {
      obj.collateral = [];
    }
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) =>
        e ? Deposit.toJSON(e) : undefined
      );
    } else {
      obj.deposit = [];
    }
    if (message.borrow) {
      obj.borrow = message.borrow.map((e) =>
        e ? Borrow.toJSON(e) : undefined
      );
    } else {
      obj.borrow = [];
    }
    if (message.assetBalances) {
      obj.assetBalances = message.assetBalances.map((e) => e);
    } else {
      obj.assetBalances = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    message.collateral = [];
    message.deposit = [];
    message.borrow = [];
    message.assetBalances = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      for (const e of object.collateral) {
        message.collateral.push(e);
      }
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      for (const e of object.deposit) {
        message.deposit.push(Deposit.fromPartial(e));
      }
    }
    if (object.borrow !== undefined && object.borrow !== null) {
      for (const e of object.borrow) {
        message.borrow.push(Borrow.fromPartial(e));
      }
    }
    if (object.assetBalances !== undefined && object.assetBalances !== null) {
      for (const e of object.assetBalances) {
        message.assetBalances.push(e);
      }
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
