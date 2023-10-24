import React from 'react';
import {Routes, Route} from "react-router-dom"
import {useCurrentLocation} from './UseCurrentLocation';
import { Welcome } from './Welcome';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Welcome/>}/>
    </Routes>
  );
}

export default App;