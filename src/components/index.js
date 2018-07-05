import Button from "./button"

const components = [
  Button,
]

const install = function( Vue ){

  components.map(v => {
    Vue.component(v.name, v)
  })
}

export default { install }