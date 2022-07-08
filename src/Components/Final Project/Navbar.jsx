import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  let nav = useNavigate();
  const logout =()=>{
    localStorage.removeItem('final');
    nav('../', {replace:true});

  };
  return (
    <>
      <div className="navbar">
            <nav>
              <div className="logo"> <Link to='/card' className='logo'>Sanam</Link></div>
     

                <div className="nav-ul">
                    <ul>
                        <li><Link className='nav-link' to='/card'>Home</Link></li>
                        <li><Link className='nav-link' to='/createData'>Create A Data</Link></li>
                        <li><Link className='nav-link' to='/admin'>Admin</Link></li>
                        <li><button onClick={logout}>Log Out</button></li>
                    </ul>
                </div>
            </nav>
        </div> 
    </>
  );
};

export default Navbar;
