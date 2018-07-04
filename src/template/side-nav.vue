<template>
	<div class="side-nav">
		<ul class="nav">
			<li class="nav-item" v-for="item in navs">
				<ul class="sub-nav">
					<li class="sub-nav-item" v-for="subItem in item.groups[0].list">
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
<style>
	
</style>