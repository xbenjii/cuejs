'use strict';

let corsair = require('./index');
corsair.init();
/*
let keypress = require('keypress');
let tty = require('tty');
keypress(process.stdin);
process.stdin.on('keypress', (ch, key) => {
    if(key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    } else {
        let ledId = lib.CorsairGetLedIdForKeyName(key.name);
        console.log(ledId);
    }
});
if (typeof process.stdin.setRawMode == 'function') {
    process.stdin.setRawMode(true);
} else {
    tty.setRawMode(true);
}
process.stdin.resume();
*/
