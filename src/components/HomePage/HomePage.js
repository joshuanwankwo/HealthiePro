import React from 'react';
import HomePageMain from './HomePageMain/HomePageMain';
import HomePageNav from './HomePageMain/HomePageNav/HomePageNav';
import About from './About/About';
import Services from './Services/Services';
import Solutions from './Solutions/Solutions';
import Team from './Team/Team';
import Footer from './Footer/Footer';

    function HomePage(){
    return (
     
      <div className="home-con">
         <HomePageMain />
         <About /> 
         <Services /> 
         <Solutions />
         <Team />
         <Footer />
      </div>
    )
    }

    export default HomePage;
