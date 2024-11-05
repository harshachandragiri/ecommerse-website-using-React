import '../styles/AdminSignUp.css';
const AdminSignup = () => {
    return (  
       <div className="adminsignupcontainer">
        {/* <h1>Adminsignup</h1> */}
        <div className="adminSignUpContainer">
            <img src="https://images.unsplash.com/photo-1559131109-dd8e844b455f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <form action="" className='adminsignupcntr'>
                <label htmlFor="" >Username</label>
                <input type="text" required placeholder="Username" />
                <label htmlFor="">Password</label>
                <input type="password" required  placeholder="Password" />
                <label htmlFor="" >Conform Password</label>
                <input type="password" required placeholder="Password" />
                <label htmlFor="">email</label>
                <input type="email" required placeholder="email" />
                <label htmlFor="" ></label>
                <input className='submit' type="submit" />
            </form>
        </div>
       </div>
    );
}
 
export default AdminSignup;

