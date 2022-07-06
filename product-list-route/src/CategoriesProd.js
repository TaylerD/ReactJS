import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Products from './components/Products'

export const CategoriesProd = () => {
  const { id } = useParams();
  useEffect(()=>{
    console.log(id);
  })
  return (
    <div>
        <Products category={id}></Products>
    </div>
  )
}