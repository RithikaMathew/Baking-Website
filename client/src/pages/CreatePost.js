import React from 'react';
import './CreatePost.css'
import { useState } from 'react';
import { supabase } from '../client'

const CreatePost = () => {

    const [post, setPost] = useState({ name: "", flavor: "", frostingColor: "", toppings: "" })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();
        await supabase
            .from('Posts')
            .insert({ name: post.name, flavor: post.flavor, frostingColor: post.frostingColor, toppings: post.toppings })
        window.location = "/read";

    }

    return (
        <div class='post'>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br />

                <label htmlFor="flavor">Flavor</label><br />
                <select id="flavor" name="flavor" onChange={handleChange}>
                    <option value="">Select a flavor</option>
                    <option value="Vanilla">Vanilla</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Red Velvet">Red Velvet</option>
                    <option value="Lemon Zest">Lemon Zest</option>
                    <option value="Cookies and Cream">Cookies and Cream</option>
                    <option value="Salted Caramel">Salted Caramel</option>
                    <option value="Carrot Cake">Carrot Cake</option>
                    <option value="Peanut Butter Chocolate">Peanut Butter Chocolate</option>
                </select>
                <br />

                <label htmlFor="frostingColor">Frosting Color</label><br />
                <select id="frostingColor" name="frostingColor" onChange={handleChange}>
                    <option value="">Select a color</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Purple">Purple</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Orange">Orange</option>
                    <option value="Hotpink">Pink</option>
                </select>
                <br />

                <label htmlFor="toppings">Toppings</label><br />
                <input type="text" id="toppings" name="toppings" onChange={handleChange} /><br />
                <br />
                <button class="submit" onClick={createPost}>Submit</button>
            </form>
        </div>
    )
}

export default CreatePost