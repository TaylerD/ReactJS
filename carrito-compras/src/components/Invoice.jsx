import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { CartContent, Product, DetailProduct, Details, PriceDetail, ProductAmount } from './styledComponents';

const Invoice = () => {
    const context = useContext(CartContext);

    return (
        <>
            <CartContent>

            {/* { console.log("CartContext-en-Invoice", context)} */}

            {                    
                context.cartList.length ?
                <>
                    <br/>
                        <div style={{justifyContent: "flex-start", alignItems : "flex-start", display: "flex", backgroundColor: "#EEEBEA", flexDirection: "column", paddingLeft: "1%", fontSize: "24px"}}>
                            <p>
                                <span><b>Pedido #34782</b></span>
                            </p>
                        </div>
                        <div style={{justifyContent: "flex-start", alignItems : "flex-start", display: "flex", backgroundColor: "#EEEBEA", flexDirection: "column", paddingLeft: "1%", fontSize: "16px"}}>
                        <p>
                        <span>Fecha Compra : 01-08-2022 15:30.00 </span>
                        </p>
                        <p>
                        <span>Fecha Entrega : 02-08-2022 15:30.00 </span>
                        </p>
                        </div>
                    <br/> </>
                : 
                    <><br/></>
                }
            
                {
                    context.cartList.map(item => (
                        <Product key={item.id}>
                            <DetailProduct>
                                <Details>
                                    {item.quantity}  {item.name}   ( ${item.cost} c/u)
                                </Details>
                            </DetailProduct>
                            <PriceDetail>
                                <ProductAmount> ${item.costProduct} </ProductAmount>
                            </PriceDetail>
                    </Product>
                    ))
                }

            </CartContent>
            
                {/* { console.log("Context-Cart", context)} */}

                {                    
                    context.cartList.length ?
                    <><br/><hr/>                                                              
                        <div style={{justifyContent: "flex-end", alignItems : "flex-end", display: "flex", backgroundColor: "#EEEBEA", flexDirection: "column", paddingRight: "20%", fontSize: "24px"}}>
                            <h2>Total ${context.totalCost}</h2>
                        </div>
                        </>
                    : 
                    <><br/><hr/>  
                        <div style={{justifyContent: "center", alignItems : "center", display: "flex"}}>
                        <h2>No hay productos</h2>
                        </div>
                    </>
                }
            </>
    );
}

export default Invoice;