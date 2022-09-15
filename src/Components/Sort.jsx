import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Sort.css'

export default function Sort(props) {

  const nav = useNavigate();

  const [compName, setCompName] = useState('');


  const showFlights = () => {

    let temp;

    if (compName == 'Lowest capacity') {
      for (let i = 0; i < props.flights.length - 1; i++) {
        for (let j = 0; j < props.flights.length - 1; j++) {
          if (props.flights[j].passList > props.flights[j + 1].passList) {
            temp = props.flights[j];
            props.flights[j] = props.flights[j + 1];
            props.flights[j + 1] = temp;
          }
        }
      }
      return props.flights.map((val, i) => {
        return <div className='flightCss' index={i}><p>Flight No: <span>{val.id}</span></p><p>Airways: <span>{val.flightCompany}</span></p><p>Passengers: <span>{val.passList}</span></p></div>
      })
    }

    if (compName == 'Highest capacity') {
      for (let i = 0; i < props.flights.length - 1; i++) {
        for (let j = 0; j < props.flights.length - 1; j++) {
          if (props.flights[j].passList < props.flights[j + 1].passList) {
            temp = props.flights[j];
            props.flights[j] = props.flights[j + 1];
            props.flights[j + 1] = temp;
          }
        }
      }
      return props.flights.map((val, i) => {
        return <div className='flightCss' index={i}><p>Flight No: <span>{val.id}</span></p><p>Airways: <span>{val.flightCompany}</span></p><p>Passengers: <span>{val.passList}</span></p></div>
      })
    }

    if(compName != '')
    {
        let filtered = props.flights.filter(function (e) {
          return e.flightCompany.match(compName);
      });
      return filtered.map((val, i) => {
        return <div className='flightCss' index={i}><p>Flight No: <span>{val.id}</span></p><p>Airways: <span>{val.flightCompany}</span></p><p>Passengers: <span>{val.passList}</span></p></div>
      })
    }

    else {
      return props.flights.map((val, i) => {
        return <div className='flightCss' index={i}><p>Flight No: <span>{val.id}</span></p><p>Airways: <span>{val.flightCompany}</span></p><p>Passengers: <span>{val.passList}</span></p></div>
      })

    }

  }



  




  return (
    <div className='sortContainer'>

    <div className='sortButtons'>
        <button onClick={() => { nav('/controlpanel') }}>All Flights</button><br />
        <button onClick={() => { nav('/controlpanel/sort') }}>Sort Flights</button><br />
        <button onClick={() => { nav('/controlpanel/add') }}>Add Flight</button><br />
        <button onClick={() => { nav('/controlpanel/delete') }}>Delete Flight</button><br /><br />

        <input className='companyInp' onChange={(e) => { setCompName(e.target.value) }} type="text" placeholder='Company Name...' /><br />
        <button className='sortBC'>Sort By Company Name</button><br /><br />

      <div className='sortCapDiv'>
        <p>Sort By Capacity</p>
        <select className='selectSort' onChange={(e) => { setCompName(e.target.value) }}>
          <option value="Select Option">--Select Option--</option>
          <option value="Lowest capacity">Lowest capacity</option>
          <option value="Highest capacity">Highest capacity</option>
        </select>
      </div>
    </div>


      <div className='flights'>
          {showFlights()}
      </div>

    </div>
  )
}
