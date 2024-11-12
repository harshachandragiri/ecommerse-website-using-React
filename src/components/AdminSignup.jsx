import { useState } from 'react';
import '../styles/AdminSignUp.css';
import axios from 'axios';
import { toast } from "react-toastify";

const AdminSignup = () => {

    let [Aname,setAName]=useState();
    let [Apswd,setApswd]=useState();
    let [Acpswd,setAcpswd]=useState();
    let [Aemail,setAemail]=useState();

    let newAdmin={Aname,Apswd,Acpswd,Aemail};

    function adminSignUp(e){
        e.preventDefault();
        axios.post('http://localhost:8000/Admin',newAdmin)
        .then((res)=>{
            console.log(res);
            toast.success("Data added Successfully");

        })
        .catch((err)=>{
            console.log(err);
            toast.error("Invalid Data")
        })
    }
    
    return (  
       <div className="adminsignupcontainer">
        {/* <h1>Adminsignup</h1> */}
        <div className="adminSignUpContainer">
            <img src="https://images.unsplash.com/photo-1559131109-dd8e844b455f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <form action="" className='adminsignupcntr'>
                <label htmlFor="" >Username</label>
                <input type="text" required value={Aname} onChange={(e)=>{setAName(e.target.value)}}  placeholder="Username"  />
                <label htmlFor="">Password</label>
                <input type="password" required value={Apswd} onChange={(e)=>{setApswd(e.target.value)}}   placeholder="Password" />
                <label htmlFor="" >Conform Password</label>
                <input type="password"required value={Acpswd} onChange={(e)=>{setAcpswd(e.target.value)}}  placeholder="Password" />
                <label htmlFor="">email</label>
                <input type="email" required value={Aemail} onChange={(e)=>{setAemail(e.target.value)}}  placeholder="email" />
                <label htmlFor="" ></label>
               
               <input type="submit" onClick={adminSignUp} placeholder='Submit' />
            </form>
        </div>
       </div>
    );
}
 
export default AdminSignup;

