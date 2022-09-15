import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import Display from "./Display";

const Cartlist = () => {

    let [wish, setWish] = useState()

    let { data, pending, error } = useFetch("https://swapi.dev/api/people");

    useEffect(() => {
        let wish = localStorage.getItem("wish")
        wish = JSON.parse(wish);
        setWish(wish)
    }, [])



    return (
        <div >
            {pending && <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {error && <div className="alert alert-success mt-5 text-center" role="alert">
                <h4 className="alert-heading">Well done!</h4>
                <h2>Failed To Fetch.</h2>
                <hr />
                <p className="mb-0">Check Your Internet Connection. and Try Again</p>
            </div>}
            {data && <Display data={data.filter((detaile) => { return wish.includes(detaile.id) })} />}
        </div>
    );
}

export default Cartlist;