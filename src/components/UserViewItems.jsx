import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import "../styles/UserViewItems.css";

const UserViewItems = () => {
    let [userProducts, setUserProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/Product`)
            .then((res) => {
                console.log(res.data);
                setUserProducts(res.data);
            })
            .catch((err) => {
                console.log(err);

            })
    }, [])

    return (
        <div className="userViewName">
            {userProducts.map((product) => {
                return (
                    <div className="sub_items">
                        <h1>{product.name}</h1>
                        <h3>{product.category}</h3>
                        <img src={product.adress} alt="" />
                        <h1>{product.price}</h1>
                        <p>{product.description}</p>
                        <div >

                            <Button variant="outline-primary">Add To Cart</Button>


                        </div>

                    </div>




                )
            })
            }



        </div >
    );
}

export default UserViewItems;