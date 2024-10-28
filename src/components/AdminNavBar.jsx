import { Link } from "react-router-dom";
import AdminAccount from "./AdminAccount";
import '../styles/AdminNavBar.css'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const AdminNavBar = () => {
    return ( 
        <div className="AdminNavBar">
            <div className="logname">
                <h1>E<span>Kart</span></h1>
            </div>
            <div className="links">
                <Link to="/adminhomepage/addproducts">Add Items</Link>
                <Link to="/adminhomepage/viewproducts" >ViewProducts</Link>
                <Link to="/adminhomepage/viewCart">Cart</Link>
            </div>
            <div className="account">
                <AdminAccount/>

            </div>
        </div>
     );
}
 
export default AdminNavBar;