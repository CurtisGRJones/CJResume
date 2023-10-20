#! /bin/bash

case $1 in
    deploy)
        $SCRIPTS_DIR'/deploy.sh';
        ;;
    install)
        $SCRIPTS_DIR'/install.sh';
        ;;
    install-deps)
        $SCRIPTS_DIR'/install-dependencies.sh';
        ;;
    *)
        echo "Unknown command $1"
    ;;
esac