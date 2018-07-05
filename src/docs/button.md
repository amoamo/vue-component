# 按钮

普通按钮

```html
<template>
  <HmButton text="submit" @click="handleCLick"></HmButton>
  <HmButton text="warning" type="danger" @click="handleCLick"></HmButton>
  <HmButton text="warning" type="warning" @click="handleCLick"></HmButton>
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

