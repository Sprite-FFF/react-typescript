import React from 'react'
import style from './meteor.module.scss'

const Meteor = () => {
  const stars = new Array(50).fill(0, 0, 50).map(() => <div key={ Math.random() } className={ style.star } />)
  return <div className={ style.stars }>{ stars }</div>
}

export default Meteor