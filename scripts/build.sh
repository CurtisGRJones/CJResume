#! /bin/bash

rm -r ${PROJECT_DIR}/dist

(cd ${PROJECT_DIR}/src && yarn build);

(cd ${PROJECT_DIR}/public && yarn build);

mkdir ${PROJECT_DIR}/dist;

cp -r ${PROJECT_DIR}/src/dist ${PROJECT_DIR}/dist/src
cp -r ${PROJECT_DIR}/public/dist ${PROJECT_DIR}/dist/public

