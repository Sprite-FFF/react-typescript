
import * as React from 'react'
// import './index.css'
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
    text: '教师管理',
    key: 'teacher',
    icon: 'user',
    children: []
  },
  {
    text: '学生管理',
    key: 'student',
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
    return <div>daa</div>
  }
}

export default LayoutMain