const path = require('path');

const fs                   = require('fs');
const ESLintWebpackPlugin  = require('eslint-webpack-plugin');
const TerserPlugin         = require('terser-webpack-plugin');
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin }   = require('purgecss-webpack-plugin');
const glob                 = require('glob');

module.exports = ( env, argv ) => {
	const isProduction = argv.mode === 'production';

	function checkPathExistence (paths) {
		const $return = paths.filter(p => fs.existsSync(p));
		return $return;
	}

	let allPaths;
	if ( isProduction ) {
		const pathsToCheck = [
			...glob.sync(path.posix.join(path.resolve(__dirname).replace(/\\/g, '/'), 'inc/blocks/**/src/edit.js')),
			...glob.sync(path.posix.join(path.resolve(__dirname).replace(/\\/g, '/'), 'parts/**/*.html')),
			...glob.sync(path.posix.join(path.resolve(__dirname).replace(/\\/g, '/'), 'pattern/**/*.php')),
			...glob.sync(path.posix.join(path.resolve(__dirname).replace(/\\/g, '/'), 'templates/**/*.html')),
			...glob.sync(path.posix.join(path.resolve(__dirname).replace(/\\/g, '/'), 'assets/js/**/*.js'))
		];
		
		allPaths = pathsToCheck.flat();
	}

	return {
		entry: getEntries(
			[ path.resolve(__dirname, 'assets') ],
			[ '.js', '.scss' ]
		),
		output: {
			filename: '[name].bundle.js',
			chunkFilename: 'assets/js/module/[name].bundle.js',
			path: path.resolve(__dirname, 'dist'),
			clean: true,
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|vendor)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/preset-env' ],
						},
					},
				},
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					],
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader'
					],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					type: 'asset/resource',
					generator: {
						filename: 'fonts-fontello/[name][ext]',
					},
				},
			],
		},
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					extractComments: false,
					terserOptions: {
						warnings: false,
						parse: {},
						compress: {
							drop_console: true,
						},
						mangle: true,
						module: false,
						output: {
							comments: false,
							beautify: false,
						},
					},
				}),
				new CssMinimizerPlugin(),
			],
			splitChunks: {
				chunks: 'all',
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
			runtimeChunk: 'single',
		},
		mode: argv.mode,
		// devtool: 'source-map',
		resolve: {
			modules: [
				path.resolve(__dirname, 'assets'),
				'node_modules',
			],
			extensions: [ '.js', '.scss', '.css' ],
		},
		externals: {
			jquery: 'jQuery',
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].bundle.css',
			}),
			new ESLintWebpackPlugin(),
			...( isProduction ? [ new PurgeCSSPlugin({
				paths: checkPathExistence(allPaths),
				safelist: {
					standard: [ /^is/ ],
					greedy: [ /^wp/, /^acf/, /^custom/, /^icon/, /^page/, /^splide/, /^footer/, /^amp/, /^qt-/, /^clipped/, /^rank-/, /^single-/, /^blog-/ ],
				},
			} ) ] : [] ),
		],
	}
};

function getEntries (directories, extensions) {
	const entry              = { js: {}, css: {} };
	const excludeDirectories = [ 'inc', 'css/admin/components', 'css/admin/layout', 'css/components', 'css/layout', 'css/variable' ];
	const excludeFiles       = [ 'util' ];
	directories.forEach((directory) => {
		extensions.forEach((extension) => {
			const directoryPath = path.posix.join(directory.replace(/\\/g, '/'), `**/*${extension}`);
			const files         = glob.sync(directoryPath);

			if ('.scss' === extension) {
				glob.sync(path.posix.join(path.resolve(__dirname, 'assets/css/library').replace(/\\/g, '/'), '**/*.css')).forEach((cssFile) => {
					files.push(cssFile);
				});
				files.push(path.resolve(__dirname, 'assets/fonts/fontello/css/fontello.css'));
			}
			files.forEach((file) => {
				const relativePath = path.relative(directory, file);
				const entryName    = path.join(path.basename(directory), relativePath.replace(new RegExp(`${ extension }|\\.css$`, 'g'), ''));

				if (excludeFiles.some(excludFile => entryName.replace(/\\/g, '/').includes(excludFile))) {
					return; // Exclude file
				}

				const dirName = path.dirname(relativePath);
				if (excludeDirectories.some(excludeDir => dirName.replace(/\\/g, '/').startsWith(excludeDir))) {
					return; // Exclude directory
				}

				if (extension === '.js') {
					entry.js[ entryName ] = file;
				} else {
					entry.css[ entryName ] = file;
				}
			});
		});
	});

	return { ...entry.js, ...entry.css };
}
