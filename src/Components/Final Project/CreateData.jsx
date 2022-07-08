import axios from 'axios';
import React, {useState ,useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";
import {useParams} from 'react-router-dom';

const CreateData = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  let color = 'green';
  const {id} = useParams();
  const [edit, setEdit] = useState(false);

  useEffect(()=>{

    const fetch = async ()=>{
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setName(res.data.name);
      setUsername(res.data.username);
      setEmail(res.data.email);
    };
    if(id){
      setEdit(true);
      fetch();
    }
  },[id]);

  const onDataSubmit = async (e)=>{
      e.preventDefault();
      setLoading(true);

      const dataSubmit ={
        name, username,  email,
      };

      if(edit){
        try{
          const res = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`);
          console.log(res);
          if(res.status<201){
            toast.success('Data Update Successfully');
          };
          setLoading(false);
        }
        catch(err){
          console.log(err);
          setLoading(false);
        };
      }

      else{
        try{
          const res = await axios.post('https://jsonplaceholder.typicode.com/users',dataSubmit);
          if(res.status>200){
            toast.success('Data Submit Successfully');
          };
          setLoading(false);
        }
        catch(err){
          console.log(err);
          setLoading(false);
        };
      }


  };
  return (
    <>

    <ToastContainer/>
      <div className="create-data">
        <form action="" onSubmit={onDataSubmit}>
            <h3>{edit? 'Update A Data':'Create A Data'}</h3>

            <input type="text" value={name} onChange={(e)=>{
              setName(e.target.value);
            }} placeholder='Name' />
            <br />

            <input type="text" value={username} onChange={(e)=>{
              setUsername(e.target.value);
            }} placeholder='Username' />
            <br />

            <input value={email} onChange={(e)=>{
              setEmail(e.target.value);
            }} type="text" placeholder='Email' />
            <br />

            {loading? <ClipLoader color={color}  size={50} />: <button>{edit?'Update':'Submit'}</button>}
        </form>
      </div>
    </>
  );
};

export default CreateData;
