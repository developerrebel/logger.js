const util = require('util');
const fs = require('fs');
const path = require('path');

module.exports = function(overwrite, logPath) {
	const currentDir = process.cwd();
	if (logPath) {
		if (!fs.existsSync(path.join(currentDir, logPath))) {
			fs.mkdir(path.join(currentDir, logPath), err => {
				if (err) console.error(err);
			});
		}

		if (!fs.existsSync(path.join(currentDir, logPath, '/stdout.log'))) {
			fs.writeFile(path.join(currentDir, logPath, 'stdout.log'), '', err => {
				if (err) console.error(err);
			});
			fs.writeFile(path.join(currentDir, logPath, 'stderr.log'), '', err => {
				if (err) console.error(err);
			});
		}

		log = message =>
			fs.appendFile(path.join(currentDir, logPath, 'stdout.log'), message, err =>
				err ? console.error(err) : {}
			);
		log(
			`----------------------- New Process [${new Date().toLocaleDateString(
				Date.now()
			)} ${new Date().toLocaleTimeString(Date.now())}] -----------------------\n`
		);
	}

	if (overwrite) {
		console.log = message => {
			const logMessage = `[${new Date().toLocaleDateString(Date.now())} ${new Date().toLocaleTimeString(
				Date.now()
			)}]: ${
				typeof message === 'object' ? '\n' + util.inspect(message, false, 2, true) + '\n\n' : message + '\n'
			}`;

			const logMessageStandard = `[${new Date().toLocaleDateString(Date.now())} ${new Date().toLocaleTimeString(
				Date.now()
			)}]: ${typeof message === 'object' ? '\n' + util.inspect(message) + '\n\n' : message + '\n'}`;

			process.stdout.write(logMessage);
			log(logMessageStandard);
		};
	}

	return message => {
		const logMessage = `[${new Date().toLocaleDateString(Date.now())} ${new Date().toLocaleTimeString(
			Date.now()
		)}]: ${typeof message === 'object' ? '\n' + util.inspect(message, false, 2, true) + '\n\n' : message + '\n'}`;

		const logMessageStandard = `[${new Date().toLocaleDateString(Date.now())} ${new Date().toLocaleTimeString(
			Date.now()
		)}]: ${typeof message === 'object' ? '\n' + util.inspect(message) + '\n\n' : message + '\n'}`;

		process.stdout.write(logMessage);
		log(logMessageStandard);
	};
};
