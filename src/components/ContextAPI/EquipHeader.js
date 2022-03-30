import React, { useContext } from 'react'
import { EquipContext } from './EquipContext'

export default function EquipHeader() {
  const [equips] = useContext(EquipContext);
  
  return (
    <h1>장비대출현황입니다!! {equips.length}개</h1>
  )
}
