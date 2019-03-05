
import * as React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const menus: object[] = [
  {
    text: '用户管理',
    key: 'user',
    icon: 'user',
    children: [
      {
        text: '权限管理',
        key: '0',
        icon:'user',
      },
    ]
  },
  {
    text: '班级管理',
    key: 'classes',
    icon: 'user',
    children: []
  },
  {
    text: '讲师管理',
    key: 'teacher',
    icon: 'user',
    children: []
  },
  {
    text: '课程管理',
    key: 'lesson',
    icon: 'user',
    children: []
  }
]
class LayoutMain extends React.Component<object, any> {
  constructor(props: Readonly<object>) {
    super(props)
    this.state = {
      menus
    }
  }
  public render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['0']}
              defaultOpenKeys={['user']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                this.state.menus.map((el: any) => {
                  if (el.children.length === 0) {
                    return (
                      <Menu.Item key={el.key}><Icon type={el.icon} /><span>{el.text}</span></Menu.Item>
                    )
                  } else {
                    return (
                      <SubMenu key={el.key} title={<span><Icon type={el.icon} />{el.text}</span>}>
                        {
                          el.children.map((item: any) => {
                            return (
                              <Menu.Item key={item.key}><Icon type={item.icon} /><span>{item.text}</span></Menu.Item>
                            )
                          })
                        }
                      </SubMenu>
                    )
                  }
                })
              }

            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
              Content
        </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutMain