import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/AdminViewItems.css"

const AdminViewItems = () => {
    let [products,setProducts]=useState([]);

    useEffect(()=>{
        function fetchProducts(){
            axios.get('http://localhost:8000/Product')
            .then((res)=>{
                setProducts(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        fetchProducts();
    },[])
    console.log(products);

    return ( 
    <div className="AdminViewItems">
        {products.map((product)=>{
            return(
                <div className="sub_items">
                    <h1>{product.name}</h1>
                    <h3>{product.category}</h3>
                    <img src={product.adress} alt="" />
                    <h1>{product.price}</h1>
                    <p>{product.description}</p>
                </div>
            )
        })}
        

        

    </div>
    );
}
 
export default AdminViewItems;