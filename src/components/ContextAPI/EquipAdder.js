import React, { useState, useContext } from 'react'
import { EquipContext } from './EquipContext';
import axios from 'axios'

export default function EquipAdder() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [equips, setEquips] = useContext(EquipContext);

  const updateName = (e) => {
    setName(e.target.value);
  }
  const updateCount = (e) => {
    setCount(e.target.value);
  }

  const handleSubmit = async () => {
    
    const newItem = {
      name: name,
      cnt: count,
      eqid: Date.now()
    }
    
    // DB에 업데이트
    await axios({
      url: '/equips',
      method: 'post',
      data: newItem
    })
    .then(function a(response) { 
      console.log(response) 
    })
    .catch(function (error) {
      console.log(error);
    });

    //state 업데이트
    setEquips(prev => [...prev, newItem])
  }

  return (
    <div>
      <input 
        type="text" 
        name="name" 
        placeholder="장비명을 입력하시오"
        onChange={updateName}
        value={name}
      />
      <br></br>
     <input 
        type="number" 
        name="count" 
        placeholder="대출수량을 입력하시오"
        onChange={updateCount}
        value={count}
      />
      <input onClick={handleSubmit} type="submit" value="대출"/>
    </div>
  )
}
