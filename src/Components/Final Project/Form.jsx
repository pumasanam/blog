import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Form = () => {
    const [finalformdata, setFinalFormdata] = useState('');
    let navigate = useNavigate();

    const onformsubmit =(e)=>{
        e.preventDefault();
        navigate('../card', {replace:true});
        localStorage.setItem('final', finalformdata);

    };

    useEffect(()=>{
     
        if(localStorage.getItem('final')){
            navigate('../card', {replace:true});
        }

    },[navigate]);
  return (
    <>
      <div className="form">
        <form action="" onSubmit={onformsubmit}>
            <h2>Login</h2>
            <input type="text" value={finalformdata} onChange={(e)=>{
                setFinalFormdata(e.target.value);
            }} placeholder='UserName' />
            <br />

            <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Form;
