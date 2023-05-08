import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import MainDash from './components/mainDash/MainDash';
import {OtherSide} from "./components/otherSide/OtherSide";
import './App.css'

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
          <MainDash/>
          <OtherSide/>
        </div>
    </div>
  );
}

export default App;
