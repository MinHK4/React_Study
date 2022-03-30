import React, { useEffect, useState} from 'react'
import axios from 'axios'
import EquipAdder from './EquipAdder';
import EquipHeader from './EquipHeader';

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
  }, [])
  
  return (
    <React.Fragment>
      <EquipHeader/>
      <EquipAdder/>
      <br></br>
      {equips.map((equip)=>(
        <li key={equip.eqid}>{equip.name} {equip.cnt}</li>
      ))}
    </React.Fragment>
  )
}
