import React from 'react'
import axios from 'axios'

export default function EquipItem({item}) {

  const handleDelete = async () => {
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

  return (
    <div style={{border: "1px gray solid"}}>
      <p>{item.name} {item.cnt}</p>
      <button onClick={handleDelete}>삭제</button>
    </div>
  )
}
