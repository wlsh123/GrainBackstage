import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
const menuList = [
  {
    title:'首页',
    key:'/home',
    icon: <AppstoreOutlined />
  },
  {
    title:'商品',
    key:'sub1',
    icon: <MenuUnfoldOutlined />,
    children:[
      {
        title: '品类管理',
        key:'/category',
        icon: <MenuFoldOutlined />
      },
      {
        title: '商品管理',
        key:'/product',
        icon: <PieChartOutlined />
      }
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    icon: <DesktopOutlined />
  }, 
  {
    title: '角色管理',
    key: '/role',
    icon: <ContainerOutlined />
  },
  {
    title: '图形图表',
    key: 'sub2',
    icon: <MenuUnfoldOutlined />,
    children: [
      {
        title: '柱形图',
        key: '/bar',
        icon: <MenuFoldOutlined />
      },
      {
        title: '折线图',
        key: '/line',
        icon: <PieChartOutlined />
      }, 
      {
        title: '饼图',
        key: '/pie',
        icon: <MailOutlined />
      }
    ]
  }
]
export default menuList;