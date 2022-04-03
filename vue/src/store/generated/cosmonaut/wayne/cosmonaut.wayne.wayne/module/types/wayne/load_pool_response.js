/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "cosmonaut.wayne.wayne";
const baseLoadPoolResponse = {
    id: 0,
    asset: "",
    collatoralFactor: 0,
    liquidity: 0,
    depositApy: 0,
    borrowApy: 0,
    creator: "",
};
export const LoadPoolResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        if (message.collatoralFactor !== 0) {
            writer.uint32(24).int32(message.collatoralFactor);
        }
        if (message.liquidity !== 0) {
            writer.uint32(32).int32(message.liquidity);
        }
        if (message.depositApy !== 0) {
            writer.uint32(40).int32(message.depositApy);
        }
        if (message.borrowApy !== 0) {
            writer.uint32(48).int32(message.borrowApy);
        }
        if (message.creator !== "") {
            writer.uint32(58).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoadPoolResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.asset = reader.string();
                    break;
                case 3:
                    message.collatoralFactor = reader.int32();
                    break;
                case 4:
                    message.liquidity = reader.int32();
                    break;
                case 5:
                    message.depositApy = reader.int32();
                    break;
                case 6:
                    message.borrowApy = reader.int32();
                    break;
                case 7:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLoadPoolResponse };
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
        if (object.collatoralFactor !== undefined &&
            object.collatoralFactor !== null) {
            message.collatoralFactor = Number(object.collatoralFactor);
        }
        else {
            message.collatoralFactor = 0;
        }
        if (object.liquidity !== undefined && object.liquidity !== null) {
            message.liquidity = Number(object.liquidity);
        }
        else {
            message.liquidity = 0;
        }
        if (object.depositApy !== undefined && object.depositApy !== null) {
            message.depositApy = Number(object.depositApy);
        }
        else {
            message.depositApy = 0;
        }
        if (object.borrowApy !== undefined && object.borrowApy !== null) {
            message.borrowApy = Number(object.borrowApy);
        }
        else {
            message.borrowApy = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.asset !== undefined && (obj.asset = message.asset);
        message.collatoralFactor !== undefined &&
            (obj.collatoralFactor = message.collatoralFactor);
        message.liquidity !== undefined && (obj.liquidity = message.liquidity);
        message.depositApy !== undefined && (obj.depositApy = message.depositApy);
        message.borrowApy !== undefined && (obj.borrowApy = message.borrowApy);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLoadPoolResponse };
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
        if (object.collatoralFactor !== undefined &&
            object.collatoralFactor !== null) {
            message.collatoralFactor = object.collatoralFactor;
        }
        else {
            message.collatoralFactor = 0;
        }
        if (object.liquidity !== undefined && object.liquidity !== null) {
            message.liquidity = object.liquidity;
        }
        else {
            message.liquidity = 0;
        }
        if (object.depositApy !== undefined && object.depositApy !== null) {
            message.depositApy = object.depositApy;
        }
        else {
            message.depositApy = 0;
        }
        if (object.borrowApy !== undefined && object.borrowApy !== null) {
            message.borrowApy = object.borrowApy;
        }
        else {
            message.borrowApy = 0;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseLoadUserResponse = {
    AssetApy: 0,
    AssetDenom: "",
    AssetBalance: 0,
    AssetDeposit: 0,
    AssetBorrow: 0,
    AssetPrice: 0,
    Collateral: false,
};
export const LoadUserResponse = {
    encode(message, writer = Writer.create()) {
        if (message.AssetApy !== 0) {
            writer.uint32(8).int32(message.AssetApy);
        }
        if (message.AssetDenom !== "") {
            writer.uint32(18).string(message.AssetDenom);
        }
        if (message.AssetBalance !== 0) {
            writer.uint32(24).int64(message.AssetBalance);
        }
        if (message.AssetDeposit !== 0) {
            writer.uint32(32).int32(message.AssetDeposit);
        }
        if (message.AssetBorrow !== 0) {
            writer.uint32(40).int32(message.AssetBorrow);
        }
        if (message.AssetPrice !== 0) {
            writer.uint32(48).int32(message.AssetPrice);
        }
        if (message.Collateral === true) {
            writer.uint32(56).bool(message.Collateral);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLoadUserResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AssetApy = reader.int32();
                    break;
                case 2:
                    message.AssetDenom = reader.string();
                    break;
                case 3:
                    message.AssetBalance = longToNumber(reader.int64());
                    break;
                case 4:
                    message.AssetDeposit = reader.int32();
                    break;
                case 5:
                    message.AssetBorrow = reader.int32();
                    break;
                case 6:
                    message.AssetPrice = reader.int32();
                    break;
                case 7:
                    message.Collateral = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLoadUserResponse };
        if (object.AssetApy !== undefined && object.AssetApy !== null) {
            message.AssetApy = Number(object.AssetApy);
        }
        else {
            message.AssetApy = 0;
        }
        if (object.AssetDenom !== undefined && object.AssetDenom !== null) {
            message.AssetDenom = String(object.AssetDenom);
        }
        else {
            message.AssetDenom = "";
        }
        if (object.AssetBalance !== undefined && object.AssetBalance !== null) {
            message.AssetBalance = Number(object.AssetBalance);
        }
        else {
            message.AssetBalance = 0;
        }
        if (object.AssetDeposit !== undefined && object.AssetDeposit !== null) {
            message.AssetDeposit = Number(object.AssetDeposit);
        }
        else {
            message.AssetDeposit = 0;
        }
        if (object.AssetBorrow !== undefined && object.AssetBorrow !== null) {
            message.AssetBorrow = Number(object.AssetBorrow);
        }
        else {
            message.AssetBorrow = 0;
        }
        if (object.AssetPrice !== undefined && object.AssetPrice !== null) {
            message.AssetPrice = Number(object.AssetPrice);
        }
        else {
            message.AssetPrice = 0;
        }
        if (object.Collateral !== undefined && object.Collateral !== null) {
            message.Collateral = Boolean(object.Collateral);
        }
        else {
            message.Collateral = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.AssetApy !== undefined && (obj.AssetApy = message.AssetApy);
        message.AssetDenom !== undefined && (obj.AssetDenom = message.AssetDenom);
        message.AssetBalance !== undefined &&
            (obj.AssetBalance = message.AssetBalance);
        message.AssetDeposit !== undefined &&
            (obj.AssetDeposit = message.AssetDeposit);
        message.AssetBorrow !== undefined &&
            (obj.AssetBorrow = message.AssetBorrow);
        message.AssetPrice !== undefined && (obj.AssetPrice = message.AssetPrice);
        message.Collateral !== undefined && (obj.Collateral = message.Collateral);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLoadUserResponse };
        if (object.AssetApy !== undefined && object.AssetApy !== null) {
            message.AssetApy = object.AssetApy;
        }
        else {
            message.AssetApy = 0;
        }
        if (object.AssetDenom !== undefined && object.AssetDenom !== null) {
            message.AssetDenom = object.AssetDenom;
        }
        else {
            message.AssetDenom = "";
        }
        if (object.AssetBalance !== undefined && object.AssetBalance !== null) {
            message.AssetBalance = object.AssetBalance;
        }
        else {
            message.AssetBalance = 0;
        }
        if (object.AssetDeposit !== undefined && object.AssetDeposit !== null) {
            message.AssetDeposit = object.AssetDeposit;
        }
        else {
            message.AssetDeposit = 0;
        }
        if (object.AssetBorrow !== undefined && object.AssetBorrow !== null) {
            message.AssetBorrow = object.AssetBorrow;
        }
        else {
            message.AssetBorrow = 0;
        }
        if (object.AssetPrice !== undefined && object.AssetPrice !== null) {
            message.AssetPrice = object.AssetPrice;
        }
        else {
            message.AssetPrice = 0;
        }
        if (object.Collateral !== undefined && object.Collateral !== null) {
            message.Collateral = object.Collateral;
        }
        else {
            message.Collateral = false;
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
