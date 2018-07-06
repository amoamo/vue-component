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