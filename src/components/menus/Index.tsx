import React, { useState } from 'react'
import style from './menus.scss'
interface IMenusItem {
  text: string
}
const MENUS_CONFIG:IMenusItem[] = [
  {
    text: 'HOME'
  },
  {
    text: 'ABOUT'
  },
  {
    text: 'CONTACT'
  },
  {
    text: 'RANDOM'
  },
  {
    text: 'RSS'
  },
  {
    text: 'LINK'
  }
]
const Menus = () => {
  const [ current, setCurrent ] = useState<string>('HOME')
  const handleChangeMenu = (item: IMenusItem) => {
    setCurrent(item.text)
  }
  return (
    <div className={ style.menusContainer }>
      {
        MENUS_CONFIG.map(el => (
          <div 
            key={ el.text }
            onClick={ () => handleChangeMenu(el) }
            className={ current === el.text ? style.active : '' }>{ el.text }</div>
          )
        ) 
      }
    </div>
  )
}

export default Menus
