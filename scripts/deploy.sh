#! /bin/bash

##  Esure ~/.ssh/config is configures with
##  Host SERVER_HOST
##  IdentityFile /path/to/private/key

SERVER=${SERVER_USER}@${SERVER_HOST}

echo Deploying to production

scp -r ${SCRIPTS_DIR}/docker/production ${SERVER}:~/;
ssh ${SERVER} 'cd ~/production && docker compose pull && docker compose down && docker compose up -d'
