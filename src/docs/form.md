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
    	<hm-button htmlType="submit"></hm-button>
    </hm-form>
  </div>
</template>
<script>
  export default {
  	methods: {
  		usernameValidator(value, context){
  			context.setMessage("用户名格式错误");
  			return true
  		},

  		handleSubmit(value){
  			console.log(value)
  		}
  	}
  }
</script>
<!-- live-0-0.vue -->
```