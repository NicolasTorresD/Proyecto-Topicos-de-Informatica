import './Inicio.css';
import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";

const Inicio = data =>{
    
    const [products, setProducts] = useState([]);

    const handleGetData = () =>{
    axios.get("http://localhost:3001/products").then(res =>{
        const data = res.data;
            setProducts(data)
    })
    }

    useEffect(() => {
        handleGetData();
    }, []);

    const setId = props =>{
        const id = {props}
        data.onAdd(id)
    }

    return (
        <div>
            <ul>
                {products.map(item => {
                    return(
                        <li key={item._id} className="card">
                            <img className="image" src={item.image} alt={item.title}></img> 
                            <h3>{item.title}</h3>  
                            <p>${item.price} <button onClick={() => setId(item._id)}>agregar al carrito</button></p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Inicio