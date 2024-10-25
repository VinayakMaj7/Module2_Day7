import "../Assets/CSS/NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
    return(
        <div>
            <ul>
                <li><Link to ="/">Home</Link> </li>
                <li><Link to ="/view">View</Link> </li>
                <li><Link to ="/Create">Create</Link> </li>
                <li><Link to ="/Delete">Delete</Link> </li>
                <li><Link to ="/Update">Update</Link> </li>
            </ul>
        </div>
    )
}
export default NavBar