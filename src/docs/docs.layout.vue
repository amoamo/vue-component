<template>
	<div class="docs">
		<IndexZhCN/>
		<!-- <BasicDemo/> -->
	</div>
</template>
<script>

	let path = ""

	export default {
		created: function(){
			//path = this.$route.path.split("/")[2];
			path = this.path;

		},
		mounted: function(){
			
		},
		props: {
			path: String
		},
		components: {
			IndexZhCN: () => import(`../components${path}/docs/index.zh-CN.md`),
			// BasicDemo: () => import(`../components/${path}/docs/basic.demo.vue`)
		}
	}
</script>
<style scoped>
	.docs{
		display: flex;
		justify-content: space-between;
	}

	.docs div{
		flex:1;
	}
</style>