## Node-Logger

The simple, easy to use, and fast way to log things to a file and with timestamps to the console.

### Setup

```bash
$ npm install node-logger
```

or

```bash
$ yarn add node-logger
```

There are three options with this package. One is to overwrite the normal console.log(). To do that all you have to do is this:

```javascript
await require('node-logger')(true);

console.log('Test'); // [date time]: Test
```

To not overwrite the normal console.log() you can leave that option empty or false

```javascript
const logger = await require('node-logger')();

logger('Test'); // [date time]: Test
```

Now one of the cooler features is the option to log the console to a file in real time. It is very easy to setup this option.

```javascript
await require('node-logger')(true, '/path/to/logs');
```

Again this works with or without the override. The path to the logs is the path from your base project directory to where you want your logs to be. If the folders do not exist they will be created automatically.

### Pictures

Console:

![Console](https://i.sdfx.ga/Jqn9X0aTKB.png)
Log File:

![logFile](https://i.sdfx.ga/jQN9CCC9w6.png)
