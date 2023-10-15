import './App.css'
import { InteractiveWelcome } from './InteractiveWelcome'
import { Login } from './Login'
function handleLog(data){
  console.log(data)
}
function App() {
  

  return (
    <>
      <Login log={handleLog}/>
    </>
  )
}

export default App
