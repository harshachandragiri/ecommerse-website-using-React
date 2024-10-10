import React,{useEffect, useState} from 'react';
import'../styles/Adminlogin.css';

const AdminLogin = () => {
    let [UserName,setUsername]=useState("");
    console.log(UserName);
    let [Userpassword,setUserpassword]=useState("");
    console.log(Userpassword);
    
    let [admin,setAdmin]=useState([]);
    useEffect(()=>{
        async function fetchAdmin(){
            let data=await fetch()
            let res=await data.json();
            setAdmin(res);
            
        }
        fetchAdmin()
    })
    
    return ( 
        <div className="AdminLogin">
            <h1> Admin Login</h1>
            <form action="">
            <label htmlFor="">UserName:</label>
            <input type="text" value={UserName} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter UserName'/>
            <label htmlFor="">Password:</label>
            <input type="text" value={Userpassword} onChange={(e)=>{setUserpassword(e.target.value)}} placeholder='Enter Password' />
            

            </form>

            <button  className='btnclas'>Login</button>
            
        </div>
     );
}
 
export default AdminLogin;