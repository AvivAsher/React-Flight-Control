import React, {useState} from 'react'
import '../CSS/ControlPage.css'
import {useNavigate} from 'react-router-dom'

export default function ControlPage(props) {

  const nav = useNavigate();

  const noFlights = () =>{
    
    if(props.flights.length == 0)
    {
      return <h3 style={{marginLeft:'50px'}}>No flights at the moment...</h3>
    }
  }
  


  return (
    <div className='container'>
        
        <div className='buttons'>
          <button onClick={()=>{nav('/controlpanel')}}>All Flights</button>
          <button onClick={()=>{nav('/controlpanel/sort')}}>Sort Flights</button>
          <button onClick={()=>{nav('/controlpanel/add')}}>Add Flight</button>
          <button onClick={()=>{nav('/controlpanel/delete')}}>Delete Flight</button>
        </div>

        <div className='flights'>
            <h3>{noFlights()}</h3>
            {props.flights.map((val,i)=>{
              return <div className='flightCss' index = {i}><p>Flight No: <span>{val.id}</span></p><p>Airways: <span>{val.flightCompany}</span></p><p>Passengers: <span>{val.passList}</span></p></div>
            })}
        </div>
        
    </div>
  )
}
