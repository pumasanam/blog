import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const SingleData = () => {
    const {id} = useParams();
    const [singledata, setsingledata] = useState(null);

    useEffect(()=>{
        const fetch = async ()=>{
            try{
                const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setsingledata(res.data);
            }   
            catch(err){
                console.log(err);
            }
        };
        if(id){
            fetch();
        }
    },[id]);
  return (
    <>
    <Navbar/>
    {
        singledata ?
        (
            <div className="singledata">
                <h2>{singledata.name}</h2>
                <h3>{singledata.username}</h3>
                <h4>{singledata.email}</h4>
            </div>
        ):
        (
            <p>Loading...</p>
        )
    }

    <Footer/>
     
    </>
  )
}

export default SingleData
