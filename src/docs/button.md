# 按钮

普通按钮

```html
<template>
  <div>
    <hm-button text="submit" @click="handleCLick"></hm-button>
    <hm-button text="warning" type="danger" @click="handleCLick"></hm-button>
    <hm-button text="warning" type="warning" @click="handleCLick"></hm-button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleCLick: function(e){
        console.log(e)
      }
    }
  }
</script>
<style scoped>

</style>
<!-- live-0-0.vue -->
```

### Attributes

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| text | 按钮文字 | string | submit |
| type | 按钮类型(可选 dangder/warning) | string | primary |
| htmlType | 表单提交按钮 | string | submit |

### Methods

| 方法名 | 说明 | 参数 | 
| ---- | ---- | ---- | 
| click | 点击事件 | event对象 |
