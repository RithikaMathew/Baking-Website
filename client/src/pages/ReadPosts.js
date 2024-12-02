import React from 'react';
import Card from '../components/Card';
import './ReadPosts.css';
const ReadPosts = ({ posts }) => {
    return (
        <div className="ReadPosts">

            {posts && posts.length > 0 ?
                posts.map((post, index) => (
                    <Card
                        key={index}
                        id={post.id}
                        name={post.name}
                        flavor={post.flavor}
                        frostingColor={post.frostingColor}
                        toppings={post.toppings}
                    />
                )) : <h2 style={{ color: 'black' }}>{'No Cupcakes Yet 😞'}</h2>}        </div>
    )
}

export default ReadPosts;