<template>
	<div class="docs-md">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: "docs-md",
		created: function(){
			//path = this.path;
		},
		mounted: function(){
		},
		props: {
			path: String
		}
	}
</script>
<style scoped>
	.docs-md h1{
		font-size: 18px;
		font-weight: bold;
	}

	.docs-md h2{
		font-size: 16px;
		font-weight: bold;
	}

	.docs-md h3,.docs-md h4,.docs-md h5{
		font-size: 14px;
		font-weight: bold;
	}

	.docs-md pre{
		background: #232323;
    	color: #e6e1dc;
    	padding:20px;
    	margin-bottom: 50px;
    	border-radius: 6px;
	}

	.docs-md .table-responsive{
		background: #fff;
		margin-bottom: 30px;
	}


	.docs-md .table th{
		border-top:none;
	}
</style>