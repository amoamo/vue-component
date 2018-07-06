<template>
	<div class="form-group">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'hm-form',

		provide(){
			return {
				hmForm: this
			}
		},

		data(){
			return {
				fields: {},
				invalid: false
			}
		},

		props: {
			
		},

		watch: {
			fields(value){
				//console.log(value)
			}
		},

		methods: {
			resetFields(){

			},

			validateField(){

			},

			submit(){
				this.$emit("submit", {forData: this.fields})
			}
		}

	}
</script>

