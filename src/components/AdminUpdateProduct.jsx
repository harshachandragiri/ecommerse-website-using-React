// import { useEffect ,useState} from "react";
// import {useParams} from  "react-router-dom"
// import { toast } from "react-toastify";
// import axios from "axios";

// const AdminUpdateProducts = () => {
//     let [category, setCategory] = useState("");
//     let [name, setName] = useState("");
//     let [price, setPrice] = useState("");
//     let [adress, setAdress] = useState("");
//     let [rating, setRating] = useState("");
//     let [description, setDescription] = useState("");

//     let data = { category, name, price, adress, rating, description };

//     function updateProduct(e){
//         e.preventDefault();
//         axios.put(`http://localhost:8000/Product/${params.id}`,data)
//         .then((res)=>{
//             console.log(res);
//             toast.success("Items Updated Successfully");
//         })
//         .catch((err)=>{
//             console.log(err);
//             toast.error("Invalid Data Format");
//         })
//     }

//     let params=useParams();

//     useEffect(()=>{
//         axios.get(`http://localhost:8000/Product/${params.id}`)
//         .then((res)=>{
//             console.log(res.data);
//             setCategory(res.data.category);
//             setName(res.data.name);
//             setPrice(res.data.price);
//             setAdress(res.data.adress);
//             setRating(res.data.rating);
//             setDescription(res.data.description);

//         })
//         .catch((err)=>{
//             console.log(err.data);
//         })

//     },[])

//     return (
//         <div className="UpdateProducts">
//             <form action="" onSubmit={updateProduct}>
//                 <fieldset>

//                     <div className="addProductsDetailsC">
//                         <label htmlFor="">
//                             Category
//                         </label>
//                         <select value={category} onChange={(e) => { setCategory(e.target.value) }}>
//                             <option >Clothing</option>
//                             <option >Mobile</option>
//                             <option >Mobile Accesssories</option>
//                             <option >Electronics</option>
//                             <option >,Mobile</option>

//                         </select>
//                         <label htmlFor="">ProductName:</label>
//                         <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter The Product" />
//                         <label htmlFor="">ProductPrice:</label>
//                         <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder="Enter The Price" />
//                         <label htmlFor="">ProductDescription:</label>
//                         <input type="textArea" value={description} onChange={(e) => { setDescription(e.target.value) }} rows="3" cols="10" placeholder="Enter The Description" />
//                         <label htmlFor="">ProductAdress:</label>
//                         <input type="text" value={adress} onChange={(e) => { setAdress(e.target.value) }} placeholder="Enter The Product" />
//                         <label htmlFor="">ProductRatings:</label>
//                         <input type="number" value={rating} onChange={(e) => { setRating(e.target.value) }} placeholder="Enter The Product" />
//                     </div>
//                     <button type="submit" id="apsubmit">Add Products</button>


//                 </fieldset>

//             </form>

//         </div>

//     );
// }

// export default AdminUpdateProducts;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AdminUpdateProducts = () => {
    let [category, setCategory] = useState("");
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [adress, setAdress] = useState("");
    let [rating, setRating] = useState("");
    let [description, setDescription] = useState("");
    
    let params = useParams();
    let data = { category, name, price, adress, rating, description };
    
    function updateProduct(e) {
        e.preventDefault();
        axios.put(`http://localhost:8000/Product/${params.id}`, data)
            .then((res) => {
                console.log(res);
                toast.success("Items Updated Successfully");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Invalid Data Format");
            });
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/Product/${params.id}`)
            .then((res) => {
                console.log(res.data);
                setCategory(res.data.category);
                setName(res.data.name);
                setPrice(res.data.price);
                setAdress(res.data.adress);
                setRating(res.data.rating);
                setDescription(res.data.description);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [params.id]);
    
    return (
        <div className="UpdateProducts">
            <form onSubmit={updateProduct}>
                <fieldset>
                    <div className="addProductsDetailsC">
                        <label>Category</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option>Clothing</option>
                            <option>Mobile</option>
                            <option>Mobile Accessories</option>
                            <option>Electronics</option>
                        </select>
                        <label>Product Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter The Product" />
                        <label>Product Price:</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter The Price" />
                        <label>Product Description:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="3" cols="10" placeholder="Enter The Description" />
                        <label>Product Address:</label>
                        <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} placeholder="Enter The Product Address" />
                        <label>Product Ratings:</label>
                        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Enter The Product Rating" />
                    </div>
                    <button type="submit" id="apsubmit">Update Product</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AdminUpdateProducts;
