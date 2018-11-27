<template>
  <simulator>
    <div class="input-wrapper">
      <cy-input placeholder="输入内容" @input="handleChange"></cy-input>
    </div>

    文本输入框
    <div class="input-wrapper">
      <cy-input type="textarea" placeholder="输入内容" @input="handleChange"></cy-input>
    </div>
  </simulator>
</template>
<script>
  export default {
    methods: {
      handleChange(e){
        const {value} = e.target;
        console.log(value)
      }
    }
  }
</script>