import React from 'react';
import { Categories } from './Categories';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
       <Link to={"/"}><span>Home</span></Link>
       <Categories></Categories>
    </>
  );
};
