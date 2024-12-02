import React, { useState, useEffect } from 'react';
import './Card.css';
import more from './more.png';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Vanilla from './images/Vanilla.png';
import Chocolate from './images/Chocolate.png';
import Red_Velvet from './images/red.png';
import Lemon_Zest from './images/Lemon.png';
import Cookies_and_Cream from './images/oreo.png';
import Salted_Caramel from './images/caramel.png';
import Carrot_Cake from './images/carrot.png';
import Peanut_Butter_Chocolate from './images/pb.png';
// import other flavor images here

const flavorImages = {
  Vanilla,
  Chocolate,
  "Red Velvet": Red_Velvet,
  "Lemon Zest": Lemon_Zest,
  "Cookies and Cream": Cookies_and_Cream,
  "Salted Caramel": Salted_Caramel,
  "Carrot Cake": Carrot_Cake,
  "Peanut Butter Chocolate": Peanut_Butter_Chocolate
};

const Card = ({ id, name, flavor, frostingColor, toppings }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const { data } = await supabase
        .from('Posts')
        .select('price')
        .eq('id', id)
        .single();

      setCount(data.price);
    }

    fetchCount();
  }, [id]);

  const updateCount = async (event) => {
    event.preventDefault();

    await supabase
      .from('Posts')
      .update({ price: count + 1 })
      .eq('id', id);

    setCount((count) => count + 1);
  }

  return (
    <Link to={`/detailview/${id}`}>
      <div className="Card" style={{ boxShadow: `0 4px 8px 0 ${frostingColor}, 0 6px 20px 0 ${frostingColor}` }}>
        <Link to={`/edit/${id}`}><img className="moreButton" alt="edit button" src={more} /></Link>
        <img className='images' src={flavorImages[flavor]} alt={flavor} />
        <h2>{name}</h2>
        <p className="flavor">{"Flavor: " + flavor}</p>
        <p className="frostingColor">{"Frosting Color: " + frostingColor}</p>
        <p className="toppings">{"Toppings: " + toppings}</p>
        <button className="pButton" onClick={updateCount} >💲 Price: {count}</button>
      </div>
    </Link>
  );
};

export default Card;