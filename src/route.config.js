import navs from "./nav.config.json";

const load = function(path) {
  return r => require.ensure([], () =>
    r(require(`./pages${path}.vue`))
    );
};

const loadDocs = function(path) {
  return r => require.ensure([], () =>
    r(require(`./docs${path}.md`))
    );
};

const registerRoutes = function(){
	const routes = Object.keys(navs).map(key => {
		const nav = navs[key];
		let route = {
			path: nav.path,
			component: load(nav.path),
			children: []
		}
		if(nav.groups){
			nav.groups.forEach(group => {
				const list = group.list;

				list.forEach(item => {
					route.children.push({
						path: item.path.slice(1),
						component: loadDocs(item.path),
						meta: {
							title: item.title
						}
					})
				})
				
			})
		}
		return route;
	})
	return routes;
}


const routes = registerRoutes();


export default routes;