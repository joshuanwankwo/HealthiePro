import React from 'react';
import HomePageMain from './HomePageMain/HomePageMain';
import Footer from './Footer/Footer';
import './HomePage.css';
import SymptomCard from './SymptomCard/SyptomCard';

    function HomePage(){
    return (
     
      <div id="home-con">
         <HomePageMain />
          <SymptomCard />
          <Footer />  
      </div>
    )
    }

    export default HomePage;
