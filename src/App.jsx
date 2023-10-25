import React from 'react';
import {Routes, Route} from "react-router-dom"
import {useCurrentLocation} from './UseCurrentLocation';
import { Welcome } from './Welcome';
import {Counter} from './Counter'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/Counter' element={<Counter/>}/>
    </Routes>
  );
}

export default App;