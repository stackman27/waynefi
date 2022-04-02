/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { InterfaceApr } from "../wayne/interface_apr";
import { User } from "../wayne/user";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";

export const protobufPackage = "cosmonaut.wayne.wayne";

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

export interface MsgUpdatePoolResponse {}

export interface MsgDeletePool {
  creator: string;
  id: number;
}

export interface MsgDeletePoolResponse {}

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

export interface MsgUpdateDepositResponse {}

export interface MsgDeleteDeposit {
  creator: string;
  id: number;
}

export interface MsgDeleteDepositResponse {}

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

export interface MsgUpdateBorrowResponse {}

export interface MsgDeleteBorrow {
  creator: string;
  id: number;
}

export interface MsgDeleteBorrowResponse {}

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

export interface MsgUpdateUserResponse {}

export interface MsgDeleteUser {
  creator: string;
  id: number;
}

export interface MsgDeleteUserResponse {}

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

export interface MsgUpdateInterfaceAprResponse {}

export interface MsgDeleteInterfaceApr {
  creator: string;
  id: number;
}

export interface MsgDeleteInterfaceAprResponse {}

const baseMsgCreatePool: object = {
  creator: "",
  asset: "",
  denom: "",
  collatoralFactor: 0,
  depth: 0,
};

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.aPR = [];
    message.users = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.aPR = [];
    message.users = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool;
    message.aPR = [];
    message.users = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreatePoolResponse: object = { id: 0 };

