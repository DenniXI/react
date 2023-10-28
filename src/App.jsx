import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import { Welcome } from './Welcome';
import { Counter } from './Counter'
import { ShowGithubUser } from './ShowGithubUser';
import { GitHubUsersList } from './GitHubUserList';

function App() {

  return (
    <div>
      <Routes>
        <Route path='*' element={<h1>Path Not Found</h1>} />
        <Route path='/' element={<Welcome />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/users' element={<GitHubUsersList/>}/>
        <Route path='/users/:username' element={<ShowGithubUser/>}/>
        
          
      </Routes>
      <div>
        <Link to='/'>Welcome</Link> |
        <Link to='/Counter'>Counter</Link> |
        <Link to='users'>Users</Link>
      </div>

    </div>
  );
}

export default App;