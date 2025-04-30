import React from 'react'
import './card.css'
import axios from 'axios'
import { useState ,useEffect} from 'react'

const Card = () => {
    const[myData,setMyData]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            console.log(response.data)
            setMyData(response.data)

        })
    },[])
  return (
    <div>
         {myData.map((item)=> (
        <div className='card' key={item.id}>
           
            <img src={item.image} alt={item.title}/>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button type='button'>Add to Cart</button>

        </div>
        ))}
    </div>
  )
}

export default Card