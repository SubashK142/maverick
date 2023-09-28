import React, { useState, useEffect } from 'react';
import './Slidingleft.css'; // Create a CSS file for styling

const Slidingleft = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger the sliding animation when the component mounts
    setSlideIn(true);
  }, []);

  return (
    <div className={`slide-in ${slideIn ? 'active' : ''}`}>
    <div style={{display:'flex',flexDirection:'row'}}>
    <img style={{width:'15%',height:'5%',borderRadius:170}} src='https://res.cloudinary.com/dmyhvrlo2/image/upload/v1695660112/vector-collection-business-people_53876-35098.jpg_pjxwvh.jpg' alt='address'/>
   
    <div style={{display:'flex',flexDirection:'column',marginTop:'-18px'}}>
    <p style={{color:'white',marginLeft:'15px',fontSize:18}}> Address</p>
    <p style={{color:'white',marginLeft:'15px',marginTop:'-10px',fontSize:18}}>Skcet,coimbatore</p>

    </div>

     </div>  
     <div style={{display:'flex',flexDirection:'row',marginTop:'30px'}}>
     <img style={{width:'15%',height:'4%',borderRadius:170}}
     src='https://res.cloudinary.com/dmyhvrlo2/image/upload/v1695660322/724664.png_m3y8ie.png' alt/>

     <div style={{display:'flex',flexDirection:'column',marginTop:'-10'}}>
     <p style={{color:'white',marginLeft:'20px',marginTop:'-0px',fontSize:18}}>Phone</p>
     <p style={{color:'white',marginLeft:'15px',marginTop:'-10px',fontSize:18}}>+91 4363632623</p>
     </div>

     </div>
     <div style={{display:'flex',flexDirection:'row',marginTop:'30px'}}>
     <img style={{width:'15%',height:'4%',borderRadius:170}}
     src='https://res.cloudinary.com/dmyhvrlo2/image/upload/v1695660530/email-messagingemail-marketing-campaignflat-design-icon-vector-illustration_183665-226.jpg_t5iwha.jpg' />
    
     <div style={{display:'flex',flexDirection:'column',marginTop:'-15px'}}>
     <p style={{color:'white',marginLeft:'17px',fontSize:18}}>Email</p>
     <p style={{color:'white',marginLeft:'17px',marginTop:'-10px',fontSize:18}}>Yogesh@gmail.com</p>
     </div>
     </div>
    </div>
  );
};

export default Slidingleft;
