module.exports = {
	logLevel: 'LOG_DEBUG',

	reporters: ['spec'],

	frameworks: [
		'mocha',
		'browserify'
	],

	files: [
		'*.js'
	],

	preprocessors: {
		'*.js': ['browserify']
	},

	browserify: {
		debug: true
	}
}