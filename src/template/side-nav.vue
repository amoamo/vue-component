<template>
	<div class="side-nav">
		<ul class="nav">
			<li class="nav-item" v-for="(item, index) in navs" :key="index">
				<h4>{{item.name}}</h4>
				<ul class="sub-nav">
					<li class="sub-nav-item" v-for="(subItem, index) in item.groups[0].list" :key="index">
						<router-link 
							:to="base + subItem.path" 
							exact 
							v-text="subItem.title">
						</router-link>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
	
	export default {
		data() {
			return {
				base: "/component"
			}
			
		},

		props: {
			navs: Array,
		}
	}
</script>
<style scoped>
.nav-item:not(:first-child){
	margin-top: 20px;
}

.sub-nav-item{
	padding-left: 20px;
}

.sub-nav-item a{
	color:#666;
}

.sub-nav-item .router-link-active{
  color:#42b983;
}
</style>