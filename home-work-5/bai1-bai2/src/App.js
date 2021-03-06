import './App.css';
import { useState, useEffect } from 'react';
import Bai1 from './Compunents/Bai1';


function App() {
  const [dataApi, setDataApi] = useState(null)
  const [checkApi, setCheckApi] = useState(true)
  useEffect(() => {
    document.title = `call api ${checkApi}`
    const fatchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json()
      setDataApi(data)
    }
    fatchData()
    return () => {
      setDataApi(null)
    }
  }, [checkApi])
  // const fatchData = async () => {
  //   const res = await fetch(`https://fakestoreapi.com/products`)
  //   const data = await res.json()
  //   setDataApi(data)
  // }

  return (
    <>
      <Bai1 />
      <h1>Bài 2</h1>
      <button onClick={() => {
        setCheckApi(!checkApi)
      }}>Call api</button>
      {dataApi ? dataApi.map((item, i) => {
        return <h2 key={i}>{item.title}</h2>
      }) : <h2>Loading?</h2>}
    </>
  );
}


export default App;
