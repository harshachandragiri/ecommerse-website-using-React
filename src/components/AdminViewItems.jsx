import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/AdminViewItems.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminViewItems = () => {
    let [products,setProducts]=useState([]);
    let [force,setForce]=useState(0);

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
    },[force])
    console.log(products);
    let navigate=useNavigate();
    function Update(id){
        navigate(`/AdminHomePage/AdminUpdateProduct/${id}`);

    }
    function DeleteProduct(id){
        axios.delete(`http://localhost:8000/Product/${id}`)
        .then(()=>{
            toast.success( "Deleted SuccessFully")
            setForce(force+1)
        })
        .catch(()=>{
            toast.error("Not deleted")
        })

    }

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
                    <div >
                        
                        <Button variant="outline-primary" onClick={()=>{Update(product.id)}}>Update</Button>
                        <Button variant="outline-danger" onClick={()=>{DeleteProduct(product.id)}}>Delete</Button>
                        
                    </div>
                </div>
            )
        })}
        

        

    </div>
    );
}
 
export default AdminViewItems;