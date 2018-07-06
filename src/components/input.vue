<template>
	<div class="hm-input-wrap">
		<input 
			:value="currentValue"
			:type="type" 
			class="form-control" 
			v-if="!isTextarea"
			v-bind="$attrs" 
			v-on="$listeners"
			@input="handleInput"
			@blur="handleBlur"
		/>	

		<textarea 
			:value="currentValue"
			class="form-control" 
			v-if="isTextarea"
			v-bind="$attrs" 
			v-on="$listeners"
			@input="handleInput"
			@blur="handleBlur"
		>
		</textarea>	
	</div>
</template>
<script>
	export default {
		name: 'hm-input',

		inject: {
			hmForm: {
				default: ""
			},
			hmFormItem: {
				default: ""
			}
		},

		data(){
			return {
				currentValue: ""
			}
		},

		props: {
			type: {
				type: String, // input, textarea
				default: "text",
			}
		},

		computed: {
			isTextarea: function(){
				return this.type === "textarea" ? true : false;
			}
		},

		methods: {
			handleInput(e){
				const {value} = event.target;
				this.currentValue = value;
				this.$emit("input", e)
			},

			handleBlur(){
				const {validateField} = this.hmFormItem;
				validateField && validateField(this.currentValue)
			}
		}
	}
</script>
<style scoped>
	.hm-input-wrap{
		display:  block;
	}
</style>
