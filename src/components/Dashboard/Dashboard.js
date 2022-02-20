import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import Rectangle1 from "../../assets/Rectangle1.svg";
import Rectangle2 from "../../assets/Rectangle2.svg";
// import DB from "../../assets/dbimage.svg";
import classes from './Dashboard.module.scss';
const Dashboard = () => {
  const welstyle={
    position:'absolute',
    width:'580px',
    height:'300px',
    left: '50px',
    top: '150px',

    fontfamily:'DM Sans',
    fontstyle: 'normal',
    fontweight:'500' ,
    fontsize:'800px',
    lineheight:'160%',
    letterspacing:'-0.02em',
    color:'#566474',
  }; 
  const center={
    textalign:'center',
    right:'300px',
    top:'1900px',
    fontsize:'1600px',
  };
  return (
    <>
    <div className={classes.DboardContainer}>
             <div className={classes.DboardNavbar}>
            <Navbar/>
            </div> 
    <div className={classes.DboardSection}>
            <div className={classes.DboardLeftSection} >
              <img className="rectangle1" src={Rectangle1} alt="rectangle"/>
              <div className={classes.DboardLeft}>
              <h1 style={{color:" #1E272E;",  position:'absolute',width:'681px',height:'424px',left:'-30px',top:'-10px',fontfamily:"DM Sans",fontstyle:"normal",fontweight:"bold",fontsize:"1500px",lineheight:"400px",letterspacing: "-0.01em"}}>Welcome to your <br/>Dashboard</h1> 
              <h2 style={welstyle}>This is the homepage of your<br/> &nbsp;file explorer,set your pin and start<br/></h2>
              {/* <img src={DB} style={{position:'absolute',textalign:'bottom',left:'119px',top:'340px'}}/> */}
            </div>
           </div> 
           <div className={classes.DboardRightSection}>
           <img className="rectangle2" src={Rectangle2} alt="rectangle"/>
           <div className={classes.DboardRight}>
            <p style={center}><b>Set your account pin</b></p>
             <br/>
             <div className="below">
             <input type="text" id="pin" name="pin" required placeholder="Enter new pin" /> 
            
            <input type="password" id="confirmpin" name="confirmpin" required placeholder="Confirm new pin"/>
             <input type="submit" value="Save changes"/>
            </div>
            </div>
           </div>
            </div>
          </div>



               
     </>       
  )
}

export default Dashboard;