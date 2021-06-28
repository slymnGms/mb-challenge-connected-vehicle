# MB Developers Challenge 
Simple Node js app for Mercedes-Benz Connected-Vehicle

## Table of contents
* [General info](#general-info)
* [Reasons](#reasons)
* [Technologies](#technologies)
* [Setup](#setup)
* [Contact](#contact)
----------
## General info
The project simply use Connected-Vehicle API with OAuth to observe status of vehicles and command to Lock/Unlock doors of vehicle selected. 

It uses axios to call API and OAuth endpoints. Dotenv to read .env variables such as apiUrl and clientSecret. Pug engine to simplfy render side. 

From Index page user select which scope to continue. Then shows lists of vehicles. After selected one of the vehicles, user can view all diagnositcs of vehicle such as Fuel and Tires. 

A simple link choose command to 'LOCK'/'UNLOCK' doors depends on the first value of door status. The command link sends a request to API then redirects to vehicle status itself.

The architecture of project combined of 
* routes
* controllers
* services
* views 

In Dockerfile,  `node:14` image selected 

----------
## Reasons
Node envoirenment give me a chance to keep project simple, easy to read, minimal lines of code, simply dockerizing.

With express library, the writing of project has become more easily. Routing and starting with couple commnds. 

----------	
## Technologies
Project is created with:
* Node version: 14.17.0
* Express version: 4.17.1
* Pug version: 3.0.2
* Axios version: 0.21.1
* Dotenv version: 10.0.0
* Docker version 20.10.5

----------
## Setup
To run this project, install it locally using npm:

```
$ cd ../mb-challenge-connected-vehicle
$ npm install
$ node app.js
```

Or build and run in Docker
```
$ docker build --pull --rm -f "Dockerfile" -t mbchallengeconnectedvehicle:latest "." 
$ docker run --rm -d  -p 8080:8080/tcp mbchallengeconnectedvehicle:latest
```
----------
## Contact
* Github : [slymnGms](https://github.com/slymnGms)
* LinkedIn: [Suleyman GUMUS](www.linkedin.com/in/sulaiman-gms)
* E-mail: [suleyman.gumus@outlook.com.tr](mailto:suleyman_gumus@outlook.com.tr)
