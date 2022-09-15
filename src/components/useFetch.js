import { useEffect, useState } from "react";

const useFetch = (request) => {

    let [data, setData] = useState(null);
    let [pending, setPending] = useState(true);
    let [erorr, setErorr] = useState(null);

    useEffect(() => {

        fetch(request)
            .then((resource) => {
                if (resource.ok === false) {
                    throw Error("404 ! Error Data Not Found")
                }
                else {
                    return resource.json()
                }
            })
            .then((data) => { setData(data); setPending(false) })

            .catch((error) => { setErorr(error.message); setPending(false) })

    }, [data]);
    return { data, pending, erorr }
}

export default useFetch;