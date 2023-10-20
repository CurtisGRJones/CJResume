#! /bin/bash

rm -r dist

(cd ./src && yarn build);

(cd ./public && yarn build);

mkdir dist;

cp -r ./src/dist ./dist/src
cp -r ./public/dist ./dist/public

