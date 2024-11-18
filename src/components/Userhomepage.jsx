import UserDashBoard from "./UserDashboard";
import UserFooter from "./UserFooter";
import UserNavBar from "./UserNavBar";
import {Routes,Route} from "react-router-dom";
import UserViewItems from "./UserViewItems";

const UserHomePage = () => {
    return ( 
        <div className="UserHomePage">
            <UserNavBar/>
            {/* <UserDashBoard/> */}
            <Routes>
                <Route path="/" element={<UserDashBoard/>} />
                <Route path="/userviewitems" element={<UserViewItems/>} />
            </Routes>
            
            <UserFooter/>
            
        </div>
     );
}
 
export default UserHomePage;