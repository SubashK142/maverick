import React from 'react'
import SlideInRight from './Slidingright'
import Slidingleft from './Slidingleft'

export default function Contact() {
  return (
    <div>
       <div style={{marginTop:'-50px'}}>
       <p style={{paddingTop:'80px',paddingLeft:'600px',color:'white',fontSize:30}}>Contact us</p>
       <p style={{paddingLeft:'300px',color:'white',fontSize:18}}>Keep in mind that customizing input elements with CSS can affect their accessibility and usability.</p>
       <SlideInRight/>
       <Slidingleft/>
       <Slidingleft/>
       

      </div>
   
    </div>
  )
}
