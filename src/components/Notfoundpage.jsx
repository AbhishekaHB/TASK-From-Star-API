import { Link } from "react-router-dom";
import img from "../img/notpage.jpg"
const Notfoundpage = () => {
    return (
        <div className="notfoundpage">
            <Link to="/">
                <img src={img} alt="" />
            </Link>
        </div>
    );
}

export default Notfoundpage;