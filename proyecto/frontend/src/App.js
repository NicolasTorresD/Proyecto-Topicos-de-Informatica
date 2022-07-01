import React from "react";
import  {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Carrito from "./Components/Carrito/Carrito";
import Cuenta from "./Components/Cuenta/Cuenta";
import { useState } from "react";
import Inicio from "./Components/Inicio/Inicio";  
import Navbar from "./Components/Navbar/Navbar";
import axios from "axios";

function App() {

  const [carro, setCarro] = useState([])
  const [cost, setCost] = useState(0)

  const convertId = id =>{
    console.log(id.props)
   axios.get(`http://localhost:3001/products/${id.props}`).then(res =>{
      const newInfo = res.data;
        setCarro(carro.concat(newInfo))
        console.log(carro)
        setCost(cost + newInfo.price)  
        console.log(cost)  
    }) 
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Redirect from="/" to="/Inicio"></Redirect>
        <Switch>
          <Route path="/Inicio">
            <Inicio onAdd={convertId}/>    
          </Route>
          <Route path="/Carrito">
            <Carrito list={carro} coste={cost}/>
          </Route>
          <Route path="/Cuenta">
            <Cuenta/>
          </Route>
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default App;
