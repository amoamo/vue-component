<template>
	<div class="form-group" :data-action="action">
		<slot></slot>
		<div class="error-message" v-if="validateStatus === 'error'">{{errorMessage}}</div>
	</div>
</template>
<script>
	export default {
		name: "hm-form-item",

		provide(){
			return {
				hmFormItem: this
			}
		},

		inject: ['hmForm'],

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
				const {action} = this.hmForm;

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
				const {fields} = this.hmForm;
				this.hmForm.fields = {
					...fields,
					[this.name]: value
				}
			},

			setFormInvalid(value, status){
				this.hmForm.invalid = value;
				this.validateStatus = status;
			},

			resetFormItem(){
				this.validateStatus  = "reset",
				this.statusClass = ""
				this.hmForm.invalid = false
			}
		},

		created(){

			// 初始化字段
			this.setFieldValue("");

			// 添加字段验证器
			this.hmForm.validators = {
				...this.hmForm.validators,
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
