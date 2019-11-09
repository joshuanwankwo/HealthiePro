import React, {Component} from 'react';
import './BookDoc.css';
import CongratsModal from '../congratsModal/congratsModal';

import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'healthie'});



   class BookDoc extends Component {
      constructor(props){
          super(props)
          this.state = { 
             display:false
          }
          this.handleModal = this.handleModal.bind(this)
     }

     handleModal(event){
      event.preventDefault();
        this.setState({display:true})
        console.log("i clicked")
     }


     render() { 
   return ( 



     <div id="parent-con"> 
     
     {this.state.display === true && <div onClick={this.handleModal} style={{
         position:'absolute',
         position:'fixed',
         width:'100%',
         height:'100%',
         background:'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))',
         top:'0px',
         display:'flex',
         alignItems:'center',
         justifyContent:'center'
     }}>
         <CongratsModal />

     </div>}

               
          {/* <img id="bookDoc-intro-pic" src="./doctorIfedili.jpg" width="100%" height="100vh" /> */}

      <div>
         <img className="Book-Doc-profile-pic" src="./DoctorsProfile.jpg"  />
    </div>  
      
     <form id="bookDoc-form">

               <div id="bookDoc-doc-info">
                  <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230048/healthie/bookdoc-doc-info_d1mbfq.svg')} />
                  <p>Request Appointment With Dr. Ifedili Joshua</p>
               </div>
               <div id="bookDoc-input-hospital">
                  <input placeholder="New Heaven Hospital, Enugu" />
                  <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230055/healthie/dropdown_llk5ae.svg')}/>
               </div>

                 

                  <div id="bookDoc-input-schedule-con">
                     <div id="bookDoc-input-date">
                        <input placeholder="27 September 2019" />
                        <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230040/healthie/calender_bshzcy.svg')} />
                     </div>
                     <div id="bookDoc-input-time">
                        <input placeholder="Select Time" />
                     <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230055/healthie/dropdown_llk5ae.svg')} />
                     </div>
                  </div>

                  <div id="bookDoc-input-visit-ques">
                     <input placeholder="Have Have You Visited This Hospital Before?" />
                     <div>
                        <button id="bookDoc-input-button1">Yes</button>
                        <button id="bookDoc-input-button2">No</button>
                     </div>
                  </div>

                  <div id="bookDoc-input-name">
                     <input placeholder="Enter Your Name" />
                  </div>

                  <div id="bookDoc-input-phone-con">
                     <div id="bookDoc-input-code">
                        <input placeholder="Nigeria (+234)" />
                        <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230055/healthie/dropdown_llk5ae.svg')} />
                     </div>
                     <div id="bookDoc-input-phone">
                        <input placeholder="Mobile Number" />
                     </div>
                  </div>

                  <div id="bookDoc-input-email">
                     <input placeholder="Email Address" />
                  </div>


                  <div id="bookDoc-input-schedule-con">
                     <div id="bookDoc-input-date">
                        <input placeholder="Select Your Age" />
                     </div>
                     <div id="bookDoc-input-time">
                        <input placeholder="Gender" />
                        <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230055/healthie/dropdown_llk5ae.svg')} />
                     </div>
                  </div>



               <button onClick={this.handleModal}  id="bookDoc-form-Submit">Submit</button>


            </form>
       </div>


   )}
}
export default BookDoc;