import React, { useEffect} from 'react'
import axios from 'axios'

export default function Test() {
  
  useEffect(()=>{
    axios.get(`/users`)
    .then(res=>{
      console.log(res)
    })
  }, [])
  
  return (
    <div>API Test</div>
  )
}
