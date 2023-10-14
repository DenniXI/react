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
      <Colors items={[
        {id: 1, name: 'yellow'},
        {id: 2, name: 'black'},
        {id: 3, name: 'gray'},
      ]}/>
    </>
  )
}

export default App
