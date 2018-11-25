<template>
	<div class="side-nav">
		<ul class="nav-wrap">
			<li class="nav-item" v-for="(nav, i) in navsData.component.groups" :key="i">
				<h4>{{nav.name}}</h4>
				<ul class="subnav-wrap">
					<li class="subnav-item" v-for="(subnav, j) in nav.list" :key="j">
						<router-link
							:to="navsData.component.path + subnav.path"
							exact
							v-text="subnav.title"
						></router-link>	
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props: {
			navsData: Object
		}
	}
</script>
<style scoped>
.side-nav{
	width:200px;
	box-sizing: border-box;
	padding:50px 0 0 50px;
	display: flex;
	/*justify-content: center;*/
	/*align-items: center;*/
}

.side-nav a{
	display: block;
	font-size: 14px;
	color: #666;
	line-height: 1.8;
}

.nav-item h4{
	font-size: 12px;
	font-weight: normal;
	color:#999;
	margin-bottom:5px;
}

.subnav-wrap{
	margin-bottom: 20px;
}
</style>