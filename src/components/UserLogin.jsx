import React,{useState} from 'react';
import '../styles/User.css';

const UserLogin = () => {
    let [UserName,setUsername]=useState("");
    console.log(UserName);
    let [Userpassword,setUserpassword]=useState("");
    console.log(Userpassword);
    function Validation1(){
        if(UserName==='Harsha'&&Userpassword==="12345"){
            alert("SuccessFully Logged in ");
        }else{
            alert("Invalid Credentials");
        }
    }
    return ( 
    <div className="Userlogin">
        <h1>UserLogin</h1>
        <form action="">
            <label htmlFor="">UserName:</label>
            <input type="text" value={UserName} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter UserName'/>
            <label htmlFor="">Password:</label>
            <input type="text" value={Userpassword} onChange={(e)=>{setUserpassword(e.target.value)}} placeholder='Enter Password' />
            

            </form>

            <button onClick={Validation1} className='btnclas1'>Login</button>

    </div> 
    );
}
 
export default UserLogin;