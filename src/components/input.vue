<template>
	<div class="hm-input-wrap" :data-action="action">
		<input 
			:value="currentValue"
			:type="type" 
			class="form-control"
			:class="activeClass" 
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

		<hm-icon :type="iconType" class="icon" :class="iconClass"></hm-icon>
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
				currentValue: "",
				iconType: "",
				iconClass: "",
			}
		},

		props: {
			type: {
				type: String, // input, textarea
				default: "text",
			}
		},

		watch: {
			activeClass(){
				if(this.activeClass === "error"){
					this.iconType = "icon-cuowu";
					this.iconClass = "icon-error";
				}
				if(this.activeClass === "success"){
					this.iconType = "icon-zhengque";
					this.iconClass = "icon-success";
				}
			},

			action: function(){
				if(this.action === "reset"){
					this.currentValue = "";
					this.iconType = "";
					this.iconClass = "";
				}
			}
		},

		computed: {
			isTextarea: function(){
				return this.type === "textarea" ? true : false;
			},

			activeClass: function(){
				const {validateStatus} = this.hmFormItem;

				if(validateStatus === "error"){
					return "error";
				}

				if(validateStatus === "success"){
					return "success";
				}
			},

			action: function(){
				const {action} = this.hmForm;
				if(action === "reset"){
					return "reset";
				}
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
		display: flex;
		align-items: center
	}

	.error{
		border-color:#f56c6c;
	}

	.success{
		border-color:#67c23a;
	}

	.icon{
		width:30px;
		margin-left: 10px;
	}

	.icon-error{
		color:#f56c6c;
	}

	.icon-success{
		color:#67c23a;
	}
</style>
