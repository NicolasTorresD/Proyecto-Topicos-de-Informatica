import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    
    function Button(props) {
        return(
            <Link to={props.Page}>
                <button className='button'>{props.Page}</button>
            </Link>
        )
    }
    
    return (
        <ul className='Navbar'>
            <Button Page="Inicio"/>
            <Button Page="Carrito"/>
            <Button Page="Cuenta"/>
        </ul>
    )
}

export default Navbar;