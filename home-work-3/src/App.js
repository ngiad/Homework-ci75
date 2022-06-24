import './App.css';
import { useState } from 'react';
import BaiTwo from './Compunents/baiTwo';
import BaiThree from './Compunents/BaiThree';

const baiOne = [1, 2, 3, 4, 5, 6]

function App() {
  const [NumberState, SetNumberState] = useState(2)
  function onclick() {
    SetNumberState(2)
  }

  return (
    <div className="App">
      <h1>Bài 1</h1>
      {
        baiOne.map((item, index) => {
          return <div key={index} className={`next ${index % NumberState === 0 && `radeus`}`} ></div>
        })
      }
      <button onClick={onclick}>Click ở đây cho bất ngờ </button>

      {/* bai 2 */}
      <h1>Bài 2</h1>
      <BaiTwo />

      {/* bai 3 */}
      <h1>Bài 3</h1>
      <BaiThree />
    </div>
  );
}

export default App;
