import React, { useState, useEffect } from 'react';
import './Slidingright.css'; // Create a CSS file for styling

const SlideInRight = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the sliding animation when the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div style={{borderRadius:5}} className={`slide-in-right ${isVisible ? 'active' : ''}`}>
      <form>
      <p style={{fontSize:30,fontWeight:'normal',marginLeft:'45px'}}>Send message</p>
      
      <br></br>
      <input style={{fontSize:20}} type="text" id="custom-input" placeholder="Full Name"></input>
      <br></br>
      <input style={{fontSize:20}} type="text" id="custom-input" placeholder="Email"></input>
      
      <br></br>
     
      <input style={{fontSize:20}} type="text" id="custom-input" placeholder="Type Your Message..."></input>
      <br></br>
      <button style={{backgroundColor:'blue',color:'white',marginLeft:'190px',padding:'10px',width:'17%',borderRadius:10}} >Send</button>

      </form>
    </div>
  );
};

export default SlideInRight;
