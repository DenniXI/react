import './App.css'

function App() {
  function sum(a, b){
    return <h2>{a + b}</h2>
  }

  return (
    <>
      {sum(2,3)}
    </>
  )
}

export default App
