import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import AdminSignup from "./components/AdminSignup"
import AdminHomePage from "./components/AdminHomePage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserHomePage from "./components/Userhomepage";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Landing />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/userlogin' element={<UserLogin />} />
          {/* <Route path='/adminsignup' element={<AdminSignup/>} /> */}
          <Route path="/adminlogin/adminsignup" element={<AdminSignup />} />
          <Route path="/adminhomepage/*" element={<AdminHomePage />} />
          <Route path="/userhomepage"  element={<UserHomePage/>}/>

        </Routes>

      </BrowserRouter>
      <ToastContainer/>


    </div>
  );
}

export default App;