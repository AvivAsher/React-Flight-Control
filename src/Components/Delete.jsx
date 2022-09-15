import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../CSS/Delete.css'

export default function Delete(props) {

  const nav = useNavigate();

  
  let totalPass = 0;

  for(let n = 0; n < props.flights.length; n++)
  {
    totalPass += props.flights[n].passList;
  }


  const [fn,setFn] = useState()


  const del = (f) =>{

    if(f.length > 5 || f.length == 0)
     return alert('Flight number should be up to 5 characters.');
  
    let temp = [...props.flights];
    
    for(let i = 0; i < props.flights.length; i++)
      {
        if(props.flights[i].id == f)
          {
            temp.splice(i, 1);
            props.newFlights([...temp]);
            totalPass = totalPass - props.flights[i].passList;
            return alert(`Flight Deleted! Flights: ${props.flights.length-1}, Passengers in the air: ${totalPass}`)
          }   
      }
      alert('Flight number is not in the list.');

  }

  const noFlights = () =>{
    
    if(props.flights.length == 0)
    {
      return <h3 style={{marginLeft:'50px'}}>No flights at the moment...</h3>
    }
  }


  return (
    <div className='delContainer'>
        
        <div className='delButtons'>
          <button onClick={()=>{nav('/controlpanel')}}>All Flights</button>
          <button onClick={()=>{nav('/controlpanel/sort')}}>Sort Flights</button>
          <button onClick={()=>{nav('/controlpanel/add')}}>Add Flight</button>
          <button onClick={()=>{nav('/controlpanel/delete')}}>Delete Flight</button>


          <div className = "delDiv">
            <input className='deleteInp'onChange={(e)=>{setFn(e.target.value)}} type="text" placeholder='Flight Number'/><br />
              <button className='delBtn' style={{width:'150px'}} onClick={()=>{del(fn)}}>Delete</button>
          </div>
          
        </div>




        <div className='delFlights'>
            {noFlights()}
            {props.flights.map((val,i)=>{
              return <div className='delFlightCss' index = {i}><p>Flight No: <span>{val.id}</span></p><p>Airways: <span>{val.flightCompany}</span></p><p>Passengers: <span>{val.passList}</span></p></div>
            })}

        </div>

    </div>
  )
}
