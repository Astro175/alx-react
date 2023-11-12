import logo from '../holberton_logo.jpg';
import './Header.css';
const Header = () => {
    return (  
    <>
        <img src={logo} alt="" className='logo-img'/>
        <h1>School dashboard</h1>
    </> 
    );
}
 
export default Header;