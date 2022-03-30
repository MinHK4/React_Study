import React, { useState } from 'react'
import axios from 'axios'

export default function EquipAdder() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const updateName = (e) => {
    setName(e.target.value);
  }
  const updateCount = (e) => {
    setCount(e.target.value);
  }

  const handleSubmit = async () => {
    await axios({
      url: '/equips',
      method: 'post',
      data: {
        name: name,
        cnt: count,
        eqid: Date.now()
      }
    })
    .then(function a(response) { 
      console.log(response) 
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <form>
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
    </form>
  )
}
