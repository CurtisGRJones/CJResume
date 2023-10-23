#! /bin/bash

# TODO make this use and load .env files for later
# TODO start mongodb and mysql
npx concurrently \
    -n api-watch,api,app \
    "cd ${PROJECT_DIR}/api && yarn watch" \
    "cd ${PROJECT_DIR}/api && APP_URL=\"http://localhost:3000\" yarn start-nodemon" \
    "cd ${PROJECT_DIR}/app && REACT_APP_API_HOST=\"http://localhost:8000\" yarn dev"