# vue component

<p >
  <img src="https://img.shields.io/github/stars/hsian/vue-component.git.svg">
</p>

在线文档 [https://hsian.github.io/vc-dist/index.html#/component/button](https://hsian.github.io/vc-dist/index.html#/component/button)

## Install

```shell

# 克隆仓库
git clone https://github.com/hsian/vue-component.git

cd vue-component and npm install

yarn serve or npm run serve

```

## 关于通用组件库 ##

组件开发准备工作

- 组件库的目的（参考element ui）
- 组件库的的UI主题
- 如何编写直观的文档

### 组件库的目的 ###

组件项目通常源于业务方的需求，大部分项目比如商城网站，后台管理系统，各类型站点都会有很多复用的地方，复用的地方抽离出来封装为一个组件，在需要的地方调用。 

- 统一视觉样式和产品体验，
- 方便维护和扩展

### 组件库的的UI主题 ###

使用bootstrap

[https://v4.bootcss.com/](https://v4.bootcss.com/)

### 如何编写直观的文档 ###

文档是团队在组件维护和使用中非常重要的一部分

目前技术人员常用的方式是采用markdown来编写文档，这里需要考虑几个问题：

- 文档站点脚手架（vue-cli）
- markdown中代码高亮 （highlight.js）
- webpack如何编译markdown文件生成文档示（vue-md-loader/vue-markdown-loader）

## 项目文档开发流程 ##

### 项目文档站点初始化 ###

初始化站点 `vue ui` 或 `vue create [project]`

项目目录文件夹

	-assets
		-css
	-components
	-docs
	-pages
	-template
	-App.vue
	-main.js
	-nav.config.json
	-router.config.js

### 文档站点搭建流程 ###

- 新建组件展示页, 包含头部、侧边栏导航、内容显示区域。
- 加载路由插件 vue-router
- 新建路由配置文件
- 根据路由配置文件生成路由和侧边栏，并加载对应的模板组件
- 使用`vue-md-loader`加载markdown文档（参考example）
- 加载样式,引入bootstrap.css 和 highlight.css

**nav.config.json代码片段**

	{
	"component": {
		"name": "组件",
		"path": "/component",
		"groups": [
			{
				"name": "基础组件",
				"list": [
					{
						"path": "/button",
						"title": "组件_button"
					}, 
					{
						"path": "/modal",
						"title": "组件_modal"
					}
				]
			}
		]
	}
	
}

**route.config.js代码片段**

	const load = function(path) {
	  return r => require.ensure([], () =>
	    r(require(`./pages${path}.vue`))
	    );
	};
	
	const loadDocs = function(path) {
	  return r => require.ensure([], () =>
	    r(require(`./components${path}.vue`))
	    );
	};
	
	const registerRoutes = function(){
		const routes = Object.keys(navs).map(key => {
			const nav = navs[key];
			let route = {
				path: nav.path,
				component: load(nav.path),
				children: []
			}
			if(nav.groups){
				nav.groups.forEach(group => {
					const list = group.list;
	
					list.forEach(item => {
						route.children.push({
							path: item.path.slice(1),
							component: loadDocs(item.path),
							meta: item.title
						})
					})
					
				})
			}
			return route;
		})
		return routes;
	}

**遇到的问题：**

- 组件样式添加scoped后页面需要强制刷新
- require.ensure加载组件
- 默认引用的vue不支持构建时的template选项，需要修改vue的引用为`'vue/dist/vue.js'

## 组件开发流程 ##

### 组件插件化 ###

**组件根目录index.js代码片段**
	
	// component/index.js
	import Button from "./button";
	const components = [
		Button
	]
	const UI = {
		install: function(Vue){
			components.map(v => {
				Vue.component(v.name, v)
			})
		}
	};
	export default UI

	// mian.js
	Vue.use(UI);

### button 组件 ###

**属性 props**

- type 	(根据属性 `type` 使用bootstrap的样式， 默认值 `primary`)
- htmlType (值为submit时生效， 提交依赖注入的form.submit方法)

**事件**

- click

---

### icon 组件 ###

加载阿里图标库，

**属性 props**

- type 根据 `type` 加载对应的图标

---

### input 组件 ###

**属性 props**

- type	(定义input输入框和textarea文本输入框两种)
- $attrs

**事件**

- $listeners
- input (该事件设置组件当前的值， 如currentVlue)
- blur	(失去焦点时触发验证，验证函数来自form-item)

---

### form-item 组件 ###

由于template模板无法解析函数， 所以表单的验证逻辑和表单赋值都在form-item中实现

**属性 props**

- name			(表单字段name)
- label			(字段label)
- status		(当前字段的状态)
	- nomarl
	- succes
	- error
- rules
	- required (是否必填)
	- message (错误的提示信息)
	- validator (自定义验证函数）
		- 参数 value[值]
		- {setMessage: this.setErrorMessage}[暴露设置错误信息方法，可以自定义错误信息]

**事件方法**

- validateField (处理rules,抛出error并设置字段值)
- setFormInvalid (设置form-item状态，并根据form注入的依赖设置form的状态)

---

### form 组件

**data**

- fields （所有字段）
- status

---

### 组件遇到的问题 ###

注入多个依赖

解决方法

	inject: {
	   	form: {
	      default: ""
	   	},
		formItem: {
	      default: ""
	   }
	},

表单重置时行为监听，如表单重置，由button开始触发，重置form - form-item - input

解决方法

	//template引用
	<div class="hm-input-wrap" :data-action="action">

	// 子组件监听行为变化
	watch: {
		action: function(){
			if(this.action === "reset"){
				this.currentValue = "";
				this.iconType = "";
				this.iconClass = "";
			}
		}
	}
	













