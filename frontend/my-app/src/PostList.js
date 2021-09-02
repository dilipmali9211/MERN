import React, { useEffect, useState } from 'react'
import PostItem from './PostIem'

const axios = require('axios');


export default function PostList() {

    //const [variable, function] = useState(); 
    const [postitems, setPostItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/getposts').then((d) => {
            console.log(d.data);
            setPostItems(d.data);
        }).catch((e) => {
            console.log(e);
        })
    }, [])

    const newpostitems = postitems.map((post) => {
        return (
            <div>
                <PostItem post={post} />
            </div>
        );
    })

    return (
        <div>
            <h1> Post list component</h1>
            {newpostitems}
        </div>
    )
}
