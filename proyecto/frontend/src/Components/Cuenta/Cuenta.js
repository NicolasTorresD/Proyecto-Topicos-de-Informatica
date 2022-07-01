import React from "react";
import { useState } from "react";
import Connected from "../Connected/Connected";
import Disconnected from "../Disconnected/Disconnected";

const Cuenta = () => {
    
    const[conected, setConection] = useState(false)
    const [id,setId] = useState("")

    if (!conected) 
    return <Disconnected handleEvent={setConection} getId={setId}/>
    
    return <Connected handleEvent={setConection} ID={id}/>
}

export default Cuenta 