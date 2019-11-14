import React from 'react';
import HomePageMain from './HomePageMain/HomePageMain';
import Footer from './Footer/Footer';
import './HomePage.css';
import SymptomCard from './SymptomCard/SyptomCard';

const footerStyles = {
  container: {
    // borderTop: '2px solid  #DEDEDE',
     
  },
  textColor: {
      color: '#35444E',
  }
}
    function HomePage(props){
      console.log(props.location.userToken)
    return (
     
      <div id="home-con">
         <HomePageMain history={props.history}/>
          <SymptomCard />
          <Footer styles={footerStyles}/>  
      </div>
    )
    }

    export default HomePage;
