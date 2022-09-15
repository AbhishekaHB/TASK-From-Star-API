import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {

    let { id } = useParams();
    let [data, setData] = useState(null);
    let [films, setFilms] = useState(null);



    useEffect(() => {

        let allFilms = sessionStorage.getItem("allFilms");
        allFilms = JSON.parse(allFilms);

        let allPeoples = sessionStorage.getItem("allPeoples");
        allPeoples = JSON.parse(allPeoples);

        let [p] = allPeoples.results.filter((p, i) => { return i + 1 == id });
        setData(p);

        let pf = p.films.map((f) => { return parseInt(f.substring(28)) });

        let n = allFilms.results.filter((f, i) => { return pf.includes(i + 1) })
        setFilms(n);

    }, [])


    return (
        <div>
            {data &&
                <div>
                    <div className="carddetaile">
                        <h2 className="card-header">Detailes of Hero And His Films</h2>
                        <hr />
                        <div className="card-body">
                            <h2> Hero Name : {data.name}</h2>
                            <h2> Gender : {data.gender}</h2>
                            <h2> Height : {data.height}</h2>
                            <h2> Hair_Color :  {data.hair_color}</h2>
                            <h2> Skin_Color :  {data.skin_color}</h2>
                            <h2> Eye_Color :  {data.eye_color}</h2>
                            <h2> Birth_year :  {data.birth_year}</h2>
                        </div>
                        <div className="disp">
                            <h2 id="list">{data.name} Acted Films List </h2>
                            <hr />
                            {
                                films.map((film, i) => {
                                    return (
                                        <h2>{film.title}</h2>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Details;