import React from 'react';
import Vanilla from '../components/images/Vanilla.png';
import Chocolate from '../components/images/Chocolate.png';
import Red_Velvet from '../components/images/red.png';
import Lemon_Zest from '../components/images/Lemon.png';
import Cookies_and_Cream from '../components/images/oreo.png';
import Salted_Caramel from '../components/images/caramel.png';
import Carrot_Cake from '../components/images/carrot.png';
import Peanut_Butter_Chocolate from '../components/images/pb.png';
import baker from '../components/images/baker.png';
import './Home.css';

function Home() {
  return (
    <>
      <div className="Home">
        <h1>Welcome to our Cupcake Shop!</h1>
        <p>Here is where you can create your very own cupcakes before sending them off to our customers! Do your best to impress them with your creativity and flavors. Good luck and have fun baking!
        </p>
        <img src={Vanilla} alt="Vanilla" />
        <img src={Chocolate} alt="Chocolate" />
        <img src={Red_Velvet} alt="Red Velvet" />
        <img src={Lemon_Zest} alt="Lemon Zest" />
        <img src={Cookies_and_Cream} alt="Cookies and Cream" />
        <img src={Salted_Caramel} alt="Salted Caramel" />
        <img src={Carrot_Cake} alt="Carrot Cake" />
        <img src={Peanut_Butter_Chocolate} alt="Peanut Butter Chocolate" />
      </div>
      <img id='baker' src={baker} alt="baker" />
    </>

  );
}

export default Home;