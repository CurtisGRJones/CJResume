#! /bin/bash

export SCRIPTS_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

alias cjweb=$SCRIPTS_DIR'/commands.sh'

echo "Activation complete, you now have access to cjweb commands such as 'cjweb help'"

