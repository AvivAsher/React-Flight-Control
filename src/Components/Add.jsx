import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../CSS/Add.css'

export default function Add(props) {

  const nav = useNavigate();

  const [flightNumber,setFlightNumber] = useState(0);
  const [Company,setCompany] = useState();
  const [passengers,setPassengers] = useState(0);


  const add = (f,c,p) =>{

    if(!f.match(/^[0-9]*$/))
      return alert('Only numbers in Flight Number.');

    if(f.length > 5 || f.length == 0)
      return alert('Flight number should be 5 characters.');
    
    for(let i = 0; i < props.flights.length; i++)
      {
        if(props.flights[i].id == f)
          return alert('Flight number already in the list.');
      }
    
    if(c.match(/^[0-9]*$/) && !c.match(/^[a-zA-Z]*$/))
      return alert('Company name must have at least one alphabet character.');


    if(p == 0)
      return alert('Need to enter at least 1 passenger.');

    if(p < 1 || p > 450)
      return alert('There can be up to 450 passengers.');

    if(!p.match(/^[0-9]*$/))
      return alert('Can only enter numbers.');

    let temp = new Flight(f,c,Number(p));

    props.setFlightsArr([...props.flights,temp]);
    nav('/controlpanel')
  }


  return (
    <div>


        <div style={{textAlign:'center'}}>
          <input className='addInput' onChange={(e)=>{setFlightNumber(e.target.value)}} type="text" placeholder='Flight Number'/><br />

          <input className='addInput' onChange={(e)=>{setCompany(e.target.value)}} type="text" placeholder='Flight Company'/><br />

          <input className='addInput' onChange={(e)=>{setPassengers(e.target.value)}} type="text" placeholder='Passengers' maxLength={3}/><br />

          <button onClick={()=>{add(flightNumber,Company,passengers)}} style={{width:'215px',fontSize:'16px',padding:'5px'}}>Add</button><br /><br />

        </div>

    </div>
  )
}


class Flight {

  constructor(id,flightCompany,passList){
    this.id = id;
    this.flightCompany = flightCompany;
    this.passList = passList;
  }
}