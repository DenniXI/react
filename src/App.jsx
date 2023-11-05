import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import { Welcome } from './Welcome';
import { Counter } from './Counter'
import { ShowGithubUser } from './ShowGithubUser';
import { GitHubUsersList } from './GitHubUserList';

function App() {

  return (
    <div>
      <div>
        <Link to='/'>Show Welcome</Link> |
        <Link to='/Counter'>Show Counter</Link> |
        <Link to='users'>Show Users</Link>
      </div>

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='users' element={<GitHubUsersList />}>
          <Route index element={<h3>Add a user and select it</h3>}/>
          <Route path=':username' element={<ShowGithubUser />} />
        </Route>
        <Route path='*' element={<h1>Path Not Found</h1>} />


      </Routes>


    </div>
  );
}

export default App;