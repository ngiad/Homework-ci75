import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [dataApi, setDataApi] = useState(null)
  useEffect(() => {
    document.title = "call api"
  })
  const fatchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    setDataApi(data)
  }

  return (
    <div>
      <h1>Bài 2</h1>
      <button onClick={fatchData}>Call api</button>
      {dataApi ? dataApi.map((item, i) => {
        return <h2 key={i}>{item.title}</h2>
      }) : <h2>Loading?</h2>}
    </div>
  );
}


export default App;
