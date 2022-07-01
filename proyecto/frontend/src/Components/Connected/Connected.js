import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import "./Connected.css"

const Connected = ({handleEvent , ID}) =>{
    
    const [info,getInfo] = useState([])
    
    const[password1,set1]=useState("")
    const[password2,set2]=useState("")
    const[confirmPass,setConfirmation]=useState("")
    
    const[productName,setName]=useState("")
    const[productPrice,setPrice]=useState()
    const[productImage,setImage]=useState("")

    const[search,setSearch]=useState("")
    const[newPrice,setNewPrice]=useState()
    const[lista, setObjects]=useState([])
    
    const handleGetUser = () =>{
        axios.get(`http://localhost:3001/users/${ID}`).then(res =>{
            const data = res.data;
                getInfo(data)
        })
        }

    const handleGetProducts = () =>{
        axios.get(`http://localhost:3001/products`).then(res =>{
            const objects = res.data;
                setObjects(objects)
        })
    }    
        
    useEffect(() => {
        handleGetUser();
    },); 

    useEffect(() =>{
        handleGetProducts();
    },)

    const changePass1 = event =>{
        set1(event.target.value)
    }

    const changePass2 = event =>{
        set2(event.target.value)
    }

    const changeConfirm = event =>{
        setConfirmation(event.target.value)    
    }

    const changeName = event =>{
        setName(event.target.value)
    }

    const changePrice = event =>{
        setPrice(event.target.value)
    }

    const changeImage = event =>{
        setImage(event.target.value)
    }

    const changePassword = Password =>{
        const newPass = {
            password:Password
        }
        axios.patch(`http://localhost:3001/users/${ID}`, newPass).then(res => {
        })
        window.alert("Contraseña cambiada")
    }
    
    const confirmPassword = event =>{
        event.preventDefault()
        if(password1 === password2 && confirmPass === info.password)
        return(
            changePassword(password1)
        )
        return(
            window.alert("Error")
        )}
    
    const addProduct = event =>{
        event.preventDefault()
        const product = {
            title: productName,
            price: productPrice,
            image: productImage
        }
        axios.post("http://localhost:3001/products", product).then(res =>{
        })
        window.alert("producto agregado")
    }

    const deleteAccount = () =>{
        axios.delete(`http://localhost:3001/users/${ID}`)
        window.alert("Cuenta eliminada")
    }

    const changeSearch = event =>{
        setSearch(event.target.value)
    }

    const updatePrice = event =>{
        setNewPrice(event.target.value)
    }

    const patchPrice = event =>{
        event.preventDefault()
        const update = {
            price: newPrice
        }
        lista.map(item =>{
            if(item.title === search)
            return(
                axios.patch(`http://localhost:3001/products/${item._id}`, update).then(res =>{
                    window.alert("Cambio realizado")    
            })
            )
            return(
                console.log("error")    
            )
        })

    }

    return(
        <div>
            <h1 className="center">Ajustes Cuenta</h1>
            
            <form onSubmit={confirmPassword} className="formularios">
                <h3>-Cambiar contraseña del usuario</h3>
                <input type="text" value={password1} onChange={changePass1}></input>
                <input type="text" value={password2} onChange={changePass2}></input>
                <h5>*Ingrese la contraseña actual para guardar cambios</h5>
                <input type="text" value={confirmPass} onChange={changeConfirm}></input>    
                <button type="submit">Guardar cambios</button>
            </form>
            
            
            
            <form onSubmit={addProduct} className="formularios">
                <h1>Agregar producto</h1>
               <h4>Nombre</h4>
               <input type="text" value={productName} onChange={changeName}></input>
               <h4>Precio</h4>
               <input type="number" value={productPrice} onChange={changePrice}></input>
               <h4>Imagen (enlace)</h4>
               <input type="text" value={productImage} onChange={changeImage}></input>
               <button type="submit">Agregar producto</button> 
            </form>

            <form onSubmit={patchPrice} className="formularios">
                <h1>Cambiar precio producto</h1>
                <h4>Nombre producto</h4>
                <input type="text" value={search} onChange={changeSearch}></input>
                <h4>Precio actualizado</h4>
                <input type="number" value={newPrice} onChange={updatePrice}></input>
                
                <button type="submit">Realizar cambios</button>
            </form>
            <div className="center">
                <button onClick={e => handleEvent(false)} >Cerrar sesion</button>

                <button onClick={deleteAccount}>Borrar cuenta</button>
            </div>
            
        </div>
        
    )
}

export default Connected