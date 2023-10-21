#! /bin/bash

if [[ NODE_ENV == 'production' ]] 
    then
        echo "docker-build should not be done on the production server"
        exit 1;
fi

${SCRIPTS_DIR}/install-dependencies.sh
${SCRIPTS_DIR}/build.sh

# cp ${SCRIPTS_DIR}/nginx/nginx.conf ${PROJECT_DIR}/dist/nginx.conf;


docker build -t cjweb-api ${PROJECT_DIR}/api
docker build -t cjweb-app ${PROJECT_DIR}/app
docker build -t cjweb-nginx ${PROJECT_DIR}/nginx
