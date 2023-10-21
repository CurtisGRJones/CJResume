#! /bin/bash

if [[ NODE_ENV == 'production' ]] 
    then
        echo "docker-build should not be done on the production server"
        exit 1;
fi

${SCRIPTS_DIR}/install-dependencies.sh
${SCRIPTS_DIR}/build.sh

# cp ${SCRIPTS_DIR}/nginx/nginx.conf ${PROJECT_DIR}/dist/nginx.conf;


docker build -t curtisgrjones/cjweb-api:latest ${PROJECT_DIR}/api
docker build -t curtisgrjones/cjweb-app:latest ${PROJECT_DIR}/app
docker build -t curtisgrjones/cjweb-nginx:latest ${PROJECT_DIR}/nginx
