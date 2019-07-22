[ci.tests-master-badge]: https://circleci.com/gh/eugene-matvejev/node-battleship/tree/master.svg?style=svg
[ci.tests-master]: https://circleci.com/gh/eugene-matvejev/node-battleship/tree/master
[ci.coverage-master-badge]: https://codecov.io/gh/eugene-matvejev/node-battleship/branch/master/graph/badge.svg
[ci.coverage-master]: https://codecov.io/gh/eugene-matvejev/node-battleship/branch/master

[ci.tests-heroku-badge]: https://circleci.com/gh/eugene-matvejev/node-battleship/tree/heroku.svg?style=svg
[ci.tests-heroku]: https://circleci.com/gh/eugene-matvejev/node-battleship/tree/heroku
[ci.coverage-heroku-badge]: https://codecov.io/gh/eugene-matvejev/node-battleship/branch/heroku/graph/badge.svg
[ci.coverage-heroku]: https://codecov.io/gh/eugene-matvejev/node-battleship/branch/heroku

|               | master                                                        | heroku
|---            |---                                                            | ---
| __tests__     | [![tests][ci.tests-master-badge]][ci.tests-master]            | [![tests][ci.tests-heroku-badge]][ci.tests-heroku]
| __coverage__  | [![coverage][ci.coverage-master-badge]][ci.coverage-master]   | [![coverage][ci.coverage-heroku-badge]][ci.coverage-heroku]

# battleship GraphQL backend

##### THIS IS SPARE TIME PROJECT, WORK IN PROGRESS! [turing grow is not spare time, I would suggest saying is a ReadMe Template for turing grow projects ]

### software requirements

if you're using `make` commands, __[docker](https://docs.docker.com/install/)__ and __[docker-compose](https://docs.docker.com/compose/install/)__ are required, and local __[node.js](https://nodejs.org/)__ with __[npm](https://www.npmjs.com/)__ are optional [this can be confusing for those unfamiliar with makefiles, as makefile is just a script builder and all the software mention is required regardless. I suggest you get rid of the sentance and just keep the software and technologies used. ]
* [node.js](https://nodejs.org/) v10+
* [npm](https://www.npmjs.com/) v6+ or [yarn](https://yarnpkg.com/)
* __optional__ [makefile](https://en.wikipedia.org/wiki/Makefile) comes out of the box in *unix* enviroments
* __optional__ [docker](https://www.docker.com/) v18.09+
* __optional__ [sqlite3](https://www.sqlite.org/index.html) v3+ *for 'integration' tests only*

### used technologies

* [jest](https://facebook.github.io/jest/)
* [graphql](https://graphql.org/)
* [sequlize](http://docs.sequelizejs.com/)
* [apollo server](https://www.apollographql.com/docs/apollo-server/)
* [express.js](https://expressjs.com/)
* [babel](https://babeljs.io/)

### used services

* [circle ci](https://circleci.com/dashboard)
* [codecov](https://codecov.io/)
* [code climate](https://codeclimate.com/)
* [snyk](https://snyk.io/)
* [heroku](https://www.heroku.com/)

### how to install

* with `make` commands no steps additional required, otherwise you need execute `$ npm i`

### how to run tests

* `$ make test` or `$ npm test`
  * __optional__ [ 'jest' CLI params](https://facebook.github.io/jest/docs/en/cli.html) some examples:
    * to generate coverage report, example: `$ npm test -- --coverage`, which will be located in __./coverage__ directory
    * to execute tests __only__ in specific file, example: `$ npm test src/graphql/user.test.js`

### how to run in 'development' mode

* `$ make` or `$ npm start`

### how to run in 'production' mode

* `$ make serve`, there is no *npm only* analogue [as make is declared optional, idealy a bash script should be added here]
* if you need __only__ [to] generate static assets
  * `$ make build` or `$ npm run build` - generated assets will be located in __./build__ directory

### gitflow

* master -> most upto date __production__ version
* __proxy branch__ heroku -> master is not deployed to heroku with every push, because of limiations of 'free account'
* other branches -> 'feature branches' get merged into master
CI build is mandatory check for every PR into master/heroku branches

### used environment variables

| variable      | default value | used as
|---            |---            |---
| PORT          | 8081          | number
| DB_HOSTNAME   | 127.0.0.1     | string
| DB_USERNAME   | root          | string
| DB_PASSWORD   | password      | string
| DB_PORT       | 3306          | number
| DB_NAME       | battleship    | string
| DB_DIALECT    | mysql         | string
| SECRET_KEY    | local.key     | string

### supported databases
| database      | version
|---            |---
| MySQL         | *5.7 tested*, using [mysql2](https://www.npmjs.com/package/mysql2)
| PostgreSQL    | *11 tested*, using [pg](https://www.npmjs.com/package/pg)
| SQLite        | *4.0.9 tested*, using [sqlite3](https://www.npmjs.com/package/sqlite3)
