import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { Link } from 'react-router-dom';
import './DetailView.css'

const DetailView = () => {
  const { id, name } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from('Posts')
        .select()
        .eq('id', id)
        .single();

      setPost(data);
    }

    fetchPost();
  }, [id]);

  return (
    <div class="DetailView">
      <h2 >{"Cupcake Name: " + post.name}</h2>
      <h3 >Info:  </h3>
      <p >{"Flavor: " + post.flavor}</p>
      <p >{"Frosting Color: " + post.frostingColor}</p>
      <p >{"Toppings: " + post.toppings}</p>
      <p >{"Price: $" + post.price}</p>
      {
        post.price >= 10 ? <p>That's an expensive cupcake!</p> :
          post.price >= 5 ? <p>That's a bit pricey!</p> :
            <p>That's a cheap cupcake!</p>
      }      <Link to={`/edit/${id}`}><button>Edit cupcake</button></Link>
    </div>
  );
};

export default DetailView;