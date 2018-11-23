# form 表单

普通表单

```html
<template>
  <div class="form-wrapper">
    <hm-form @submit="handleSubmit">
    	<hm-form-item 
    		name="username"
    		label="用户名"
    		:rules="{
	    		required: true,
	    		message: '请输入用户名',
	    		validator: this.usernameValidator
    		}">
    		<hm-input placeholder="username" ></hm-input>
    	</hm-form-item>
    	<hm-form-item 
    		name="summary"
    		label="个人说明">
    		<hm-input type="textarea" placeholder="个人说明" ></hm-input>
    	</hm-form-item>
    	<hm-button htmlType="submit">submit</hm-button>
      <hm-button htmlType="reset" type="">reset</hm-button>
    </hm-form>
  </div>
</template>
<script>
  export default {
  	methods: {
  		usernameValidator(value, context){

        if(value.length >= 3 && value.length <=6){
          return true
        }

  			context.setMessage("请输入3 - 6 位用户名");
        return false
  		},

  		handleSubmit(value){
  			console.log(value)
  		}
  	}
  }
</script>
<!-- live-0-0.vue -->
```

# form-item

#### Attributes

表单字段声明

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| name | 表单字段名 | string |  |
| label | 表单字段label | string |  |
| status | 字段状态，关联显示样式,可选值 nomarl、success、error | string | nomarl |
| rules | 字段验证规则, 参考下面rules说明 | Object |  |


#### rules

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| required | 是否必填 | Boolean | false |
| message | 默认错误提示信息 | string |  |
| validator | 自定义验证函数， 参数(value, { setMessage[function] }) | function |  |

# form

#### Methods

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- | ------ |
| submit | 表单提交事件 | formData |
