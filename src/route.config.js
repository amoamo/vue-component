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

      const routePath = item.path;

      const route = {
        path: routePath.slice(1),
        component: Vue.component(`docs-layout-parent`, function (resolve, reject) {
          resolve({
            data: () => ({routePath: routePath}),
            template: `
              <docs-layout :path="routePath">
                <IndexZhCN/>
                <BasicDemo/>
              </docs-layout>
            `,
            components: {
              IndexZhCN: () => import(`./components${routePath}/docs/index.zh-CN.md`),
              BasicDemo: () => import(`./components${routePath}/docs/basic.demo.vue`)
            }
          })
        }),

        // 根据路径加载组件下的md文件
        // component: loadDocs(item.path),

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