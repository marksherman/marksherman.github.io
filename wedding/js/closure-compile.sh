#!/bin/sh

java -jar ../closure-compiler/compiler.jar --js $1.js --js_output_file $1.min.js 

ls -l $1*

