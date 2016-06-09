#!/bin/bash

htmlopts="--collapse-boolean-attributes --collapse-whitespace --decode-entities --html-5 --minify-css --minify-js --process-conditional-comments --process-scripts text/html --remove-attribute-quotes --remove-comments --remove-empty-attributes --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-style-link-type-attributes --remove-tag-whitespace --sort-attributes --sort-class-name --use-short-doctype"

html-minifier $htmlopts -o index.html index.src.html

csso css/main.css --output css/main.min.css
