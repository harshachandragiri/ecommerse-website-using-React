import AdminDashBoard from "./AdminDashBoard";
import AdminFooter from "./AdminFooter";
import AdminNavBar from "./AdminNavBar";
import { Routes,Route } from "react-router-dom";
import AdminViewItems from "./AdminViewItems";
import AdminAddProducts from "./AdminAddProducts";

const AdminHomePage = () => {
    return ( 
        <div className="AdminHomePage">
            <AdminNavBar/>
            <Routes>
                <Route path='/' element={<AdminDashBoard/>} />
                <Route path='/viewproducts' element={<AdminViewItems/>} />
                <Route path='/addproducts' element={<AdminAddProducts/>} />

            </Routes>
            
            <AdminFooter/>
        </div>
     );
}
 
export default AdminHomePage;