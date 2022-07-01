import './App.css';
import { useState, useEffect } from 'react';
// import Bai1 from './Compunents/Bai1';


function App() {
  const [data, setData] = useState("")
  useEffect(() => {
    document.title = data
  })
  // const fatchData = async () => {
  //   const res = await fetch(`https://fakestoreapi.com/products`)
  //   const data = await res.json()
  //   setDataApi(data)
  // }

  return (
    <>
      <input value={data} onChange={
        (e) => {
          setData(e.target.value)
          console.log(data)
        }
      }></input>
      <div className='text'>{data.length}</div>
    </>
  );
}


export default App;