export const MsgCreatePoolResponse = {
  encode(
    message: MsgCreatePoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
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

  fromJSON(object: any): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePoolResponse>
  ): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePool: object = {
  creator: "",
  id: 0,
  asset: "",
  denom: "",
  collatoralFactor: 0,
  depth: 0,
};

export const MsgUpdatePool = {
  encode(message: MsgUpdatePool, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.collatoralFactor !== 0) {
      writer.uint32(40).int32(message.collatoralFactor);
    }
    if (message.depth !== 0) {
      writer.uint32(48).int32(message.depth);
    }
    for (const v of message.aPR) {
      InterfaceApr.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
    message.aPR = [];
    message.users = [];
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
          message.asset = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.collatoralFactor = reader.int32();
          break;
        case 6:
          message.depth = reader.int32();
          break;
        case 7:
          message.aPR.push(InterfaceApr.decode(reader, reader.uint32()));
          break;
        case 8:
          message.users.push(User.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePool {
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
    message.aPR = [];
    message.users = [];
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
    return message;
  },

  toJSON(message: MsgUpdatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool {
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool;
    message.aPR = [];
    message.users = [];
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
    return message;
  },
};

const baseMsgUpdatePoolResponse: object = {};

export const MsgUpdatePoolResponse = {
  encode(_: MsgUpdatePoolResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
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

  fromJSON(_: any): MsgUpdatePoolResponse {
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
    return message;
  },

  toJSON(_: MsgUpdatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse;
    return message;
  },
};

const baseMsgDeletePool: object = { creator: "", id: 0 };

export const MsgDeletePool = {
  encode(message: MsgDeletePool, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePool } as MsgDeletePool;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePool {
    const message = { ...baseMsgDeletePool } as MsgDeletePool;
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
    return message;
  },

  toJSON(message: MsgDeletePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePool>): MsgDeletePool {
    const message = { ...baseMsgDeletePool } as MsgDeletePool;
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
    return message;
  },
};

const baseMsgDeletePoolResponse: object = {};

export const MsgDeletePoolResponse = {
  encode(_: MsgDeletePoolResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePoolResponse } as MsgDeletePoolResponse;
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

  fromJSON(_: any): MsgDeletePoolResponse {
    const message = { ...baseMsgDeletePoolResponse } as MsgDeletePoolResponse;
    return message;
  },

  toJSON(_: MsgDeletePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeletePoolResponse>): MsgDeletePoolResponse {
    const message = { ...baseMsgDeletePoolResponse } as MsgDeletePoolResponse;
    return message;
  },
};

const baseMsgCreateDeposit: object = {
  creator: "",
  blockHeight: 0,
  asset: "",
  amount: 0,
  denom: "",
};

export const MsgCreateDeposit = {
  encode(message: MsgCreateDeposit, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).int32(message.blockHeight);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int32(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDeposit } as MsgCreateDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.blockHeight = reader.int32();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.amount = reader.int32();
          break;
        case 5:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDeposit {
    const message = { ...baseMsgCreateDeposit } as MsgCreateDeposit;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = String(object.asset);
    } else {
      message.asset = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.asset !== undefined && (obj.asset = message.asset);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDeposit>): MsgCreateDeposit {
    const message = { ...baseMsgCreateDeposit } as MsgCreateDeposit;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    } else {
      message.asset = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgCreateDepositResponse: object = { id: 0 };

export const MsgCreateDepositResponse = {
  encode(
    message: MsgCreateDepositResponse,
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
  ): MsgCreateDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDepositResponse,
    } as MsgCreateDepositResponse;
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

  fromJSON(object: any): MsgCreateDepositResponse {
    const message = {
      ...baseMsgCreateDepositResponse,
    } as MsgCreateDepositResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDepositResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDepositResponse>
  ): MsgCreateDepositResponse {
    const message = {
      ...baseMsgCreateDepositResponse,
    } as MsgCreateDepositResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateDeposit: object = {
  creator: "",
  id: 0,
  blockHeight: 0,
  asset: "",
  amount: 0,
  denom: "",
};

export const MsgUpdateDeposit = {
  encode(message: MsgUpdateDeposit, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(24).int32(message.blockHeight);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    if (message.amount !== 0) {
      writer.uint32(40).int32(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(50).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDeposit } as MsgUpdateDeposit;
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
          message.blockHeight = reader.int32();
          break;
        case 4:
          message.asset = reader.string();
          break;
        case 5:
          message.amount = reader.int32();
          break;
        case 6:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDeposit {
    const message = { ...baseMsgUpdateDeposit } as MsgUpdateDeposit;
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = String(object.asset);
    } else {
      message.asset = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.asset !== undefined && (obj.asset = message.asset);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDeposit>): MsgUpdateDeposit {
    const message = { ...baseMsgUpdateDeposit } as MsgUpdateDeposit;
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    } else {
      message.asset = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgUpdateDepositResponse: object = {};

export const MsgUpdateDepositResponse = {
  encode(
    _: MsgUpdateDepositResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateDepositResponse,
    } as MsgUpdateDepositResponse;
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

  fromJSON(_: any): MsgUpdateDepositResponse {
    const message = {
      ...baseMsgUpdateDepositResponse,
    } as MsgUpdateDepositResponse;
    return message;
  },

  toJSON(_: MsgUpdateDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateDepositResponse>
  ): MsgUpdateDepositResponse {
    const message = {
      ...baseMsgUpdateDepositResponse,
    } as MsgUpdateDepositResponse;
    return message;
  },
};

const baseMsgDeleteDeposit: object = { creator: "", id: 0 };

export const MsgDeleteDeposit = {
  encode(message: MsgDeleteDeposit, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteDeposit } as MsgDeleteDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDeposit {
    const message = { ...baseMsgDeleteDeposit } as MsgDeleteDeposit;
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
    return message;
  },

  toJSON(message: MsgDeleteDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteDeposit>): MsgDeleteDeposit {
    const message = { ...baseMsgDeleteDeposit } as MsgDeleteDeposit;
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
    return message;
  },
};

const baseMsgDeleteDepositResponse: object = {};

export const MsgDeleteDepositResponse = {
  encode(
    _: MsgDeleteDepositResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteDepositResponse,
    } as MsgDeleteDepositResponse;
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

  fromJSON(_: any): MsgDeleteDepositResponse {
    const message = {
      ...baseMsgDeleteDepositResponse,
    } as MsgDeleteDepositResponse;
    return message;
  },

  toJSON(_: MsgDeleteDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteDepositResponse>
  ): MsgDeleteDepositResponse {
    const message = {
      ...baseMsgDeleteDepositResponse,
    } as MsgDeleteDepositResponse;
    return message;
  },
};

const baseMsgCreateBorrow: object = {
  creator: "",
  blockHeight: 0,
  asset: "",
  amount: 0,
  denom: "",
};

export const MsgCreateBorrow = {
  encode(message: MsgCreateBorrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).int32(message.blockHeight);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int32(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBorrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateBorrow } as MsgCreateBorrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.blockHeight = reader.int32();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.amount = reader.int32();
          break;
        case 5:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBorrow {
    const message = { ...baseMsgCreateBorrow } as MsgCreateBorrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = String(object.asset);
    } else {
      message.asset = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgCreateBorrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.asset !== undefined && (obj.asset = message.asset);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateBorrow>): MsgCreateBorrow {
    const message = { ...baseMsgCreateBorrow } as MsgCreateBorrow;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    } else {
      message.asset = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgCreateBorrowResponse: object = { id: 0 };

export const MsgCreateBorrowResponse = {
  encode(
    message: MsgCreateBorrowResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateBorrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateBorrowResponse,
    } as MsgCreateBorrowResponse;
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

  fromJSON(object: any): MsgCreateBorrowResponse {
    const message = {
      ...baseMsgCreateBorrowResponse,
    } as MsgCreateBorrowResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateBorrowResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateBorrowResponse>
  ): MsgCreateBorrowResponse {
    const message = {
      ...baseMsgCreateBorrowResponse,
    } as MsgCreateBorrowResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateBorrow: object = {
  creator: "",
  id: 0,
  blockHeight: 0,
  asset: "",
  amount: 0,
  denom: "",
};

export const MsgUpdateBorrow = {
  encode(message: MsgUpdateBorrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(24).int32(message.blockHeight);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    if (message.amount !== 0) {
      writer.uint32(40).int32(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(50).string(message.denom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBorrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBorrow } as MsgUpdateBorrow;
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
          message.blockHeight = reader.int32();
          break;
        case 4:
          message.asset = reader.string();
          break;
        case 5:
          message.amount = reader.int32();
          break;
        case 6:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBorrow {
    const message = { ...baseMsgUpdateBorrow } as MsgUpdateBorrow;
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = String(object.asset);
    } else {
      message.asset = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBorrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.asset !== undefined && (obj.asset = message.asset);
    message.amount !== undefined && (obj.amount = message.amount);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBorrow>): MsgUpdateBorrow {
    const message = { ...baseMsgUpdateBorrow } as MsgUpdateBorrow;
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
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.asset !== undefined && object.asset !== null) {
      message.asset = object.asset;
    } else {
      message.asset = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseMsgUpdateBorrowResponse: object = {};

export const MsgUpdateBorrowResponse = {
  encode(_: MsgUpdateBorrowResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBorrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBorrowResponse,
    } as MsgUpdateBorrowResponse;
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

  fromJSON(_: any): MsgUpdateBorrowResponse {
    const message = {
      ...baseMsgUpdateBorrowResponse,
    } as MsgUpdateBorrowResponse;
    return message;
  },

  toJSON(_: MsgUpdateBorrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateBorrowResponse>
  ): MsgUpdateBorrowResponse {
    const message = {
      ...baseMsgUpdateBorrowResponse,
    } as MsgUpdateBorrowResponse;
    return message;
  },
};

const baseMsgDeleteBorrow: object = { creator: "", id: 0 };

export const MsgDeleteBorrow = {
  encode(message: MsgDeleteBorrow, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBorrow {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteBorrow } as MsgDeleteBorrow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteBorrow {
    const message = { ...baseMsgDeleteBorrow } as MsgDeleteBorrow;
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
    return message;
  },

  toJSON(message: MsgDeleteBorrow): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteBorrow>): MsgDeleteBorrow {
    const message = { ...baseMsgDeleteBorrow } as MsgDeleteBorrow;
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
    return message;
  },
};

const baseMsgDeleteBorrowResponse: object = {};

export const MsgDeleteBorrowResponse = {
  encode(_: MsgDeleteBorrowResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteBorrowResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteBorrowResponse,
    } as MsgDeleteBorrowResponse;
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

  fromJSON(_: any): MsgDeleteBorrowResponse {
    const message = {
      ...baseMsgDeleteBorrowResponse,
    } as MsgDeleteBorrowResponse;
    return message;
  },

  toJSON(_: MsgDeleteBorrowResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteBorrowResponse>
  ): MsgDeleteBorrowResponse {
    const message = {
      ...baseMsgDeleteBorrowResponse,
    } as MsgDeleteBorrowResponse;
    return message;
  },
};

const baseMsgCreateUser: object = { creator: "", collateral: false };

export const MsgCreateUser = {
  encode(message: MsgCreateUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    writer.uint32(18).fork();
    for (const v of message.collateral) {
      writer.bool(v);
    }
    writer.ldelim();
    for (const v of message.deposit) {
      Deposit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.borrow) {
      Borrow.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateUser } as MsgCreateUser;
    message.collateral = [];
    message.deposit = [];
    message.borrow = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.collateral.push(reader.bool());
            }
          } else {
            message.collateral.push(reader.bool());
          }
          break;
        case 3:
          message.deposit.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.borrow.push(Borrow.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUser {
    const message = { ...baseMsgCreateUser } as MsgCreateUser;
    message.collateral = [];
    message.deposit = [];
    message.borrow = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateUser>): MsgCreateUser {
    const message = { ...baseMsgCreateUser } as MsgCreateUser;
    message.collateral = [];
    message.deposit = [];
    message.borrow = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateUserResponse: object = { id: 0 };

export const MsgCreateUserResponse = {
  encode(
    message: MsgCreateUserResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse;
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

  fromJSON(object: any): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateUserResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateUserResponse>
  ): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateUser: object = { creator: "", id: 0, collateral: false };

export const MsgUpdateUser = {
  encode(message: MsgUpdateUser, writer: Writer = Writer.create()): Writer {
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateUser } as MsgUpdateUser;
    message.collateral = [];
    message.deposit = [];
    message.borrow = [];
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateUser {
    const message = { ...baseMsgUpdateUser } as MsgUpdateUser;
    message.collateral = [];
    message.deposit = [];
    message.borrow = [];
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
    return message;
  },

  toJSON(message: MsgUpdateUser): unknown {
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
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateUser>): MsgUpdateUser {
    const message = { ...baseMsgUpdateUser } as MsgUpdateUser;
    message.collateral = [];
    message.deposit = [];
    message.borrow = [];
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
    return message;
  },
};

const baseMsgUpdateUserResponse: object = {};

export const MsgUpdateUserResponse = {
  encode(_: MsgUpdateUserResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse;
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

  fromJSON(_: any): MsgUpdateUserResponse {
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse;
    return message;
  },

  toJSON(_: MsgUpdateUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateUserResponse>): MsgUpdateUserResponse {
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse;
    return message;
  },
};

const baseMsgDeleteUser: object = { creator: "", id: 0 };

export const MsgDeleteUser = {
  encode(message: MsgDeleteUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteUser } as MsgDeleteUser;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteUser {
    const message = { ...baseMsgDeleteUser } as MsgDeleteUser;
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
    return message;
  },

  toJSON(message: MsgDeleteUser): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteUser>): MsgDeleteUser {
    const message = { ...baseMsgDeleteUser } as MsgDeleteUser;
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
    return message;
  },
};

const baseMsgDeleteUserResponse: object = {};

export const MsgDeleteUserResponse = {
  encode(_: MsgDeleteUserResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteUserResponse } as MsgDeleteUserResponse;
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

  fromJSON(_: any): MsgDeleteUserResponse {
    const message = { ...baseMsgDeleteUserResponse } as MsgDeleteUserResponse;
    return message;
  },

  toJSON(_: MsgDeleteUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteUserResponse>): MsgDeleteUserResponse {
    const message = { ...baseMsgDeleteUserResponse } as MsgDeleteUserResponse;
    return message;
  },
};

const baseMsgCreateInterfaceApr: object = {
  creator: "",
  blocktime: "",
  timeApr: 0,
};

export const MsgCreateInterfaceApr = {
  encode(
    message: MsgCreateInterfaceApr,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.blocktime !== "") {
      writer.uint32(18).string(message.blocktime);
    }
    if (message.timeApr !== 0) {
      writer.uint32(24).int32(message.timeApr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateInterfaceApr {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateInterfaceApr } as MsgCreateInterfaceApr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.blocktime = reader.string();
          break;
        case 3:
          message.timeApr = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateInterfaceApr {
    const message = { ...baseMsgCreateInterfaceApr } as MsgCreateInterfaceApr;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateInterfaceApr): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.blocktime !== undefined && (obj.blocktime = message.blocktime);
    message.timeApr !== undefined && (obj.timeApr = message.timeApr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateInterfaceApr>
  ): MsgCreateInterfaceApr {
    const message = { ...baseMsgCreateInterfaceApr } as MsgCreateInterfaceApr;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateInterfaceAprResponse: object = { id: 0 };

export const MsgCreateInterfaceAprResponse = {
  encode(
    message: MsgCreateInterfaceAprResponse,
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
  ): MsgCreateInterfaceAprResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateInterfaceAprResponse,
    } as MsgCreateInterfaceAprResponse;
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

  fromJSON(object: any): MsgCreateInterfaceAprResponse {
    const message = {
      ...baseMsgCreateInterfaceAprResponse,
    } as MsgCreateInterfaceAprResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateInterfaceAprResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateInterfaceAprResponse>
  ): MsgCreateInterfaceAprResponse {
    const message = {
      ...baseMsgCreateInterfaceAprResponse,
    } as MsgCreateInterfaceAprResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateInterfaceApr: object = {
  creator: "",
  id: 0,
  blocktime: "",
  timeApr: 0,
};

export const MsgUpdateInterfaceApr = {
  encode(
    message: MsgUpdateInterfaceApr,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.blocktime !== "") {
      writer.uint32(26).string(message.blocktime);
    }
    if (message.timeApr !== 0) {
      writer.uint32(32).int32(message.timeApr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateInterfaceApr {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateInterfaceApr } as MsgUpdateInterfaceApr;
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
          message.blocktime = reader.string();
          break;
        case 4:
          message.timeApr = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInterfaceApr {
    const message = { ...baseMsgUpdateInterfaceApr } as MsgUpdateInterfaceApr;
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
    return message;
  },

  toJSON(message: MsgUpdateInterfaceApr): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.blocktime !== undefined && (obj.blocktime = message.blocktime);
    message.timeApr !== undefined && (obj.timeApr = message.timeApr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateInterfaceApr>
  ): MsgUpdateInterfaceApr {
    const message = { ...baseMsgUpdateInterfaceApr } as MsgUpdateInterfaceApr;
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
    return message;
  },
};

const baseMsgUpdateInterfaceAprResponse: object = {};

export const MsgUpdateInterfaceAprResponse = {
  encode(
    _: MsgUpdateInterfaceAprResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateInterfaceAprResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateInterfaceAprResponse,
    } as MsgUpdateInterfaceAprResponse;
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

  fromJSON(_: any): MsgUpdateInterfaceAprResponse {
    const message = {
      ...baseMsgUpdateInterfaceAprResponse,
    } as MsgUpdateInterfaceAprResponse;
    return message;
  },

  toJSON(_: MsgUpdateInterfaceAprResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateInterfaceAprResponse>
  ): MsgUpdateInterfaceAprResponse {
    const message = {
      ...baseMsgUpdateInterfaceAprResponse,
    } as MsgUpdateInterfaceAprResponse;
    return message;
  },
};

const baseMsgDeleteInterfaceApr: object = { creator: "", id: 0 };

export const MsgDeleteInterfaceApr = {
  encode(
    message: MsgDeleteInterfaceApr,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteInterfaceApr {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteInterfaceApr } as MsgDeleteInterfaceApr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteInterfaceApr {
    const message = { ...baseMsgDeleteInterfaceApr } as MsgDeleteInterfaceApr;
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
    return message;
  },

  toJSON(message: MsgDeleteInterfaceApr): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteInterfaceApr>
  ): MsgDeleteInterfaceApr {
    const message = { ...baseMsgDeleteInterfaceApr } as MsgDeleteInterfaceApr;
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
    return message;
  },
};

const baseMsgDeleteInterfaceAprResponse: object = {};

export const MsgDeleteInterfaceAprResponse = {
  encode(
    _: MsgDeleteInterfaceAprResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteInterfaceAprResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteInterfaceAprResponse,
    } as MsgDeleteInterfaceAprResponse;
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

  fromJSON(_: any): MsgDeleteInterfaceAprResponse {
    const message = {
      ...baseMsgDeleteInterfaceAprResponse,
    } as MsgDeleteInterfaceAprResponse;
    return message;
  },

  toJSON(_: MsgDeleteInterfaceAprResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteInterfaceAprResponse>
  ): MsgDeleteInterfaceAprResponse {
    const message = {
      ...baseMsgDeleteInterfaceAprResponse,
    } as MsgDeleteInterfaceAprResponse;
    return message;
  },
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
  CreateInterfaceApr(
    request: MsgCreateInterfaceApr
  ): Promise<MsgCreateInterfaceAprResponse>;
  UpdateInterfaceApr(
    request: MsgUpdateInterfaceApr
  ): Promise<MsgUpdateInterfaceAprResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteInterfaceApr(
    request: MsgDeleteInterfaceApr
  ): Promise<MsgDeleteInterfaceAprResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "CreatePool",
      data
    );
    return promise.then((data) =>
      MsgCreatePoolResponse.decode(new Reader(data))
    );
  }

  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "UpdatePool",
      data
    );
    return promise.then((data) =>
      MsgUpdatePoolResponse.decode(new Reader(data))
    );
  }

  DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse> {
    const data = MsgDeletePool.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "DeletePool",
      data
    );
    return promise.then((data) =>
      MsgDeletePoolResponse.decode(new Reader(data))
    );
  }

  CreateDeposit(request: MsgCreateDeposit): Promise<MsgCreateDepositResponse> {
    const data = MsgCreateDeposit.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "CreateDeposit",
      data
    );
    return promise.then((data) =>
      MsgCreateDepositResponse.decode(new Reader(data))
    );
  }

  UpdateDeposit(request: MsgUpdateDeposit): Promise<MsgUpdateDepositResponse> {
    const data = MsgUpdateDeposit.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "UpdateDeposit",
      data
    );
    return promise.then((data) =>
      MsgUpdateDepositResponse.decode(new Reader(data))
    );
  }

  DeleteDeposit(request: MsgDeleteDeposit): Promise<MsgDeleteDepositResponse> {
    const data = MsgDeleteDeposit.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "DeleteDeposit",
      data
    );
    return promise.then((data) =>
      MsgDeleteDepositResponse.decode(new Reader(data))
    );
  }

  CreateBorrow(request: MsgCreateBorrow): Promise<MsgCreateBorrowResponse> {
    const data = MsgCreateBorrow.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "CreateBorrow",
      data
    );
    return promise.then((data) =>
      MsgCreateBorrowResponse.decode(new Reader(data))
    );
  }

  UpdateBorrow(request: MsgUpdateBorrow): Promise<MsgUpdateBorrowResponse> {
    const data = MsgUpdateBorrow.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "UpdateBorrow",
      data
    );
    return promise.then((data) =>
      MsgUpdateBorrowResponse.decode(new Reader(data))
    );
  }

  DeleteBorrow(request: MsgDeleteBorrow): Promise<MsgDeleteBorrowResponse> {
    const data = MsgDeleteBorrow.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "DeleteBorrow",
      data
    );
    return promise.then((data) =>
      MsgDeleteBorrowResponse.decode(new Reader(data))
    );
  }

  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse> {
    const data = MsgCreateUser.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "CreateUser",
      data
    );
    return promise.then((data) =>
      MsgCreateUserResponse.decode(new Reader(data))
    );
  }

  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse> {
    const data = MsgUpdateUser.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "UpdateUser",
      data
    );
    return promise.then((data) =>
      MsgUpdateUserResponse.decode(new Reader(data))
    );
  }

  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse> {
    const data = MsgDeleteUser.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "DeleteUser",
      data
    );
    return promise.then((data) =>
      MsgDeleteUserResponse.decode(new Reader(data))
    );
  }

  CreateInterfaceApr(
    request: MsgCreateInterfaceApr
  ): Promise<MsgCreateInterfaceAprResponse> {
    const data = MsgCreateInterfaceApr.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "CreateInterfaceApr",
      data
    );
    return promise.then((data) =>
      MsgCreateInterfaceAprResponse.decode(new Reader(data))
    );
  }

  UpdateInterfaceApr(
    request: MsgUpdateInterfaceApr
  ): Promise<MsgUpdateInterfaceAprResponse> {
    const data = MsgUpdateInterfaceApr.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "UpdateInterfaceApr",
      data
    );
    return promise.then((data) =>
      MsgUpdateInterfaceAprResponse.decode(new Reader(data))
    );
  }

  DeleteInterfaceApr(
    request: MsgDeleteInterfaceApr
  ): Promise<MsgDeleteInterfaceAprResponse> {
    const data = MsgDeleteInterfaceApr.encode(request).finish();
    const promise = this.rpc.request(
      "cosmonaut.wayne.wayne.Msg",
      "DeleteInterfaceApr",
      data
    );
    return promise.then((data) =>
      MsgDeleteInterfaceAprResponse.decode(new Reader(data))
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
