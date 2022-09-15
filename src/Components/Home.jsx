import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../CSS/Home.css'

export default function Home() {

  const nav = useNavigate();

  const [password,setPasswordNumber] = useState();

  const checkID = (pw) =>{

    if(pw == 12345)
      nav('/controlpanel')
    
    else
      return alert('Wrong Password.')

  }

  return (
    <div className='home-container'>
      <div className='home-input-field'>
          <input onChange={(e)=>{setPasswordNumber(e.target.value)}} type="text" placeholder='Password'/><br />
          <button onClick={()=>{checkID(password)}}>Enter</button>
      </div>
    </div>
  )
}
