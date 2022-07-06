import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Categories = () => {
    const [categories, setCategories] = useState([]);

    async function getCategories(){
        console.log("getCategories");
        await fetch('https://pg-delsur.herokuapp.com/categories')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCategories(data)
        })
        .catch(err => {
            console.log(err);
        })
    }


    useEffect(()=> {
        getCategories();
    }, [])
    return (
            <div>
                {
                    categories?.length > 0 ? (categories?.map((category) => {
                        return (
                        <li key={category.id} style={{display:'inline'}}>
                           <Link to={`/categories/${category.id}`}>
                            <span>{category.name}</span> |
                            </Link> 
                        </li>)
                    })): ( "Cargando ... " )
                }
                |
            </div>
    )
}