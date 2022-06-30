import React from 'react';
import imageDefault from '../assets/not-product.png';

function Card(props) {
    return(
            <div className="card">
                <div className="content">
                    {/* <p className="card-result-number">Result # {resultNumber+1}</p> */}
                    <img src={props.image? props.image : imageDefault} alt="no hay imagen" width='200px' height='250px' />
                    <h3>{props.name}</h3>
                    <p>{props.descripction}</p>
                    <p>Stock: {props.stock}</p>
                    <p>Costo: {props.cost}</p>
                </div>
            </div>
    );
};

export default Card;