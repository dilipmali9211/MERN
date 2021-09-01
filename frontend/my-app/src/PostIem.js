import React from 'react'

export default function PostItem({post}) {
    return (
        <div>
            
            <h1>{post.name}</h1>
            <h2>{post.class}</h2>
            <h2>{post.Address}</h2>
            <h2>{post.Mob}</h2>
            <img width="300"src={post.image}/>
        </div>
    )
}
