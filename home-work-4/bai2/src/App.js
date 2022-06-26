import './App.css';
import { useState } from 'react';
import ListTodoDiv from './Compunents/ListTodo';

function App() {
  const [todo, setTodo] = useState("")
  const [ListTodo, setListodo] = useState([])
  const [checkcontent, setcheckcontent] = useState(false)

  const ChangeForm = (e) => {
    setTodo(e.target.value)
  }

  const clickForm = (e) => {
    e.preventDefault()
    if (todo.length > 0) {
      setListodo([{ content: todo, }, ...ListTodo])
      console.log(ListTodo)
      setcheckcontent(true)
      setTodo("")
    }

  }

  return (
    <div className='main'>
      <h3>List Todo</h3>
      <form className='form-input'>
        <input className='add-todo' value={todo} onChange={ChangeForm} />
        <button onClick={clickForm} className='btn-input '>Add</button>
      </form>
      <ListTodoDiv content={ListTodo} check={checkcontent} />
    </div>
  );
}


export default App;
