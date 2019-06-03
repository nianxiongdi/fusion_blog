// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Layout from './components/layout/HeaderLayout';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';


import Archive from './pages/Archive';
import Collect from './pages/Collect';
import About from './pages/About';

// import Page1 from 'pages/page1/index';
// import Page2 from 'pages/page2/index';
// import Help from 'pages/help/index';

const routerConfig = [
  {
    path: '/app/index',
    exact: true,
    layout: Layout,
    component: BlogList,
  },
  {
    path: '/app/archive',
    exact: true,
    layout: Layout,
    component: Archive,
  },
  {
    path: '/app/collect',
    exact: true,
    layout: Layout,
    component: Collect,
  },
  {
    path: '/app/about',
    exact: true,
    layout: Layout,
    component: About,
  },
  {
    path: '/app/blog/detail/:id',
    exact: true,
    layout: Layout,
    component: BlogDetail,
  },
  // {
  //   path: '/subpage/page2',
  //   exact: true,
  //   layout: HeaderAsideFooterLayout,
  //   component: Page2,
  // },
  // {
  //   path: '/help',
  //   exact: true,
  //   component: Help,
  // },
];

export default routerConfig;
