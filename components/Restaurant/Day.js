import '../../styles/Restaurant/date.scss'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datePlusAction, dateMinusAction } from '../../reducers/restaurantDate'

const Day = () => {
  const dispatch = useDispatch()
  const date = useSelector((state) => state.restaurantDate)

  const onClickPlus = useCallback(() => {
    dispatch(datePlusAction())
  }, [])

  const onClickMinus = useCallback(() => {
    dispatch(dateMinusAction())
  }, [])

  const dayList = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <div className="restaurant-date">
      <AiOutlineLeft className="AiOutline" onClick={onClickMinus} />
      <div className="date">
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 (
        {dayList[date.getDay()]})
      </div>
      <AiOutlineRight className="AiOutline" onClick={onClickPlus} />
    </div>
  )
}

export default Day