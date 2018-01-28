const path = require('path')
const config = require('./config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

/**
 * 获取相对当前路径的相对路径
 */
exports.joinPath = function(currentDir, subDir) {
  if (arguments.length > 1) {
      return path.join(currentDir, subDir);
  } else {
      return path.join(__dirname, '..', currentDir);
  }
};

/**
* 传入一个asset的子路径，结合config/index.js目录下的assetsSubDirectory配置项，拼合成一个路径进行返回
* 比如，传入的参数是images，config/index.js目录下的assetsSubDirectory配置项为static，那么输出的结果是static/images
* @param _path
*/
exports.assetsPath = function(_path) {
  return path.posix.join('static', _path);
};

exports.cssLoaders = function (options) {
  options = options || {}
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  const generateLoaders = (loader, loaderOptions) => {
    let loaders = options.useVue ? [cssLoader] : []
    if (options.usePostCSS) {
      loaders.push(postcssLoader)
    }
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    if (options.useVue) {
      return ['vue-style-loader'].concat(loaders)
    }
    else {
      return loaders
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
