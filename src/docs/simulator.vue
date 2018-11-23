<template>
	<div class="simulator">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: "simulator"
	}
</script>
<style scoped>
	.simulator{
		width:375px;
		height:678px;
		overflow: auto;
		background: #f6f6f6;
	}
</style>