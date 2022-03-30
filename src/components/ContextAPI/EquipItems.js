import React from 'react'
import axios from 'axios'

export default function EquipItems({items}) {

  const handleDelete = async (item) => {
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
