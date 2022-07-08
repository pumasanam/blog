import React,{useState, useEffect} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Storage from './Storage';
import Footer from './Footer';

const Card = () => {
    const [maindata, setMaindata] = useState([]);

    useEffect(()=>{
           const fetch = async () =>{
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                setMaindata(res.data);
            }
            catch(err){
                console.log(err);
            }
       
            };
         fetch();
    },[]);
  return (
    <>
    <Navbar/>
    <div className="card-data">
        {maindata.map((list)=>{
            return <Storage list={list}/>
        })}
    </div>

    <Footer/>
    </>
  );
};

export default Card;
