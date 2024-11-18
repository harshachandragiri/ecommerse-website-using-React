import {Link} from "react-router-dom";
import "../styles/UserNavBar.css"


const UserNavBar = () => {
    return ( 
        <div className="UserNavBar">
            <Link to="/userhomepage/userviewitems">View Items</Link>
            <Link to="/viewcart">View Cart</Link>
        </div>
     );
}
 
export default UserNavBar;