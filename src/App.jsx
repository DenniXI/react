import './App.css'
import { Colors } from './Colors'
import { Counter } from './Counter'
import { FocusableInput } from './FocusableInput'
import { InteractiveWelcome } from './InteractiveWelcome'
import { Login } from './Login'


function App() {
  

  return (
    <>
      <Counter/>
      <Colors color={['giallo', 'arancione', 'verde', 'rosso']}/>
    </>
  )
}

export default App
