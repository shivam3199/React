import  { useEffect, useState } from 'react'

function useFetchData() {
    const [data, setData] = useState([]);
    const getData = async () => {
        const resonse = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await resonse.json();
        setData(data);
    };

    useEffect(()=>{
        getData()
    }, [])
  return {data}
}

export default useFetchData