import axios from 'axios'
import React, { useState } from 'react'
export default function AddPost() {
    const [name, setname] = useState([])
    const [Class, setClass] = useState([])
    const [Address, setAddress] = useState([])
    const [Mob, setMob] = useState([])
    const [image, setimage] = useState([])

    function addmypost(){
        //alert("ok");
        console.log(name);
        console.log(Class);
        console.log(Address);
        console.log(Mob);
        console.log(image);


        let data ={
            "name":name,
            "class":Class,
            "Address":Address,
            "Mob":Mob,
            "image":image
        }

        axios.post('http://localhost:4000/addpost',data).then((d)=>{
            console.log(d)
        }).catch((e)=>{
            console.log(e)
        })

    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <h1>AddPost component</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input onChange={(e) => { setname(e.target.value); }} type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="class" className="form-label">Class</label>
                            <input onChange={(e) => { setClass(e.target.value); }} type="text" className="form-control" id="class" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Address" className="form-label"> Address</label>
                            <input onChange={(e) => { setAddress(e.target.value); }} type="text" className="form-control" id="Address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Mob" className="form-label"> Mobile</label>
                            <input onChange={(e) => { setMob(e.target.value); }} type="text" className="form-control" id="Mob" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Post image</label>
                            <input onChange={(e) => { setimage(e.target.value); }} type="text" className="form-control" id="image" />
                        </div>
                        <button onClick={addmypost}type="button" className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
