import React, { Component } from 'react';
import './BookDoc.css';
import CongratsModal from '../congratsModal/congratsModal';
import NavBar from '../NavBar/NavBar'
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'healthie' });



class BookDoc extends Component {
   constructor(props) {
      super(props)
      this.state = {
         display: false,
         location: null,
         date: null,
         time: null,
         email: null,
         name: null,
         phoneNo: null,
      }
      this.handleModal = this.handleModal.bind(this)
   }
   componentDidMount() {
   }
   handleChange(event) {
      const { name, value } = event.target;
      switch (name) {
         case 'date': this.setState({
            date: event.target.value
         })
         break;
         case 'time':  this.setState({
            time: event.target.value
         })
         case 'name': this.setState({
               name: event.target.value
         })
         break;
            case 'email': this.setState({
               email: event.target.value
            })
         break;
            case 'phoneNo': this.setState({
               phoneNo: event.target.value
            })
         break;
         default :
         break
            }

      console.log(this.state)
   }
   handleModal(event) {
      event.preventDefault();
      this.setState({ display: true })
      console.log("i clicked")
   }

   handleSubmit(event) {
      event.preventDefault();
      console.log("i submit")
      fetch("https://healthieapp.herokuapp.com/api/appointments", {
         method: 'post',
         headers: {
            "Content-Type": "application/json",
            "authtoken": localStorage.getItem('userToken')
         },
         body: JSON.stringify({user: localStorage.getItem('userId'), doctor: localStorage.getItem('doctorId'), date: this.state.date, location: localStorage.getItem('address') })
      }).then((response) => {
         return response.json();
      }).then((body) => {
         console.log(body)
         if (body.success){
            this.setState({ display: true })
         }
      });
   }

   render() {
      return (
         <div id="bookDoc-con">
            <NavBar />
            {this.state.display === true && <div onClick={this.handleModal} style={{
               position: 'absolute',
               position: 'fixed',
               width: '100%',
               height: '100%',
               background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))',
               top: '0px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
            }}>
               <CongratsModal />

            </div>}


            {/* <img id="bookDoc-intro-pic" src="./doctorIfedili.jpg" width="100%" height="100vh" /> */}
            <div id="bookdoc-child-con">
               <div>
                  <img className="Book-Doc-profile-pic" src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230054/healthie/DoctorsProfile_ggywwy.jpg')} />
               </div>

               <form id="bookDoc-form" onSubmit={this.handleSubmit.bind(this)}>

                  <div id="bookDoc-doc-info">
                     <img src={cloudinaryCore.url('https://res.cloudinary.com/healthie/image/upload/v1573230048/healthie/bookdoc-doc-info_d1mbfq.svg')} />
         <p> Book appointment with Dr {localStorage.getItem("name")}</p>
                  </div>
                  <div id="bookDoc-input-hospital">
                     <input placeholder={localStorage.getItem("address")} />
                  </div>



                  <div id="bookDoc-input-schedule-con">
                     <div id="bookDoc-input-date">
                        <input placeholder="27 September 2019" type='date' name="date" onChange={this.handleChange.bind(this)} />
                     </div>
                     <div id="bookDoc-input-time">
                        <input placeholder="Select Time" type="time" name="time"  onChange={this.handleChange.bind(this)}/>
                     </div>
                  </div>

                  <div id="bookDoc-input-name">
                     <input placeholder="Enter Your Name" name="name" />
                  </div>

                  <div id="bookDoc-input-phone-con">
                     <div id="bookDoc-input-code">
                         <p>+234</p>
                     </div>
                     <div id="bookDoc-input-phone">
                        <input placeholder="Mobile Number" name="phoneNo" />
                     </div>
                  </div>

                  <div id="bookDoc-input-email">
                     <input placeholder="Email Address" name="email" />
                  </div>
                  <button  onSubmit={this.handleSubmit.bind(this)} id="bookDoc-form-Submit">Submit</button>


               </form>
            </div>

         </div>

// onClick={this.handleModal}


      )
   }
}
export default BookDoc;