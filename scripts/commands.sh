#! /bin/bash

## TODO add help command

case $1 in
    build)
        $SCRIPTS_DIR'/build.sh';
        ;;
    deploy)
        $SCRIPTS_DIR'/deploy.sh';
        ;;
    docker-build)
        $SCRIPTS_DIR'/docker-build.sh';
        ;;
    docker-run)
        $SCRIPTS_DIR'/docker-run.sh';
        ;;
    install-deps)
        $SCRIPTS_DIR'/install-dependencies.sh';
        ;;
    *)
        echo "Unknown command $1"
    ;;
esac