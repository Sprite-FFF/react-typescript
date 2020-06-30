import React from 'react'
import style from './footer.scss'
const Footer = () => {
  return (
    <div className={ style.footerContainer }>
      <div className={ style.footerTop }>top</div>
      <div className={ style.footerBottom }>bottom</div>
    </div>
  )
}

export default Footer