import './Carrito.css'

const Carrito = props => {

    const cleanCarrito = () =>{
        props.list.length = 0
    }

    return(
        <div>
            <ul>
                {props.list.map(item => {
                    return(
                        <li key={Math.random()} className="box" >
                            <img className="image" src={item.image} alt={item._id}></img>
                            <h4>{item.title} <br /> ${item.price}</h4>                         
                        </li>
                    )
                })}
            </ul>
            <ul className='bottom_box'>
                <h4>Total a pagar = ${props.coste}</h4>
                <button className='payButton' onClick={cleanCarrito}>Pagar</button>
            </ul>
        </div>
    )
}

export default Carrito