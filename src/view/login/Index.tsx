import * as React from 'react'
import Meteor from '../../components/meteor/Index'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { POST } from 'src/service/fetch'
import 'antd/dist/antd.css'
import style from './index.scss'
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
}
interface ILoginInfo {
  username: string,
  password: string
}
const Login:React.FC = () => {
  const onSubmit = (value:ILoginInfo) => {
    POST('user/login', value).then(({code, data}) => {
      if(code === 0) {
        console.log(data)
      }
    })
  }
  return (
    <div className={ style.loginContainer }>
      <Meteor />
      <Form
        className={ style.loginForm }
        hideRequiredMark={ true }
        { ...layout }
        onFinish={ onSubmit }
      >
        <h1>登录</h1>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input size="small" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password size="small" prefix={ <LockOutlined /> } />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login