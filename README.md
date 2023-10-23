# [CJResume.ca](http://www.cjresume.ca)

## Dependencies & Technologies Used
- Node16.20
- Express
- React
- Docker
- TypeScript
- JavaScript
- HTML
- CSS
- Webpack5
- Nginx
- MongoDB
- MUI
- MySQL // To be implemented

## Start Up
```
$ touch .env
$ source ./scripts/activate.sh
$ cjweb install-deps
$ cjweb build
$ cjweb docker-build
$ cjweb docker-run
```

## Deployment
Ensure ~/.ssh/config has the approriate key to the website
```
$ cjweb docker-publish
$ cjweb deploy
```

## TODO

### Tech Debt
- Update documentation
- Fix warnings when building on webpack
- Declare functions as () => {} where possible for consistency 
- Make options for selecting services and environment for `cjweb` commands
- Add docker to install script
- Allow ssh key to be passed into command for `scp` and `ssh` commands
- Switch calaculator to use regex and not eval()
- Move all .env files together for each environemnt
- Version docker releases so website can be reverted if needed

### Bug Log
- CSS is causing undesired style on firefox
- webkit-scrollbar is still being publically implemented from caculator 
- Content not verically cented in content div
- Copywright popping out when nav bar comes out

### New Features
- Add popout for nav bar on mobile
- User system, resets daily
- Transaction record/wallet
- Add ESLint file
- Use secrets manager to serve env variables
- Implement TLS cert to allow for HTTPS

## Change Log

### October 22nd 2023
- Added navbar conditional rendering
- Fixed 502 when going to pages other than index
- Improved scaling with page sizes
- Made CSS modulized for each import
- Fixed calculator being off screen

### October 20th 2023
- Inital launch
