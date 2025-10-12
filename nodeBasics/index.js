import chalk from 'chalk';

console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline('with a blue substring') +
	' that becomes green again!'
));