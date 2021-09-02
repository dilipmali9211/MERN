import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Deletpost() {
    let p = useParams()
    useEffect(() => { }, [])
    axios.delete('http://localhost:4000/deletepost/' + p.post_id).then((d) => {
        alert('data deleted Successfully')
        console.log(d)
    }).catch((e) => {
        console.log(e)
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 mt-5">
                    <Link className="btn btn-success" to="/">Go to home</Link>
                    <h1>Delet Post component</h1>
                    {p.post_id}
                    <div className='col'>
                    <img className="img1 w-100" alt="" src='.../public/1.png'/>
                    </div>
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    )

}
