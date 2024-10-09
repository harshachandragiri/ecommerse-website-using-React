import React,{useState} from 'react';
import'../styles/Adminlogin.css';

const AdminLogin = () => {
    let [UserName,setUsername]=useState("");
    console.log(UserName);
    let [Userpassword,setUserpassword]=useState("");
    console.log(Userpassword);
    function Validation(){
        if(UserName==='Jspiders'&&Userpassword==="12345"){
            alert("SuccessFully Logged in ");
        }else{
            alert("Invalid Credentials");
        }
    }
    
    return ( 
        <div className="AdminLogin">
            <h1> Admin Login</h1>
            <form action="">
            <label htmlFor="">UserName:</label>
            <input type="text" value={UserName} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter UserName'/>
            <label htmlFor="">Password:</label>
            <input type="text" value={Userpassword} onChange={(e)=>{setUserpassword(e.target.value)}} placeholder='Enter Password' />
            

            </form>

            <button onClick={Validation} className='btnclas'>Login</button>
            
        </div>
     );
}
 
export default AdminLogin;