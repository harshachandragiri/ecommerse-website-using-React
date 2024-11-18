import React, { useEffect, useState } from 'react';
import '../styles/User.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const UserLogin = () => {
    let [uUserName, setuUsername] = useState("");
    console.log(uUserName);
    let [uUserpassword, setuUserpassword] = useState("");
    console.log(uUserpassword);

    let [user,setUser]=useState([]);



    useEffect(()=>{
        async function fetchUser(){
            let UserData=await fetch(`http://localhost:8000/User`)
            let UserRes=await UserData.json();
            setUser(UserRes);
        }
        fetchUser();
    
    },[]);
    console.log(user);

    const navigate=useNavigate();


    function Validation1() {
        let val=user.filter((i)=>{
            return i.email===uUserName && i.password===uUserpassword;
        })
        if(val.length>0){
            alert("Success");
            navigate('/UserHomePage')
        }else{
            alert("Failure")
        }
        
    }
    return (
        <div className="userloginContainer">
            <div className="Userlogin">
                <h1>UserLogin</h1>
                <form action="">
                    <label htmlFor="">UserName:</label>
                    <input type="text" value={uUserName} onChange={(e) => { setuUsername(e.target.value) }} placeholder='Enter UserName' />
                    <label htmlFor="">Password:</label>
                    <input type="text" value={uUserpassword} onChange={(e) => { setuUserpassword(e.target.value) }} placeholder='Enter Password' />


                </form>

                <button onClick={Validation1} className='btnclas1'>Login</button>
                <span>Click here to <Link to='/userlogin/usersignup' >SignUp</Link> </span>

            </div>
        </div>
    );
}

export default UserLogin;