import * as React from 'react'
import * as style from './header.css'

class Header extends React.Component {
    public render () {
        return (
            <header className={ style.header }>
                <div className="container">
                    <div className={ style.left }>
                        <a href="javascript:void(0);">
                            花瓣
                        </a>
                        <ul>
                            <li><a href="javascript:void(0);">首页</a></li>
                            <li><a href="javascript:void(0);">发现</a></li>
                            <li><a href="javascript:void(0);">最新</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
