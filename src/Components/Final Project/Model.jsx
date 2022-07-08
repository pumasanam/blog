import axios from 'axios';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Model = ({setModel ,id, fetch}) => {
    const ModelDelete = async()=>{
        try{
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log(res);
            fetch();

            if(res.status===200){
                toast.success('Data Deleted Successfully');
            }
            setTimeout(() => {
                setModel(false);
            }, 3000);
            
        }
        catch(err){
            console.log(err);
        }
    };
  return (
    <>
    <ToastContainer/>
      <div className="model">
        <h4>Are You Sure You Want To Delete?</h4>

        <button onClick={ModelDelete}>Yes</button>

        <button onClick={()=>{
            setModel(false);
        }}>Cancel</button>
      </div>
    </>
  );
};

export default Model;
