#! /bin/bash

if [[ $ENV != "production" ]]
    then
        echo "deploy should only be used for production purposes"
        exit 1
fi

$SCRIPTS_DIR'/install.sh'

# TODO 