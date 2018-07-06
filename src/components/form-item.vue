<template>
	<div class="form-group">
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
				validateStatus: ""
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
			
		},

		methods: {
			validateField(value){
				const {rules} = this;
				if( !(typeof rules === 'object' && !Array.isArray(rules)) ){
					this.setFieldValue(value);
					return;
				};

				if(rules.required){
					if(value === ""){
						this.setFormInvalid(false, "error");
						return;
					}
				}

				if(rules.validator){
					const correct = rules.validator(value, {setMessage: this.setErrorMessage});

					if(!correct){
						this.setFormInvalid(false, "error");
						return;
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
				this.hmForm.invalid = value
				this.validateStatus = status;
			}
		},

		created(){
			if(this.rules){
				return this.rules.message || "";
			}
		},
	}
</script>
<style scoped>
	.error-message{
		color:red;
	}
</style>
