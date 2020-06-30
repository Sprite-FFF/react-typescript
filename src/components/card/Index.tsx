import React from 'react'
import style from './card.scss'

const Card = () => {
  return (
    <div className={ style.cardView}>
      <div className={ style.title }>
      《拉赫玛尼诺夫第二钢琴协奏曲》
      </div>
      <div className={ style.picture }>
        <img src={ require('../../assets/images/8.jpg') } alt=""/>
      </div>
      <p className={ style.content }>
      首推《拉赫玛尼诺夫第二钢琴协奏曲》，被认为是二十世纪最伟大的钢琴协奏曲之一，除了美无其他形容词。能够演绎好拉二的钢琴家也不在少数。第一乐章和第二乐章个人偏好郎朗的版本（郎朗的演奏确实备受争议，但本人听了多个版本后仍较为偏好郎朗的演奏），第三乐章里赫特演奏的属佳，耐人寻味。
      </p>
    </div>
  )
}

export default Card