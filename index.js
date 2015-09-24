'use strict';

let os = require('os');
let ffi = require('ffi');

let bindings = require('./bindings');
let structs = bindings.structs;
let pointers = bindings.pointers;
let enums = require('./enums');
let arch = os.arch() === 'x64' ? '.x64' : '';

let lib = ffi.Library(`./dll/CUESDK${arch}_2013.dll`, {
    'CorsairSetLedsColors': ['bool', ['int', pointers.CorsairLedColorPtr]],
    'CorsairGetDeviceCount': ['int', []],
    'CorsairGetDeviceInfo': [structs.CorsairDeviceInfo, ['int']],
    'CorsairGetLedPositions': [structs.CorsairLedPositions, []],
    'CorsairGetLastError': ['int', []],
    'CorsairPerformProtocolHandshake': [structs.CorsairProtocolDetails, []],
    'CorsairGetLedIdForKeyName': ['int', ['char']]
});

module.exports = {
    init: lib.CorsairPerformProtocolHandshake,
    getDeviceCount: lib.CorsairGetDeviceCount,
    getLedPositions: lib.CorsairGetLedPositions
};
