import UserDashBoard from "./UserDashboard";
import UserFooter from "./UserFooter";
import UserNavBar from "./UserNavBar";

const UserHomePage = () => {
    return ( 
        <div className="UserHomePage">
            <UserNavBar/>
            <UserDashBoard/>
            <UserFooter/>
            
        </div>
     );
}
 
export default UserHomePage;