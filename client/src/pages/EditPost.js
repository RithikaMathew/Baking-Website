import React from 'react';
import { useParams } from 'react-router-dom';
import './CreatePost.css'
import { useState, useEffect } from 'react';
import { supabase } from '../client'

const EditPost = () => {

    const { id } = useParams();
    const [post, setPost] = useState({ id: null, name: "", flavor: "", frostingColor: "", toppings: "" });

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .update({ name: post.name, flavor: post.flavor, frostingColor: post.frostingColor, toppings: post.toppings })
            .eq('id', id);
        window.location = "/read";

    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        window.location = "/read";
    }

    return (
        <div className='post'>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br />

                <label htmlFor="flavor">Flavor</label><br />
                <select id="flavor" name="flavor" value={post.flavor} onChange={handleChange}>
                    <option value="">Select a flavor</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Red Velvet">Red Velvet</option>
                    <option value="Lemon Zest">Lemon Zest</option>
                    <option value="Cookies and Cream">Cookies and Cream</option>
                    <option value="Salted Caramel">Salted Caramel</option>
                    <option value="Carrot Cake">Carrot Cake</option>
                    <option value="Peanut Butter Chocolate">Peanut Butter Chocolate</option>
                </select><br />
                <br />

                <label htmlFor="frostingColor">Frosting Color</label><br />
                <select id="frostingColor" name="frostingColor" value={post.frostingColor} onChange={handleChange}>
                    <option value="">Select a color</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Purple">Purple</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Orange">Orange</option>
                    <option value="Hotpink">Pink</option>
                </select><br />
                <br />

                <label htmlFor="toppings">Toppings</label><br />
                <input type="text" id="toppings" name="toppings" value={post.toppings} onChange={handleChange} /><br />
                <br />

                <button className="submit" onClick={updatePost} >Submit</button>
                <button className="delete" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost