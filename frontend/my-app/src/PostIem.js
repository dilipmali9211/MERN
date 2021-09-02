import React from 'react'
import {Link,NavLink} from 'react-router-dom';
export default function PostItem({ post }) {
    return (
        <div className="row mt-5 mb-5">
            <div className="col-4 ps-5">
                <img alt="" width="300" src={post.image} />
            </div>
            <div className="col-6">
                <h1>Name:-{post.name}</h1>
                <h2>Class:-{post.class}</h2>
                <h2>Address:-{post.Address}</h2>
                <h2>Mob:-{post.Mob}</h2>
            </div>
            <div className="col-2">
                <Link to={'editpost/'+post._id } className="btn btn-success me-3">Edit</Link>
                <NavLink to={'deletpost/'+post._id } className="btn btn-danger">Delet</NavLink>
            </div>
        </div>
    )
}
