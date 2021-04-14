# React hooks with Firebase/auth and IndexedDB 
Simple frontend User Interface to work with React and Firebase authentication. 
Contains a dark mode, a todo list, a authentication, a ui/ux and responsive style. 

Required API key for Firebase authentification.  
$ yarn 

## development 
Start development with Webpack on port 8080  
$ yarn dev 

### show production with Docker 
App run with Docker and Nginx for production tests 
Required code of production  
$ yarn push 

// here yarn kill allows you to read two commands that clean up use with docker  
$ docker container rm -f $(docker ps --filter ancestor=react-demo:latest -q)  
$ docker rmi react-demo 

### Show with nodejs 
Start server express with nodejs for production tests 
Required code of production  
$ yarn start 


## production 
Start production code with webpack in the dist folder  
$ yarn prod 

Deploy on Firebase Hosting  
$ yarn deploy 
