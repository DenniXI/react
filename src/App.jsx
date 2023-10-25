import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import { useCurrentLocation } from './UseCurrentLocation';
import { Welcome } from './Welcome';
import { Counter } from './Counter'
import { GitHubUser } from './GitHubUser';
import { ShowGithubUser } from './ShowGithubUser';

function App() {

  return (
    <div>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/Counter' element={<Counter/>}/>
      <Route path='users/:username' element={<ShowGithubUser/>}/>
    </Routes>
    <div>
      <Link to='/'>Welcome</Link>
      <hr />
      <Link to='/Counter'>Counter</Link>
      <hr />
      <Link to='users/:username'>User</Link>
    </div>

    </div>
  );
}

export default App;