#! /bin/bash

if [[ $ENV != "production" ]]
    then
        echo "install should only be used for production purposes, for local devleopment use 'cjweb install-deps' to only install dependencies"
        exit 1
fi

$SCRIPTS_DIR'/install-dependencies.sh'
$SCRIPTS_DIR'/build.sh'

# cp ${SCRIPTS_DIR}/nginx/nginx.conf /usr/local/nginx/conf 
mv 

