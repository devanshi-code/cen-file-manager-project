import React from 'react';
import Logo from '../../assets/logo.svg';
// import styles from "./Navbar.module.scss";

const Navbar = () => {
    return ( 
       <div className='div-header' style={{display:'flex',flexDirection:'row'}}>
      <img src={Logo} />
      </div>
    )

}
export default Navbar;