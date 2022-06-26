import './App.css';
import { useCallback, useState } from 'react';
import Input from './Compunents/Input';
import Todolist from './Compunents/Todolist';
import { v4 } from 'uuid';

function App() {
  const [textTodo, setTodo] = useState([])
  const [inputValue, setinputValue] = useState("")


  const callbackInput = useCallback((e) => {
    setinputValue(e.target.value)
  }, [])

  const callSubmit = useCallback((e) => {
    e.preventDefault()
    setTodo([{ id: v4(), name: inputValue, }, ...textTodo])
    setinputValue("")
  }, [inputValue, textTodo])


  return (
    <div className='main'>
      <h3>Nhập Number</h3>
      <form className='form-input'>
        <Input name='add-todo' placeholer='Thêm việc cần làm...'
          value={inputValue} setinput={callbackInput}
        />
        <button onClick={callSubmit} className='btn-input'>Thêm</button>
      </form>
      <Todolist todolist={textTodo} />
    </div>
  );
}


export default App;
