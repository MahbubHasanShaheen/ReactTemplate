import React from "react";
import Footer from './includes/Footer';
export const Contact = () =>{
    return(

        <div>
            <section className="contact-us">
           <div className="container">
                 <h2>Contact Us</h2>
               <div className="row">
                   
                   <div className="col-md-8">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29198.418746652114!2d90.37818584828518!3d23.825626669819666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6e9ac1b2dbd%3A0xa98a52dad38edc98!2sCantonment%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1650788614263!5m2!1sen!2sbd" width="700" height="430"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>
                   <div className="col-md-4">
                       <div className="card shadow">
                       <div className="card-body py-3">
                       <h4>Send your idea</h4>
                       <form>
                           <label for="">Name</label>
                           <input type="text" className="form-control" placeholder="Enter your name"/>
                           <label for="">Email</label>
                           <input type="email" className="form-control" placeholder="Enter your mail Address"/>
                           <label for="">Message</label>
                           <textarea type="text" className="form-control" placeholder="" rows="6"/>
                           <button  className="btn btn-success mt-3 w-100">Send</button>
                       </form>
                       </div>
                   </div>
                   </div>
               </div>
               </div>
       </section>
       
       <section>
       <section>
                <Footer />
            </section>
       </section>
        </div>
    );
}