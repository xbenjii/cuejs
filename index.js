'use strict';

let os = require('os');
let ffi = require('ffi');
let bindings = require('./bindings');
let enums = require('./enums');

let structs = bindings.structs;
let pointers = bindings.pointers;
let arch = os.arch() === 'x64' ? '.x64' : '';

let lib = ffi.Library(`./dll/CUESDK${arch}_2013.dll`, {
    CorsairSetLedsColors: ['bool', ['int', pointers.CorsairLedColorPtr]],
    CorsairGetDeviceCount: ['int', []],
    CorsairGetDeviceInfo: [structs.CorsairDeviceInfo, ['int']],
    CorsairGetLedPositions: [structs.CorsairLedPositions, []],
    CorsairGetLastError: ['int', []],
    CorsairPerformProtocolHandshake: [structs.CorsairProtocolDetails, []],
    CorsairGetLedIdForKeyName: ['int', ['char']]
});

//Just expose the methods for now, we'll add some proper functionality later.
module.exports = {
    init: lib.CorsairPerformProtocolHandshake, // Must be called before any other methods
    getDeviceCount: lib.CorsairGetDeviceCount,
    getLedPositions: lib.CorsairGetLedPositions,
    getDeviceInfo: lib.CorsairGetDeviceInfo,
    getLedIdForKeyName: lib.CorsairGetLedIdForKeyName,
    setLedColor: lib.CorsairSetLedsColors
};
