import React from 'react'
import style from './home.scss'
import Card from 'src/components/card/Index'
const Home = () => {
  return (
    <div className={ style.homeContainer }>
      <Card />
    </div>
  )
}

export default Home