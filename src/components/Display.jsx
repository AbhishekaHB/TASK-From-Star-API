import { useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../img/img.jpg"

const Display = (data) => {


    useEffect(() => {
        if (localStorage.getItem("wish") === null) {
            localStorage.setItem("wish", "[]");
        }

    }, [])


    let handlewishlist = (id) => {
        let x = localStorage.getItem("wish");
        x = JSON.parse(x);
        if (!x.includes(id)) {
            x.push(id)
            x = JSON.stringify(x)
            localStorage.setItem("wish", x)
        } else {
            alert("all redy added")
        }

    }

    return (
        <div className="detailes" >

            {data && data.data.results.map((detaile, i) => {
                return (
                    <Link to={`/details${i + 1}`}>
                        <div className="row " key={i}>
                            <div className="col-sm-6 ">
                                <div className="card ">
                                    <div className="card-body">
                                        <img src={img} alt="Photo not found" className="img" />
                                        <h3 className="card-title">Name : {detaile.name}</h3>
                                        <h3 className="card-title">Gender : {detaile.gender}</h3>
                                        <button className="btn btn-danger" onClick={() => { handlewishlist(detaile) }}><FavoriteBorderIcon /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}

        </div>);
}

export default Display;