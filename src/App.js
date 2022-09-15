import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Title from './Components/Title';
import {useState} from 'react'
import Home from './Components/Home';
import ControlPage from './Components/ControlPage';
import Add from './Components/Add';
import Delete from './Components/Delete';
import Sort from './Components/Sort';


function App() {

  const [flightsArr,setFlightsArr] = useState([]);


  return (
    <div className="App">
      <Title/>

      <BrowserRouter>

          <Routes>

              <Route path='/' element = {<Home/>}/>

              <Route path='/controlpanel' element = {<ControlPage flights = {flightsArr}/>}/>
              
              <Route path='/controlpanel/add' element = {<Add setFlightsArr = {setFlightsArr} flights = {flightsArr}/>}/>
              <Route path='/controlpanel/delete' element = {<Delete flights = {flightsArr} newFlights = {setFlightsArr}/>}/>
              <Route path='/controlpanel/sort' element = {<Sort flights = {flightsArr}/>}/>

          </Routes>

      </BrowserRouter>


    
    </div>
  );
}

export default App;

