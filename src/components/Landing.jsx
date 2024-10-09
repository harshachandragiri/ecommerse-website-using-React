import { Link } from "react-router-dom";
import '../styles/Landling.css'
const Landing = () => {
    return (
        <div className="Landingpage">
            <div className="page">
                <div className="Adminpage">
                    <Link to='/adminlogin'>
                        <img src="https://th.bing.com/th/id/OIP.Gvm8fDFjmWd8zy-1Pz0BgwHaHa?rs=1&pid=ImgDetMain" alt="" />

                        <h1>Admin</h1>
                    </Link>
                </div>
                <div className="Userpage">
                    <img src="https://th.bing.com/th/id/R.2b90add718221d91a5b48f2fb88d012a?rik=FYL%2fW79homI3Jw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_552555.png&ehk=qbsK1y2W2OXIDJX2qDIvEZMj%2fAa%2bNZxslVAguvc72gs%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    <Link to='/userlogin'>
                        <h1>User</h1>
                    </Link>

                </div>
            </div>



        </div>

    );
}

export default Landing;