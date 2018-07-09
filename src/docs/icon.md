# icon 图标

图标的使用

```html
<template>
  <div class="icon-wrapper">
    <hm-icon type="icon-cuowu" class="icon" @click="handleClick"></hm-icon>
    <hm-icon type="icon-zhengque" class="icon"></hm-icon>
  </div>
</template>
<script>
  export default {
    data () {
      return {
       
      }
    },

    methods: {
      handleClick: function(){
        console.log(123)
      }
    }
  }
</script>
<style>
  .icon-wrapper .icon{
    color: #666;
    font-size: 30px;
    margin:10px;
  }
</style>
<!-- live-0-0.vue -->
```


### Attributes

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| type | icon type | string | none |

