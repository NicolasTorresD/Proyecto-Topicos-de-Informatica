import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Disconnected.css"


const Disconnected = props =>{

    const[userList, setList]= useState([])
    
    const[enteredUsername, setUsername]= useState([])
    const[enteredPassword, setPassword]= useState([])

    const[newUsername,setNewUser]=useState("")
    const[newPassword,setNewPass]=useState("")

    const handleGetData = () =>{
        axios.get("http://localhost:3001/users").then(res =>{
            const users = res.data;
                setList(users)
            })
        }

    useEffect(() => {
        handleGetData();
    }, []);

    const changeUsername = event =>{
        setUsername(event.target.value)
    }

    const changePassword = event =>{
        setPassword(event.target.value)
    }


    const LogIn = event =>{
        event.preventDefault()
        userList.map(item =>{
            if(item.name === enteredUsername && item.password === enteredPassword)
            return(
                props.handleEvent(true),
                props.getId(item._id)
            )
            
            return(
                console.log("error")
            )
        })
    }

    const newUser = event =>{
        setNewUser(event.target.value)
    }
    
    const newPass = event =>{ 
        setNewPass(event.target.value)
    }

    const createAccount = event =>{
        event.preventDefault()
        const newAccount = {
            name: newUsername,
            password: newPassword
        }
        axios.post("http://localhost:3001/users", newAccount).then(res=>{
        })
        window.alert("Cuenta creada")
    }

    return(
        <div>
        <form onSubmit={LogIn} className="box1">
            <h2>Iniciar sesion</h2>
            <h3>Usuario</h3>
            <input type="text" value={enteredUsername} onChange={changeUsername}></input>
            <h3>Contraseña</h3>
            <input type="password" value={enteredPassword} onChange={changePassword}></input>
            <br />
            <button type="submit">Iniciar sesion</button>
        </form>
        <form onSubmit={createAccount} className="box2">
            <h2>Crear cuenta nueva</h2>
            <h3>Usuario</h3>
            <input type="text" value={newUsername} onChange={newUser}></input>
            <h3>Contraseña</h3>
            <input type="password" value={newPassword} onChange={newPass}></input>
            <br />
            <button type="submit">Crear Cuenta</button>
        </form>
        </div>
    ) 
}

export default Disconnected