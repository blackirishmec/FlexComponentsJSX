const config = {
	entry: ['src/index.js'],
	project: ['src/*.{js,jsx}'],
	paths: {
		'@/*': ['./src/*'],
	},
};

export default config;
