import React, { useState, useEffect } from 'react'
import EquipAdder from './EquipAdder';
import EquipHeader from './EquipHeader';
import EquipItems from './EquipItems';
import { EquipProvider } from './EquipContext';
import axios from 'axios'

export default function Equip() {
  const [equips, setEquips] = useState([]);

  const fetchUsers = async () => (
    await axios.get(`/equips`)
    .then(res=>{
      console.log(res.data.body)
      setEquips(res.data.body)
    })
  )
  
  useEffect(()=>{
    fetchUsers();
  }, []);

  return (
    <EquipProvider value={[equips, setEquips]}>
      <EquipHeader/>
      <EquipAdder/>
      <br></br>
      <EquipItems items={equips}/>
    </EquipProvider>
  )
}
