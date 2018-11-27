<template>
	<div class="form-group" :data-action="action">
		<slot></slot>
		<div class="error-message" v-if="validateStatus === 'error'">{{errorMessage}}</div>
	</div>
</template>
<script>
	export default {
		name: "cy-form-item",

		provide(){
			return {
				cyFormItem: this
			}
		},

		inject: ['cyForm'],

		data(){
			return{
				errorMessage: "",
				validateStatus: "",
				statusClass: ""
			}
		},

		props: {
			name: String,
			label: String,
			required: Boolean,
			status: {
				type: String,
				default: "nomarl" // nomarl, success, error
			},
			rules: Object,
		},

		computed: {
			action(){
				const {action} = this.cyForm;

				if(action === 'reset'){
					this.resetFormItem();
					return "reset"
				}
			}
		},

		methods: {
			validateField(value){
				const {rules} = this;
				if( !(typeof rules === 'object' && !Array.isArray(rules)) ){
					this.setFieldValue(value);
					return;
				}

				if(rules.required){
					if(value === ""){
						this.setErrorMessage(rules.message);
						this.setFormInvalid(false, "error");
					}else{
						this.setFormInvalid(true, "success");
					}
				}

				if(rules.validator){
					const correct = rules.validator(value, {setMessage: this.setErrorMessage});
					if(!correct){
						this.setFormInvalid(false, "error");
					}else{
						this.setFormInvalid(true, "success");
					}
				}

				this.setFieldValue(value);
			},

			setErrorMessage(msg){
				this.errorMessage = msg;
			},

			setFieldValue(value){
				const {fields} = this.cyForm;
				this.cyForm.fields = {
					...fields,
					[this.name]: value
				}
			},

			setFormInvalid(value, status){
				this.cyForm.invalid = value;
				this.validateStatus = status;
			},

			resetFormItem(){
				this.validateStatus  = "reset",
				this.statusClass = ""
				this.cyForm.invalid = false
			}
		},

		created(){

			// 初始化字段
			this.setFieldValue("");

			// 添加字段验证器
			this.cyForm.validators = {
				...this.cyForm.validators,
				[this.name]: this.validateField
			}
		},
	}
</script>
<style scoped>
	.error-message{
		margin-top:5px;
		color:#f56c6c;
		font-size: 13px;
	}
</style>
