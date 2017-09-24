module.exports = {
    entry: './public/index.js',
    output: {
      path:__dirname+'/public',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react' , 'stage-0']
          }
        },
        { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, 
        { test: /\.css$/, loader: 'style-loader!css-loader' }
      ]
    }
  }