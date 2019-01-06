const util = require('util');
module.exports = overwrite => {
	if (!overwrite) {
	}

	console.log = message => {
		process.stdout.write(
			`[${new Date().toLocaleDateString(Date.now())} ${new Date().toLocaleTimeString(Date.now())}]: ${
				typeof message === 'object' ? '\n' + util.inspect(message, false, 2, true) + '\n\n' : message + '\n'
			}`
		);
	};
};
