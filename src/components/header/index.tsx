import * as React from 'react'
import * as style from './header.scss'
import { TwitterOutlined, WeiboOutlined,GithubOutlined, InstagramOutlined } from '@ant-design/icons'

const Header = () => {
    return (
        <div className={ style.header }>
            <div className={ style.headerLeft }>
                <TwitterOutlined />
                <WeiboOutlined />
                <GithubOutlined />
                <InstagramOutlined />
            </div>
            <div className={ style.headerCenter }>Demi</div>
            <div className={ style.headerRight }>
                right
            </div>
        </div>
    )
}

export default Header
