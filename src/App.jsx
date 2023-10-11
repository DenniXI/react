import './App.css'

function App() {
  const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
  };
  const hello = <strong>Gino</strong>

  return (
    <>
      <Greeting name={hello}/>
    </>
  )
}

export default App
