// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  // {
  //   name: '首页',
  //   path: '/app/index',
  //   icon: 'account',
  // },
  // {
  //   name: '归档',
  //   path: '/app/archive',
  //   icon: 'edit',
  // },
  // {
  //   name: '收藏',
  //   path: '/app/collect',
  //   icon: 'favorites-filling',
  // },
  // {
  //   name: '帮助',
  //   path: '/app/about',
  //   icon: 'help',
  // },
];

const asideMenuConfig = [
  // {
  //   name: '更改配置',
  //   path: '/subpage/page1',
  //   icon: 'home',
  // },
  // {
  //   name: '帮助中心',
  //   path: '/help',
  //   icon: 'help',
  // },
  {
    name: '首页',
    path: '/app/index',
    icon: 'list',
  },
  {
    name: '博客',
    path: '/app/blog/publish',
    icon: 'form',
    children: [
      {
        name: '发布博客',
        path: '/app/blog/publish',
      },
    ],
  },
  {
    name: '分类',
    path: '/app/catalog',
    icon: 'detail',
    children: [
      {
        name: '分类列表',
        path: '/app/catalog/list',
      },
      {
        name: '创建分类',
        path: '/app/catalog/new',
      },
    ],
  },
  {
    name: '收藏',
    path: '/app/collect',
    icon: 'individual',
    children: [
      {
        name: '收藏列表',
        path: '/app/collect/list',
      }, {
        name: '添加收藏',
        path: '/app/collect/new',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
