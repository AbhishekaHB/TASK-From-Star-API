import { useEffect } from "react";
import Display from "./Display";
import Footer from "./Footer";
import useFetch from "./useFetch";

const Home = () => {


  let { data, pending, error } = useFetch("https://swapi.dev/api/people");
  let { data: allFilms } = useFetch("https://swapi.dev/api/films");

  useEffect(() => {
    if (allFilms != null) {
      let f = JSON.stringify(allFilms);
      sessionStorage.setItem("allFilms", f);
    }
    if (data != null) {
      let p = JSON.stringify(data);
      sessionStorage.setItem("allPeoples", p);
    }
  }, [data, allFilms])




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
      {data && <Display data={data} />}
    </div >
  );
}

export default Home;