<template>
  <simulator>
    <cy-form @submit="handleSubmit">
      <cy-form-item 
        name="username"
        label="用户名"
        :rules="{
          required: true,
          message: '请输入用户名',
          validator: this.usernameValidator
        }">
        <cy-input placeholder="username" ></cy-input>
      </cy-form-item>
      <cy-form-item 
        name="summary"
        label="个人说明">
        <cy-input type="textarea" placeholder="个人说明" ></cy-input>
      </cy-form-item>
      <cy-button htmlType="submit">submit</cy-button>
      <cy-button htmlType="reset" type="">reset</cy-button>
    </cy-form>
  </simulator>
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
