import React from "react";
import Slider from './includes/Slider.js';
import Mv from './includes/Mv';
import Footer from './includes/Footer';
export const Home = () =>{
    return(

        <div>
            <div className="row">
               <Slider />
               <section className="company-info py-5">
                 <div className="container">
                   <div className="row">
                      <div className="col-md-12">
                        <h2>Our Company</h2>
                    
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </div>
                   </div>
                 </div>
               </section>
            <Mv />



            <section className="service py-2 mb-5">
                 <div className="container">
                   <div className="row">
                      <div className="col-md-12">
                        <h2>Our Service</h2>
                        </div>

                        <div className="col-md-4">
                         <div className="card shadow">
                         <h4>Web Desing</h4>
                           <div className="card-body">
                           <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                  
                           </div>
                         </div>
                      
                      </div>

                      <div className="col-md-4">
                         <div className="card shadow">
                         <h4>Web Development</h4>
                           <div className="card-body">
                           <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                           </div>
                         </div>
                      
                      </div>

                      <div className="col-md-4">
                         <div className="card shadow">
                           <h4>Digital Marketing</h4>
                           <div className="card-body">
                           <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                    
                           </div>
                         </div>
                      
                      </div>
                   </div>
                 </div>
               </section>
            
            </div> 
            <section>
                <Footer />
            </section>
        </div>
    );
}