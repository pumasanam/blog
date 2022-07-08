import React from 'react';
import {Link} from 'react-router-dom';

const Storage = ({list}) => {
  return (
    <>
      <div className="storage" key={list.id}>
           
            <Link to={`/${list.id}`}> <h3>{list.name}</h3></Link>
            <h4>{list.username}</h4>
            
      </div>
    </>
  );
};

export default Storage;
