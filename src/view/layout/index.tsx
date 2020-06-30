
import * as React from 'react'
import Header from 'src/components/header/index'
import Menus from 'src/components/menus/Index'
import Footer from 'src/components/footer/Index'
import style from './layout.scss'
const Layout:React.FC = props => {
  return (
    <div>
      <Header />
      <Menus />
      <div className={ style.main }>
        { props.children }
      </div>
      <Footer />
    </div>
  )
}

export default Layout