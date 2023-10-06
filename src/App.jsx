import './App.css'

function App() {
  function helloName(name){
    return <h1>Hello, {name}!</h1>
  }

  return (
    <>
      {helloName()}
    </>
  )
}

export default App
