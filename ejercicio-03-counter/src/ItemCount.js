import { useState } from "react";

const ItemCount = ({stock, init}) => {
    // console.log("stock, init", stock, init);
    const [quantity, setQuantity] = useState(init);
    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1);
        }else{
            alert("Ha superado el stock disponible !");
        }
    }
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity-1);
        }
    }
    return (
        <div>
            <div>
                <div>
                    <button onClick={decrement}> - </button>

                    <strong> {quantity} </strong>

                    <button onClick={increment}> + </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;