import React, { useContext } from 'react'
import { EquipContext } from './EquipContext';
import axios from 'axios'

export default function EquipItems({items}) {
  const [equips, setEquips] = useContext(EquipContext);

  const handleDelete = async (item) => {
    
    // DB 업데이트
    await axios({
      url: "/equips/" + item.eqid,
      method: 'delete',
    })
    .then(function a(response) { 
      console.log(response) 
    })
    .catch(function (error) {
      console.log(error);
    });

    //state 업데이트
    setEquips(equips.filter(equip => equip.eqid !== item.eqid))
  }

  return(
    items.map((item) => (
      <div style={{border: "1px gray solid"}} key={item.eqid}>
        <p>{item.name} {item.cnt}</p>
        <button onClick={()=>handleDelete(item)}>삭제</button>
      </div>
    ))
  )
}
