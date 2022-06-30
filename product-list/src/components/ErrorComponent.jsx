import React from 'react';
import errorImage from '../assets/not-product.png';

function ErrorComponent(props) {
    return (
        <div className="error-container">
            <img src={errorImage} />
            <br />
            {props.message}
        </div>
    )
};

export default ErrorComponent;