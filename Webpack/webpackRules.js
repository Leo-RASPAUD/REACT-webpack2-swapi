const babelLoaderRule = {
    test: /\.js?$/,
    exclude: [/node_modules/],
    use: [{
        loader: 'babel-loader',
        options: {
            presets: ['env', 'react'],
            plugins: ['babel-plugin-transform-object-rest-spread', 'relay'],
        },
    }],
};

const cssLoaderRule = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};

const fontLoaderRule = {
    test: /\.(ttf|woff|woff2)$/,
    loader: 'file-loader',
};

const eslintLoaderRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
};

export default {
    babelLoaderRule,
    cssLoaderRule,
    fontLoaderRule,
    eslintLoaderRule,
};
