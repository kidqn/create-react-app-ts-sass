#Config TS to CRA 
* Change in paths.js
  appIndexJs: resolveApp('src/index.tsx')
* add ts-loader to webpack config dev
   // Process TS/TSX with Babel
      {
        test: /\.(ts|tsx)$/, 
        include: paths.appSrc,
        loaders: ['babel-loader', 'ts-loader']
      },
  /\.(js|jsx)$/,
  /\.(ts|tsx)$/,
 -  extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', 'ts', 'tsx'],
 * add tsconfig.json
 * add @types/react": "^15.0.39", "@types/react-dom": "^15.5.1"
# Config Sass to CRA
     * //Process Sass/Scss
      {
        test: /\.(scss|sass)$/,
        include: paths.appSrc,
        use: ['style-loader', 'css-loader', 'sass-loader?sourceMap=true']
      },