#! /bin/bash

export SCRIPTS_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
export PROJECT_DIR=$(dirname $SCRIPTS_DIR)

alias cjweb=$SCRIPTS_DIR'/commands.sh'
alias proj-root='cd '${PROJECT_DIR}

echo "Activation complete, you now have access to cjweb commands such as 'cjweb help'"

