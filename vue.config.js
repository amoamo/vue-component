
const striptags = require('./util/strip-tags');
const slugify = require('transliteration').slugify;
const md = require('markdown-it')();

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

function wrap(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code v-pre class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
}

module.exports = {

	configureWebpack: (config) => {
		config.resolve.alias = {
      		'vue$': 'vue/dist/vue.js'
 		};


		config.module.rules.push({
	        test: /\.md$/,
	        loaders: [
	          'vue-loader',
	          {
	            loader: 'vue-md-loader',
	            options: {
	              preProcess (source) {
	                // console.log('pre', source)
	                return source
	              },
	              afterProcess (result) {
	                // console.log('after', result)
	                return result
	              },
	              afterProcessLiveTemplate (template) {
	                return `<div class="live-wrapper">${template}</div>`
	              },
	              rules: {
	                'table_open': () => '<div class="table-responsive"><table class="table">',
	                'table_close': () => '</table></div>'
	              }
	            }
	          }
	        ]
	      })
	}

}