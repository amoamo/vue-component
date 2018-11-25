const hljs = require("highlight.js");

module.exports = {

	baseUrl: process.env.NODE_ENV === 'production'
    ? '/vc-dist/'
    : '/',

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
	              wrapper: "docs-md",
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