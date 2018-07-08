# input 输入框

普通输入框

```html
<template>
  <div class="input-wrapper">
    <hm-input placeholder="输入内容" @input="handleChange"></hm-input>
  </div>
</template>
<script>
  export default {
    methods: {
      handleChange(e){
        console.log(e)
      }
    }
  }
</script>
<!-- live-0-0.vue -->
```

文本输入框

```html
<template>
  <div class="input-wrapper">
    <hm-input type="textarea" placeholder="输入内容" @input="handleChange"></hm-input>
  </div>
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
<!-- live-0-1.vue -->
```

### Attributes

同原生浏览器input支持的属性

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| type | 输入框类型 input/textarea | string | input |

### Methods

同原生浏览器input支持的事件