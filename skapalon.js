#!/usr/bin/env node

var i = require('interpolate');

var options = { delimiter: '{{}}' };

var processLine = function(line){
	console.log(i(line, process.env, options));
};

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data){
	processLine(data);
});