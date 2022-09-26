import  React from 'react';
import { Link } from "react-router-dom";


function Footer(){
    return(

   <div className='footer bg-dark'>
       <div className='container'>
           <div className='row pt-5'>
           <div className="col-md-4">
                         
                         <h4>Company Info</h4>
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,</p>
                       
               
                     </div>

                     <div className="col-md-4">
                        
                        <h4>Quick Link</h4>
                          <div><Link to="/">Home</Link></div>
                          <div><Link to="/about">About Us</Link></div>
                          <div><Link to="/contact">Contact Us</Link></div>
                          <div><Link to="/">Blog</Link></div>
                          <div><Link to="/">Facebook</Link></div>
                       
               
                     </div>


                     <div className="col-md-4 links">
                        
                        <h4>Contact Information</h4>
                          <h5>hdkhsdkjk, bdfkgikshjk,jjghjdgdkk</h5>
                          <p>01787018787</p>
                          <p>018976543854</p>
                          <p>019183365645</p>
                          <p>019183365645</p>
                       
               
                     </div>
                     <div className='copy'>
                     <p>Copywrite@btweb:2022</p>
                     </div>
                    
                     
           </div>
       </div>
                   
    </div>

    )
}

export default Footer;