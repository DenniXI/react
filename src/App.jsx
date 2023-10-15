import './index.css'
import { Colors } from './Colors'
import { Counter } from './Counter'
import { FocusableInput } from './FocusableInput'
import { InteractiveWelcome } from './InteractiveWelcome'
import { Login } from './Login'
import { TodoList } from './TodoList'
import { Welcome } from './Welcome'


function App() {
  

  return (
    <>
      <h2>Try to Styling</h2>
      <Welcome value={'ospite'}/>
      <Counter/>
      <Colors items={[
        {id: 1, name: 'yellow'},
        {id: 2, name: 'black'},
        {id: 3, name: 'gray'},
      ]}/>
      <TodoList/>
    </>
  )
}

export default App
