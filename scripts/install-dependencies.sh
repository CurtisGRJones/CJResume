#! /bin/bash

# TODO find something better than APT for instalation
# TODO add docker

if ! (which node > /dev/null) 
    then
        echo "Node not found, installing node";
        sudo apt update > /dev/null;
        sudo apt install node > /dev/null;
fi

NODE_VERSION="16.20"

if [[ $(node -v) != v$NODE_VERSION* ]]
    then
        echo "Node installed with version" $(node -v) "expected v$NODE_VERSION.x, changing versions";
        if [[ $ENV == 'production' ]]
            then
                if ! (which n > /dev/null)
                    then
                        echo "N not found, installing n";
                        npm install -g n;
                fi
                echo "N installed";
                N_PREFIX=$HOME/.local n $NODE_VERSION;
            else
                export NVM_DIR=$HOME/.nvm;
                source $NVM_DIR/nvm.sh;
                if ! (which nvm > /dev/null)
                    then
                        echo "Nvm not found, installing nvm";
                        wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 
                        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" 
                fi
                echo "Nvm installed with version" $(nvm -v);
                nvm install $NODE_VERSION > /dev/null;
                nvm alias default $NODE_VERSION  > /dev/null;
                nvm use $NODE_VERSION > /dev/null
        fi
fi

if ! (which yarn > /dev/null)
    then
        echo "Yarn not found, installing yarn";
        npm install --global yarn;
fi

echo "Node installed with version" $(node -v);

echo "Installing node packages for app"
(cd ${PROJECT_DIR}/app && yarn install --frozen-lockfile);

echo "Installing node packages for api"
(cd ${PROJECT_DIR}/api && yarn install --frozen-lockfile);
