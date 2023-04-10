import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between h-[50px] italic text-white bg-slate-400 items-center px-5 ">
        <h3>Store</h3>
        <div>
          <Link to="/">Store</Link>
          <Link to="/favori" className='ml-3' >Favorites</Link>
        </div>
      </div>
    </div>
  );
}
