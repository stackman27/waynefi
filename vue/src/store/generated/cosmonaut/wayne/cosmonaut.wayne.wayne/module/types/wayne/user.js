/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Deposit } from "../wayne/deposit";
import { Borrow } from "../wayne/borrow";
export const protobufPackage = "cosmonaut.wayne.wayne";
const baseUser = { creator: "", id: 0, collateral: false };
export const User = {
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
        const message = { ...baseUser };
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
        const message = { ...baseUser };
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
        const message = { ...baseUser };
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
