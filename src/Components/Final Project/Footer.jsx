import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer">
            <div className="foot">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam culpa beatae vitae a, suscipit mollitia officia temporibus, velit fugiat ut aperiam dicta quibusdam dignissimos ab explicabo! Illum facilis labore aliquam.</p>
            </div>

            <div className="foot">
                <h3>Links</h3>
                <ul>
                <li><Link className='foot-link text-dec' to='/card'>Home</Link></li>
                <li><Link className='foot-link text-dec' to='/blog'>Blog</Link></li>
                <li><Link className='foot-link text-dec' to='/admin'>Admin</Link></li>
            </ul>
            </div>


            <div className="foot">
                <h3>More Info</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam culpa beatae vitae a, suscipit mollitia officia temporibus, velit fugiat ut aperiam dicta quibusdam dignissimos ab explicabo! Illum facilis labore aliquam.</p>
            </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
