import './index.css'
import { Colors } from './Colors'
import { Counter } from './Counter'
import { FocusableInput } from './FocusableInput'
import { InteractiveWelcome } from './InteractiveWelcome'
import { Login } from './Login'
import { TodoList } from './TodoList'
import { Welcome } from './Welcome'
import { AlertClock } from './AlertClock'
import { Container } from './Container'


function App() {


  return (
    <Container title={<h1>"Title of container"</h1>}>

      <h2>Try to Styling</h2>

      <Welcome value={'ospite'} />
      <Counter />
      <Login />
      <AlertClock />
      <Colors items={[
        { id: 1, name: 'yellow' },
        { id: 2, name: 'black' },
        { id: 3, name: 'gray' },
      ]} />
      <TodoList />
    </Container>

  )
}

export default App
