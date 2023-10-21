#! /bin/bash

# TODO possibly eliminate this and just use docker

if [[ $ENV != "production" ]]
    then
        echo "install should only be used for production purposes, for local devleopment use 'cjweb install-deps' to only install dependencies"
        exit 1
fi

${SCRIPTS_DIR}/install-dependencies.sh
${SCRIPTS_DIR}/build.sh

# TODO check directories exist

cp ${SCRIPTS_DIR}/nginx/nginx.conf /usr/local/nginx/conf 
mv $PROJECT_DIR/dist/public /data/www
mv $PROJECT_DIR/dist/src /data/api

