import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Model from './Model';
import {Link} from 'react-router-dom';
const Admin = () => {
    const [table, setTable] = useState([]);
    const [model, setModel] = useState(false);
    const [id, setid] = useState();

    const fetch = async ()=>{
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTable(res.data);
        }
        catch(err){
            console.log(err);
        }
    };

    useEffect(()=>{
        fetch();
    },[]);

    const AdminDelete = async (id)=>{
        setModel(true);
        setid(id);
    };
  return (
    <>
    {model && id && <Model fetch={fetch} setModel={setModel} id={id}/>}
      <div className="admin">
        <h2>Admin Data</h2>

        <table border='1'>
            <thead>
                <th>Sn</th>
                <th>Name</th>
                <th>Username</th>
                <th>Action</th>
            </thead>

            <tbody>
                {table.map((list, index)=>{
                    return (
                        <>
                        <tr key={index}>
                            <td>{list.id}</td>
                            <td>{list.name}</td>
                            <td>{list.username}</td>
                            <td>
                                <Link to={`/createData/${list.id}`}><button className='Edit'>Edit</button></Link>
                                <button onClick={()=>{
                                    AdminDelete(list.id);
                                }}>Delete</button>
                            </td>
                        </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
