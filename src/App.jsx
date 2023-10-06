import './App.css'

function App() {
  function helloName(name){
    return <h1>Hello, {name}!</h1>
  }

  return (
    <>
      {helloName(<h1>GinoPaoli</h1>)}
    </>
  )
}

export default App
