import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Lists = () => {
    
        const [data,setData]=useState([]);
        useEffect(()=>{
            const fetchData=async()=>{
                const result=await axios.get('/api/data');
                setData(result.data);
            }
            fetchData();
        },[]);
    
  return (
    <div>
      {data.map(item=>(
        <div key={item.id}>
            
        </div>
      ))}
    </div>
  )
}

export default Lists
