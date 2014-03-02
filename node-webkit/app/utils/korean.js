/*jshint node:true*/
"use strict";

var unorm = require('unorm');

// function to display Unicode of a string.
var codepoints = function (str) {
    return str.split('').map(function (chr) {
        var code = chr.charCodeAt(0);
        return (code >= 33 && code <= 126) ? JSON.stringfy(chr) : "U+" + code.toString(16).toUpperCase();
    //}).join(' ');
    });
}

var han = '한';
console.log('- ex 1 -');
console.log(han);
console.log(codepoints(han));
console.log(han.normalize('NFC'));
console.log(codepoints(han.normalize('NFC')));

var hangul = '한글';
console.log('- ex 2 -');
console.log(hangul);
console.log(codepoints(hangul));
console.log(hangul.normalize('NFD'));
console.log(codepoints(hangul.normalize('NFD')));

console.log('\U3147');
