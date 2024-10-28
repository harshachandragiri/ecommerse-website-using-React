import React, { useEffect, useState } from 'react';
import '../styles/Adminlogin.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    let [UserName, setUsername] = useState("");
    console.log(UserName);
    let [Userpassword, setUserpassword] = useState("");
    console.log(Userpassword);

    let [admin, setAdmin] = useState([]);
    useEffect(() => {
        async function fetchAdmin() {
            let data = await fetch(`http://localhost:8000/Admin`);
            let res = await data.json();
            setAdmin(res);
        }
        fetchAdmin()
    }, [])
    console.log(admin);


    let navigate = useNavigate();
    function login() {
        let val = admin.filter((x) => {
            return x.email === UserName && x.password === Userpassword;
        }
        )
        console.log(val);
        if (val.length > 0) {
            alert("Success");
            navigate('/AdminHomePage');

        } else {
            alert("Failure");
        }

        // if(UserName==="harshac" &&Userpassword==="12345"){
        //     alert("Success");
        //     navigate('/AdminHomePage')

        // }
    }






    return (
        <div className="AdminLoginBody">


            <div className="AdminLogin">
                <h1> Admin Login</h1>
                <form action="">
                    <label htmlFor="">UserName:</label>
                    <input type="text" value={UserName} onChange={(e) => { setUsername(e.target.value) }} placeholder='Enter UserName' />
                    <label htmlFor="">Password:</label>
                    <input type="text" value={Userpassword} onChange={(e) => { setUserpassword(e.target.value) }} placeholder='Enter Password' />


                </form>

                <button className='btnclas' onClick={login} >Login</button>
                <span>Click here to <Link to='./adminsignup' >SignUp</Link> </span>

            </div>
        </div>
    );
}

export default AdminLogin;