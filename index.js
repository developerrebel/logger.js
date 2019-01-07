const util = require('util');
const fs = require('fs');

module.exports = function({ overwrite }) {
	if (overwrite) {
		console.log = message => {
			process.stdout.write(
				`[${new Date().toLocaleDateString(Date.now())} ${new Date().toLocaleTimeString(Date.now())}]: ${
					typeof message === 'object' ? '\n' + util.inspect(message, false, 2, true) + '\n\n' : message + '\n'
				}`
			);
		};
	}

	return message => {
		process.stdout.write(
			`[${new Date().toLocaleDateString(Date.now())} ${new Date().toLocaleTimeString(Date.now())}]: ${
				typeof message === 'object' ? '\n' + util.inspect(message, false, 2, true) + '\n\n' : message + '\n'
			}`
		);
	};
};
