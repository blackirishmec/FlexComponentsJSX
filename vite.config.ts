import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	// Add the React plugin so JSX is transformed automatically
	plugins: [react()],

	// If you used "module-resolver" for "@/..." aliases, replicate that here
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},

	// "build.lib" config tells Vite to produce a library build instead of an app
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.js'), // your library’s entry
			name: 'FlexComponentsJSX', // UMD/global name (if needed)
			fileName: 'index', // output filename (e.g. index.es.js, index.umd.js)
			// By default, Vite will produce ESM and UMD. You can add "formats" array if you want cjs, etc.
		},
		rollupOptions: {
			// If you want React as a peer dependency, mark it external so it's NOT bundled
			// and the consumer provides their own React.
			external: ['react', 'react-dom'],
			output: {
				// Provide a global variable name for UMD (if you produce UMD).
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
