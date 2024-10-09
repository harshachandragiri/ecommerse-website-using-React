import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./components/Landing";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
const App = () => {
  return ( 
    <div className="app">
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Landing/>} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
      </Routes>
      
      </BrowserRouter>
      

    </div>
   );
}
 
export default App;