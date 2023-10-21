#! /bin/bash

##  Esure ~/.ssh/config is configures with
##  Host SERVER_HOST
##  IdentityFile /path/to/private/key

scp ./docker ${SERVER_USER}@${SERVER_HOST}:/