import React from 'react';
import {Routes, Route} from "react-router-dom"
import {useCurrentLocation} from './UseCurrentLocation';
import { Welcome } from './Welcome';
import {Counter} from './Counter'
import { GitHubUser } from './GitHubUser';
import { ShowGithubUser } from './ShowGithubUser';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/Counter' element={<Counter/>}/>
      <Route path='users/:username' element={<ShowGithubUser/>}/>
    </Routes>
  );
}

export default App;