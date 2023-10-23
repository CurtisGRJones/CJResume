#! /bin/bash

## TODO add help command

case $1 in
    build)
        ${SCRIPTS_DIR}/build.sh;
        ;;
    deploy)
        ${SCRIPTS_DIR}/deploy.sh;
        ;;
    docker-build)
        ${SCRIPTS_DIR}/docker-build.sh;
        ;;
    prod-connect)
        ${SCRIPTS_DIR}/prod-connect.sh;
        ;;
    prod-health)
        ${SCRIPTS_DIR}/docker-prod-stats.sh;
        ;;
    docker-push)
        ${SCRIPTS_DIR}/docker-push.sh;
        ;;
    dev-docker)
        ${SCRIPTS_DIR}/dev-docker.sh;
        ;;
    dev-start)
        ${SCRIPTS_DIR}/dev-start.sh;
        ;;
    install-deps)
        ${SCRIPTS_DIR}/install-dependencies.sh;
        ;;
    *)
        echo "Unknown command $1"
    ;;
esac