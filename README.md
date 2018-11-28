[![CircleCI](https://circleci.com/gh/dfreilich1/VotesApp/tree/master.svg?style=svg)](https://circleci.com/gh/dfreilich1/VotesApp/tree/master)

# VotesApp
Voting App, created for CMU's 18-658, Software Engineering and Requirements Design

## Getting Started

### Prerequisites

This is a Node.JS/Angular app, using MongoDB. In order to run them, you should have NodeJs/NPM installed, as well as a local MongoDB instance running.

### Installing

Run

```
npm install
```

in the root folder, and in the public/ folder (`npm install && cd public && npm install`). After that, run
```
npm start
```

To start the server.

Go to http://localhost:8080 to access the application.

### Running the tests

Run
```
npm test
```
to run the test suite.

### Developing
- When developing, use `npm run-script dev` to run the dev server (with nodemon and ng build). It will automatically display changes on the server side, and will display front-end changes upon reloading. 
- When building, use `npm build`

## Technology Stack

* [NodeJs](https://nodejs.org/en/)
* [ExpressJs](https://expressjs.com/)
* [Angular](https://angular.io)
* [Typescript](https://www.typescriptlang.org/)

## Helpful Links:
* **Style Guide** – https://ziluzhang.github.io/VotesApp-styleguide/


## Limitations
* The registration function doesn't verify that it is an image, and compare it to the selfie. 
* The settings/language translation functionality isn't implemented yet. 
* The candidates and candidate info is hardcoded, and not accessed from a REST api


## Authors
* **David Freilich** - [LinkedIn](https://www.linkedin.com/in/davidfreilich/)
* **Shikhar Mathur** - [LinkedIn](https://www.linkedin.com/in/shikharmathur/)
* **Serhan Oztekin** - [LinkedIn](https://www.linkedin.com/in/serhan-oztekin-ba5779a0/)
* **Lusong Zhang** - [LinkedIn](https://www.linkedin.com/in/lusong-zhang/)
* **Zilu Zhang** - [LinkedIn](https://www.linkedin.com/in/zilu-zhang/)

## License

This project is licensed under the MIT License.
