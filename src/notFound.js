import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found text-center">
            <h2 className="text-[50px]">404</h2>
            <p>That Page Cannot Be Found</p>
            <Link to="/">
                <span className="text-[#f1356d]">Back</span>
            </Link>
        </div>
    );
}
 
export default NotFound;