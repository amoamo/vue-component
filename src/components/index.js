import Button from "./button/button.vue";
import Icon from "./icon/icon.vue";
import Form from "./form/form.vue";
import FormItem from "./form/form-item.vue";
import Input from "./input/input.vue";

const components = [
  Button,
  Icon,
  Form,
  FormItem,
  Input
]

const install = function(Vue) {
  components.map(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install
}