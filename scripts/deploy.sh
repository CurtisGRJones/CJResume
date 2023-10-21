#! /bin/bash

##  Esure ~/.ssh/config is configures with
##  Host SERVER_HOST
##  IdentityFile /path/to/private/key

SERVER=${SERVER_USER}@${SERVER_HOST}

scp -r ${SCRIPTS_DIR}/docker ${SERVER}:~/;
ssh ${SERVER} 'cd ~/docker && docker compose up -d'
