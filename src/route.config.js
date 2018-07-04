import navConfig from './nav.config.json';


const load = function(path) {
  return r => require.ensure([], () =>
    r(require(`./pages/${path}.vue`))
    );

};

const loadDocs = function(path) {
  return r => require.ensure([], () =>
    r(require(`./docs${path}.md`))
    );
};

const registerRoute = (navConfig) => {
  let route = [];
  navConfig.forEach((nav, index) => {
    route.push({
      path: `/component`,
      redirect: `/`,
      component: load('component'),
      children: []
    });

    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav, index);
        });
      });
    } else {
      addRoute(nav, index);
    }

  });
  function addRoute(page, index) {
    const component =  loadDocs(page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.name,
        description: page.description,
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    };

    route[index].children.push(child);
  }

  return route;
};

let route = registerRoute(navConfig);


export default route;
