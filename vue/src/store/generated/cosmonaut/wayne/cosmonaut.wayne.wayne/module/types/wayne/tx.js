/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { InterfaceApr } from "../wayne/interface_apr";
import { User } from "../wayne/user";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";
export const protobufPackage = "cosmonaut.wayne.wayne";
const baseMsgCreatePool = {
    creator: "",
    asset: "",
    denom: "",
    collatoralFactor: 0,
    depth: 0,
};
export const MsgCreatePool = {
    encode(message, writer = Writer.create()) {
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
            InterfaceApr.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.users) {
            User.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool };
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
    fromJSON(object) {
        const message = { ...baseMsgCreatePool };
        message.aPR = [];
        message.users = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = String(object.asset);
        }
        else {
            message.asset = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.collatoralFactor !== undefined &&
            object.collatoralFactor !== null) {
            message.collatoralFactor = Number(object.collatoralFactor);
        }
        else {
            message.collatoralFactor = 0;
        }
        if (object.depth !== undefined && object.depth !== null) {
            message.depth = Number(object.depth);
        }
        else {
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
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.asset !== undefined && (obj.asset = message.asset);
        message.denom !== undefined && (obj.denom = message.denom);
        message.collatoralFactor !== undefined &&
            (obj.collatoralFactor = message.collatoralFactor);
        message.depth !== undefined && (obj.depth = message.depth);
        if (message.aPR) {
            obj.aPR = message.aPR.map((e) => e ? InterfaceApr.toJSON(e) : undefined);
        }
        else {
            obj.aPR = [];
        }
        if (message.users) {
            obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
        }
        else {
            obj.users = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool };
        message.aPR = [];
        message.users = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        else {
            message.asset = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.collatoralFactor !== undefined &&
            object.collatoralFactor !== null) {
            message.collatoralFactor = object.collatoralFactor;
        }
        else {
            message.collatoralFactor = 0;
        }
        if (object.depth !== undefined && object.depth !== null) {
            message.depth = object.depth;
        }
        else {
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
const baseMsgCreatePoolResponse = { id: 0 };
export const MsgCreatePoolResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePoolResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePoolResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePoolResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdatePool = {
    creator: "",
    id: 0,
    asset: "",
    denom: "",
    collatoralFactor: 0,
    depth: 0,
};
export const MsgUpdatePool = {
    encode(message, writer = Writer.create()) {
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
            InterfaceApr.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.users) {
            User.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePool };
        message.aPR = [];
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdatePool };
        message.aPR = [];
        message.users = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = String(object.asset);
        }
        else {
            message.asset = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        if (object.collatoralFactor !== undefined &&
            object.collatoralFactor !== null) {
            message.collatoralFactor = Number(object.collatoralFactor);
        }
        else {
            message.collatoralFactor = 0;
        }
        if (object.depth !== undefined && object.depth !== null) {
            message.depth = Number(object.depth);
        }
        else {
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
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.asset !== undefined && (obj.asset = message.asset);
        message.denom !== undefined && (obj.denom = message.denom);
        message.collatoralFactor !== undefined &&
            (obj.collatoralFactor = message.collatoralFactor);
        message.depth !== undefined && (obj.depth = message.depth);
        if (message.aPR) {
            obj.aPR = message.aPR.map((e) => e ? InterfaceApr.toJSON(e) : undefined);
        }
        else {
            obj.aPR = [];
        }
        if (message.users) {
            obj.users = message.users.map((e) => (e ? User.toJSON(e) : undefined));
        }
        else {
            obj.users = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePool };
        message.aPR = [];
        message.users = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        else {
            message.asset = "";
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        if (object.collatoralFactor !== undefined &&
            object.collatoralFactor !== null) {
            message.collatoralFactor = object.collatoralFactor;
        }
        else {
            message.collatoralFactor = 0;
        }
        if (object.depth !== undefined && object.depth !== null) {
            message.depth = object.depth;
        }
        else {
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
const baseMsgUpdatePoolResponse = {};
export const MsgUpdatePoolResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePoolResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgUpdatePoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdatePoolResponse };
        return message;
    },
};
const baseMsgDeletePool = { creator: "", id: 0 };
export const MsgDeletePool = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePool };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeletePool };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeletePool };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeletePoolResponse = {};
export const MsgDeletePoolResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePoolResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgDeletePoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeletePoolResponse };
        return message;
    },
};
const baseMsgCreateDeposit = {
    creator: "",
    blockHeight: 0,
    asset: "",
    amount: 0,
    denom: "",
};
export const MsgCreateDeposit = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDeposit };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateDeposit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = Number(object.blockHeight);
        }
        else {
            message.blockHeight = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = String(object.asset);
        }
        else {
            message.asset = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        message.asset !== undefined && (obj.asset = message.asset);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateDeposit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        else {
            message.asset = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseMsgCreateDepositResponse = { id: 0 };
export const MsgCreateDepositResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateDepositResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateDepositResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateDepositResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateDeposit = {
    creator: "",
    id: 0,
    blockHeight: 0,
    asset: "",
    amount: 0,
    denom: "",
};
export const MsgUpdateDeposit = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDeposit };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateDeposit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = Number(object.blockHeight);
        }
        else {
            message.blockHeight = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = String(object.asset);
        }
        else {
            message.asset = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        message.asset !== undefined && (obj.asset = message.asset);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateDeposit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        else {
            message.asset = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseMsgUpdateDepositResponse = {};
export const MsgUpdateDepositResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateDepositResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateDepositResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateDepositResponse,
        };
        return message;
    },
};
const baseMsgDeleteDeposit = { creator: "", id: 0 };
export const MsgDeleteDeposit = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteDeposit };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteDeposit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteDeposit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteDepositResponse = {};
export const MsgDeleteDepositResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteDepositResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteDepositResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteDepositResponse,
        };
        return message;
    },
};
const baseMsgCreateBorrow = {
    creator: "",
    blockHeight: 0,
    asset: "",
    amount: 0,
    denom: "",
};
export const MsgCreateBorrow = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateBorrow };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateBorrow };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = Number(object.blockHeight);
        }
        else {
            message.blockHeight = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = String(object.asset);
        }
        else {
            message.asset = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        message.asset !== undefined && (obj.asset = message.asset);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateBorrow };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        else {
            message.asset = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseMsgCreateBorrowResponse = { id: 0 };
export const MsgCreateBorrowResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateBorrowResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateBorrowResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateBorrowResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateBorrow = {
    creator: "",
    id: 0,
    blockHeight: 0,
    asset: "",
    amount: 0,
    denom: "",
};
export const MsgUpdateBorrow = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBorrow };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateBorrow };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = Number(object.blockHeight);
        }
        else {
            message.blockHeight = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = String(object.asset);
        }
        else {
            message.asset = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        message.asset !== undefined && (obj.asset = message.asset);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateBorrow };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = object.blockHeight;
        }
        else {
            message.blockHeight = 0;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        else {
            message.asset = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = "";
        }
        return message;
    },
};
const baseMsgUpdateBorrowResponse = {};
export const MsgUpdateBorrowResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateBorrowResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateBorrowResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateBorrowResponse,
        };
        return message;
    },
};
const baseMsgDeleteBorrow = { creator: "", id: 0 };
export const MsgDeleteBorrow = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteBorrow };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteBorrow };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteBorrow };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteBorrowResponse = {};
export const MsgDeleteBorrowResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteBorrowResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteBorrowResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteBorrowResponse,
        };
        return message;
    },
};
const baseMsgCreateUser = { creator: "", collateral: false };
export const MsgCreateUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        writer.uint32(18).fork();
        for (const v of message.collateral) {
            writer.bool(v);
        }
        writer.ldelim();
        for (const v of message.deposit) {
            Deposit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.borrow) {
            Borrow.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateUser };
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
                    }
                    else {
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
    fromJSON(object) {
        const message = { ...baseMsgCreateUser };
        message.collateral = [];
        message.deposit = [];
        message.borrow = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
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
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        if (message.collateral) {
            obj.collateral = message.collateral.map((e) => e);
        }
        else {
            obj.collateral = [];
        }
        if (message.deposit) {
            obj.deposit = message.deposit.map((e) => e ? Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposit = [];
        }
        if (message.borrow) {
            obj.borrow = message.borrow.map((e) => e ? Borrow.toJSON(e) : undefined);
        }
        else {
            obj.borrow = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateUser };
        message.collateral = [];
        message.deposit = [];
        message.borrow = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
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
const baseMsgCreateUserResponse = { id: 0 };
export const MsgCreateUserResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateUserResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateUserResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateUser = { creator: "", id: 0, collateral: false };
export const MsgUpdateUser = {
    encode(message, writer = Writer.create()) {
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
            Deposit.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.borrow) {
            Borrow.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateUser };
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
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.collateral.push(reader.bool());
                        }
                    }
                    else {
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateUser };
        message.collateral = [];
        message.deposit = [];
        message.borrow = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
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
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        if (message.collateral) {
            obj.collateral = message.collateral.map((e) => e);
        }
        else {
            obj.collateral = [];
        }
        if (message.deposit) {
            obj.deposit = message.deposit.map((e) => e ? Deposit.toJSON(e) : undefined);
        }
        else {
            obj.deposit = [];
        }
        if (message.borrow) {
            obj.borrow = message.borrow.map((e) => e ? Borrow.toJSON(e) : undefined);
        }
        else {
            obj.borrow = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateUser };
        message.collateral = [];
        message.deposit = [];
        message.borrow = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
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
const baseMsgUpdateUserResponse = {};
export const MsgUpdateUserResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateUserResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgUpdateUserResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateUserResponse };
        return message;
    },
};
const baseMsgDeleteUser = { creator: "", id: 0 };
export const MsgDeleteUser = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteUser };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteUser };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteUserResponse = {};
export const MsgDeleteUserResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteUserResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgDeleteUserResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteUserResponse };
        return message;
    },
};
const baseMsgCreateInterfaceApr = {
    creator: "",
    blocktime: "",
    timeApr: 0,
};
export const MsgCreateInterfaceApr = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateInterfaceApr };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateInterfaceApr };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.blocktime !== undefined && object.blocktime !== null) {
            message.blocktime = String(object.blocktime);
        }
        else {
            message.blocktime = "";
        }
        if (object.timeApr !== undefined && object.timeApr !== null) {
            message.timeApr = Number(object.timeApr);
        }
        else {
            message.timeApr = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.blocktime !== undefined && (obj.blocktime = message.blocktime);
        message.timeApr !== undefined && (obj.timeApr = message.timeApr);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateInterfaceApr };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.blocktime !== undefined && object.blocktime !== null) {
            message.blocktime = object.blocktime;
        }
        else {
            message.blocktime = "";
        }
        if (object.timeApr !== undefined && object.timeApr !== null) {
            message.timeApr = object.timeApr;
        }
        else {
            message.timeApr = 0;
        }
        return message;
    },
};
const baseMsgCreateInterfaceAprResponse = { id: 0 };
export const MsgCreateInterfaceAprResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateInterfaceAprResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateInterfaceAprResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateInterfaceAprResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateInterfaceApr = {
    creator: "",
    id: 0,
    blocktime: "",
    timeApr: 0,
};
export const MsgUpdateInterfaceApr = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateInterfaceApr };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateInterfaceApr };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.blocktime !== undefined && object.blocktime !== null) {
            message.blocktime = String(object.blocktime);
        }
        else {
            message.blocktime = "";
        }
        if (object.timeApr !== undefined && object.timeApr !== null) {
            message.timeApr = Number(object.timeApr);
        }
        else {
            message.timeApr = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.blocktime !== undefined && (obj.blocktime = message.blocktime);
        message.timeApr !== undefined && (obj.timeApr = message.timeApr);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateInterfaceApr };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.blocktime !== undefined && object.blocktime !== null) {
            message.blocktime = object.blocktime;
        }
        else {
            message.blocktime = "";
        }
        if (object.timeApr !== undefined && object.timeApr !== null) {
            message.timeApr = object.timeApr;
        }
        else {
            message.timeApr = 0;
        }
        return message;
    },
};
const baseMsgUpdateInterfaceAprResponse = {};
export const MsgUpdateInterfaceAprResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateInterfaceAprResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateInterfaceAprResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateInterfaceAprResponse,
        };
        return message;
    },
};
const baseMsgDeleteInterfaceApr = { creator: "", id: 0 };
export const MsgDeleteInterfaceApr = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteInterfaceApr };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteInterfaceApr };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteInterfaceApr };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteInterfaceAprResponse = {};
export const MsgDeleteInterfaceAprResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteInterfaceAprResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteInterfaceAprResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteInterfaceAprResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreatePool(request) {
        const data = MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "CreatePool", data);
        return promise.then((data) => MsgCreatePoolResponse.decode(new Reader(data)));
    }
    UpdatePool(request) {
        const data = MsgUpdatePool.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "UpdatePool", data);
        return promise.then((data) => MsgUpdatePoolResponse.decode(new Reader(data)));
    }
    DeletePool(request) {
        const data = MsgDeletePool.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "DeletePool", data);
        return promise.then((data) => MsgDeletePoolResponse.decode(new Reader(data)));
    }
    CreateDeposit(request) {
        const data = MsgCreateDeposit.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "CreateDeposit", data);
        return promise.then((data) => MsgCreateDepositResponse.decode(new Reader(data)));
    }
    UpdateDeposit(request) {
        const data = MsgUpdateDeposit.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "UpdateDeposit", data);
        return promise.then((data) => MsgUpdateDepositResponse.decode(new Reader(data)));
    }
    DeleteDeposit(request) {
        const data = MsgDeleteDeposit.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "DeleteDeposit", data);
        return promise.then((data) => MsgDeleteDepositResponse.decode(new Reader(data)));
    }
    CreateBorrow(request) {
        const data = MsgCreateBorrow.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "CreateBorrow", data);
        return promise.then((data) => MsgCreateBorrowResponse.decode(new Reader(data)));
    }
    UpdateBorrow(request) {
        const data = MsgUpdateBorrow.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "UpdateBorrow", data);
        return promise.then((data) => MsgUpdateBorrowResponse.decode(new Reader(data)));
    }
    DeleteBorrow(request) {
        const data = MsgDeleteBorrow.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "DeleteBorrow", data);
        return promise.then((data) => MsgDeleteBorrowResponse.decode(new Reader(data)));
    }
    CreateUser(request) {
        const data = MsgCreateUser.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "CreateUser", data);
        return promise.then((data) => MsgCreateUserResponse.decode(new Reader(data)));
    }
    UpdateUser(request) {
        const data = MsgUpdateUser.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "UpdateUser", data);
        return promise.then((data) => MsgUpdateUserResponse.decode(new Reader(data)));
    }
    DeleteUser(request) {
        const data = MsgDeleteUser.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "DeleteUser", data);
        return promise.then((data) => MsgDeleteUserResponse.decode(new Reader(data)));
    }
    CreateInterfaceApr(request) {
        const data = MsgCreateInterfaceApr.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "CreateInterfaceApr", data);
        return promise.then((data) => MsgCreateInterfaceAprResponse.decode(new Reader(data)));
    }
    UpdateInterfaceApr(request) {
        const data = MsgUpdateInterfaceApr.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "UpdateInterfaceApr", data);
        return promise.then((data) => MsgUpdateInterfaceAprResponse.decode(new Reader(data)));
    }
    DeleteInterfaceApr(request) {
        const data = MsgDeleteInterfaceApr.encode(request).finish();
        const promise = this.rpc.request("cosmonaut.wayne.wayne.Msg", "DeleteInterfaceApr", data);
        return promise.then((data) => MsgDeleteInterfaceAprResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
