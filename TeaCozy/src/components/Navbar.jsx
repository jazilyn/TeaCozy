import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import logo from "../assets/logo.png";
import { Menu, X } from 'lucide-react';
import {useState} from 'react'; 

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    function toggle(){ 
        setIsOpen(!isOpen); 
    }
 
    return (
        <>
   
      <nav className={styles.navbar}>
         <Link to ="/"> <img src={logo} alt="The Tea Cozy Logo" className={styles.logoImage} /> </Link>
        <ul className = {styles.ul}> 
        <li> <Link to="/mission">Mission</Link> </li> 
        <li> <Link to="/tea">Tea of the Month</Link> </li>
        <li> <Link to="/locations">Locations</Link> </li>
        </ul>
      </nav>

        <nav className = {styles.mobile_navbar}>
  <Link to ="/"> <img src={logo} alt="The Tea Cozy Logo" className={styles.logoImage} /> </Link>
           
            {isOpen? <X onClick = {toggle}/> : <Menu onClick = {toggle}/>}
             </nav>
             {isOpen && (<div> 
                <ul className = {styles.mobile_ul}> 
              
                    <li> <Link to="/mission">Mission</Link> </li> 
        <li> <Link to="/tea">Tea of the Month</Link> </li>
        <li> <Link to="/locations">Locations</Link> </li>
                 </ul>
            </div>)} 
            </>
   
  );
}