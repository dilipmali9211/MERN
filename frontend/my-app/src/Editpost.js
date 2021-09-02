import axios from 'axios'
import {NavLink} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Editpost() {
    const [name, setname] = useState('Name..')
    const [mYClass, setmYClass] = useState([])
    const [Address, setAddress] = useState([])
    const [Mob, setMob] = useState([])
    const [image, setimage] = useState([])

    let p = useParams()

    useEffect(() => {
        axios.get('http://localhost:4000/getpostbyid/' + p.post_id).then((d) => {
            console.log(d.data);
            setname(d.data[0].name)
            setmYClass(d.data[0].mYClass)
            setAddress(d.data[0].Address)
            setMob(d.data[0].Mob)
            setimage(d.data[0].image)
        }).catch((e) => {
            console.log(e)
        });

    }, [])

    function editmypost() {
        alert("ok");
        console.log(name);
        console.log(mYClass);
        console.log(Address);
        console.log(Mob);
        console.log(image);


        let editdata = {
            "_id": p.post_id,
            "name": name,
            "class": mYClass,
            "Address": Address,
            "Mob": Mob,
            "image": image
        }
        axios.put('http://localhost:4000/updatepost',editdata).then((d)=>{
            console.log("Data update Scuessfully")
        }).catch((e)=>{
            console.log(e)
        })


    }

    return (
        <div className="container">
            <NavLink className="btn btn-success"to="/">Go to the PostList</NavLink>
            <div className="row">
                <div className="col-6 offset-3">
                    <h1>EditPost component</h1>
                    {p.post_id}
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input onChange={(e) => { setname(e.target.value); }} type="text" className="form-control" id="name" value={name} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mYClass" className="form-label">Class</label>
                            <input onChange={(e) => { setmYClass(e.target.value); }} type="text" className="form-control" id="mYClass" value={mYClass} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Address" className="form-label"> Address</label>
                            <input onChange={(e) => { setAddress(e.target.value); }} type="text" className="form-control" id="Address" value={Address} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Mob" className="form-label"> Mobile</label>
                            <input onChange={(e) => { setMob(e.target.value); }} type="text" className="form-control" id="Mob" value={Mob} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Post image</label>
                            <input onChange={(e) => { setimage(e.target.value); }} type="text" className="form-control" id="image" value={image} />
                        </div>
                        <button onClick={editmypost} type="button" className="btn btn-primary">Edit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
