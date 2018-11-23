import navs from "./nav.config.json";
import Vue from 'vue'

const load = function(path) {
  return () => import(`./pages${path}.vue`)
};

// const loadDocs = function(path) {
//   return () => import(`./docs/docs.layout.vue`);
// };

const loopPath = function(list) {
  return (function loop(rts) {
    return rts.map(item => {

      const route = {
        path: item.path.slice(1),
        component: Vue.component(`async-${item.path.slice(1)}`, function (resolve, reject) {
          resolve({
            template: `<div><docs-layout path="${item.path}"/></div>`
          })
        }),
        //component: loadDocs(item.path),
        meta: {
          title: item.title
        },
      }

      if (item.list) {
        route.children = loop(item.list);
      }

      return route;
    })
  })(list);
}

const registerRoutes = function() {
  const routes = Object.keys(navs).map(key => {
    const nav = navs[key];
    let route = {
      path: nav.path,
      component: load(nav.path),
      children: []
    }
    if (nav.groups) {
      nav.groups.forEach(group => {
        const list = group.list;

        if (list) {
          route.children = [
            ...route.children,
            ...loopPath(list)
          ];
        }
      })
    }

    return route;
  })
  return routes;
}

const routes = registerRoutes();
export default routes;