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
				validators: {},
				resetFormItem: {},
				invalid: false,
				action: ""
			}
		},

		props: {
			
		},

		// watch: {
		// 	fields(value){
		// 		//console.log(value)
		// 	}
		// },

		methods: {
			resetFields(){
				this.action = "reset";
			},

			submit(){
				this.action = "submit";

				// 提交前验证
				Object.keys(this.fields).forEach(v => {
					// fields和validators的key一样
					this.validators[v]( this.fields[v] )
				})

				this.$emit("submit", {
					invalid: this.invalid,
					forData: this.fields
				})
			}
		}

	}
</script>

