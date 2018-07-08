import Button from "./button";
import Icon from "./icon";
import Form from "./form";
import FormItem from "./form-item";
import Input from "./input";

const components = [
  Button,
  Icon,
  Form,
  FormItem,
  Input
]

const install = function( Vue ){

  components.map(v => {
    Vue.component(v.name, v)
  })
}

export default { install }