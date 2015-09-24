'use strict';

let ref = require('ref');
let struct = require('ref-struct');

let charPtr = ref.refType(ref.types.char);
let int = ref.types.int;
let bool = ref.types.bool;
let double = ref.types.double;

let structs = {};
let pointers = {};

structs.CorsairDeviceInfo = struct({
    type: int,
    model: charPtr,
    physicalLayout: int,
    logicalLayout: int,
    capsMask: int
});
structs.CorsairLedPosition = struct({
    ledId: int,
    top: double,
    left: double,
    height: double,
    width: double
});
pointers.CorsairLedPositionPtr = ref.refType(structs.CorsairLedPosition);
structs.CorsairLedPositions = struct({
    numberOfLed: int,
    pLedPosition: pointers.CorsairLedPositionPtr
});
structs.CorsairLedColor = struct({
   ledId: int,
   r: int,
   g: int,
   b: int
});
pointers.CorsairLedColorPtr = ref.refType(structs.CorsairLedColor);
structs.CorsairProtocolDetails = struct({
    sdkVersion: charPtr,
    serverVersion: charPtr,
    sdkProtocolVersion: int,
    serverProtocolVersion: int,
    breakingChanges: bool
});
module.exports = {
    structs: structs,
    pointers: pointers
};
