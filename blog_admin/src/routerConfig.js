// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Layout from './components/layout/HeaderAsideFooterLayout';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';


import Blog from './pages/Blog';
import EditBlog from './pages/Blog/EditBlog';
import CatalogList from './pages/CatalogList';
import CatalogNew from './pages/CatalogNew';
import CollectList from './pages/CollectList';
import CollectNew from './pages/CollectNew';


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
    path: '/app/blog/publish',
    exact: true,
    layout: Layout,
    component: Blog,
  },
  {
    path: '/app/blog/edit/:id',
    exact: true,
    layout: Layout,
    component: EditBlog,
  },
  {
    path: '/app/catalog/list',
    exact: true,
    layout: Layout,
    component: CatalogList,
  },
  {
    path: '/app/catalog/new',
    exact: true,
    layout: Layout,
    component: CatalogNew,
  },
  {
    path: '/app/collect/list',
    exact: true,
    layout: Layout,
    component: CollectList,
  },
  {
    path: '/app/collect/new',
    exact: true,
    layout: Layout,
    component: CollectNew,
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
