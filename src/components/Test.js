import React, { useEffect, useState} from 'react'
import axios from 'axios'

export default function Test() {
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
      <div>API Test</div>
      {equips.map((equip)=>(
        <li key={equip.eqid}>{equip.name}</li>
      ))}
    </React.Fragment>
  )
}
