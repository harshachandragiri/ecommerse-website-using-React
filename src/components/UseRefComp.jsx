import React, { useRef } from "react";

const UseRefComp = () => {
    let data=useRef();
    let phone=useRef();
    function print(){
        console.log(data.current.value);
        console.log(phone.current.value);
    }
    return (
        <div className="UseRefComp">
            <label htmlFor="">Name</label>
            <input type="text" ref={data}/>
            <label htmlFor=""ref={phone} >Phone</label>
            <input type="text" />
            <button onClick={print}>Submit</button>

        </div>
    );
}

export default UseRefComp;