import { useState } from 'react';
import '../styles/AdminSignUp.css';
import axios from 'axios';
import { toast } from "react-toastify";

const UserSignUp = () => {
    let [username,setAName]=useState();
    let [password,setApswd]=useState();
    let [ConformPassword,setAcpswd]=useState();
    let [email,setAemail]=useState();

    let newUser={username,password,ConformPassword,email};

    function userSignUp(e){
        e.preventDefault();
        axios.post('http://localhost:8000/User',newUser)
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
        <div>
            <h1>This Is User SignUp </h1>
            <div className="adminsignupcontainer">
        {/* <h1>Adminsignup</h1> */}
        <div className="adminSignUpContainer">
            <img src="https://images.unsplash.com/photo-1559131109-dd8e844b455f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <form action="" className='adminsignupcntr'>
                <label htmlFor="" >Username</label>
                <input type="text" required value={username} onChange={(e)=>{setAName(e.target.value)}}  placeholder="Username"  />
                <label htmlFor="">Password</label>
                <input type="password" required value={password} onChange={(e)=>{setApswd(e.target.value)}}   placeholder="Password" />
                <label htmlFor="" >Conform Password</label>
                <input type="password"required value={ConformPassword} onChange={(e)=>{setAcpswd(e.target.value)}}  placeholder="Password" />
                <label htmlFor="">email</label>
                <input type="email" required value={email} onChange={(e)=>{setAemail(e.target.value)}}  placeholder="email" />
                <label htmlFor="" ></label>
               
               <input type="submit" onClick={userSignUp} placeholder='Submit' />
            </form>
        </div>
       </div>

        </div>
    );
}

export default UserSignUp;



// const AdminSignup = () => {

//        return (  
       
//     );
// }
 


