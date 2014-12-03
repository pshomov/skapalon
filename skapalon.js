#!/usr/bin/env node

var readline = require('readline');
var i = require('interpolate');

var options = { delimiter: '{{}}' };

var rl = readline.createInterface({
  input: process.stdin,
  output: new require('stream').Writable()
});

var processLine = function(line){
	console.log(i(line, process.env, options));
};

rl.on('line', function(line){
    processLine(line);
})
