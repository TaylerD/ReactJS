import { Fragment, useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { CartContent, Product, DetailProduct, Details, PriceDetail, ProductAmountContainer, ProductAmount, Price } from './styledComponents';
import { Button } from '@material-ui/core';

const Cart = () => {
    const context = useContext(CartContext);

    return (
        <>
            <br/>
            <CartContent>
                {
                    context.cartList.map(item => (
                        <Product key={item.id}>
                            <DetailProduct>
                                <img style={{width: "150px"}} src={item.image} />
                                <Details>
                                    <span>
                                        <b>Producto:</b> {item.name}
                                    </span>
                                    <Button variant="contained" color="secondary" onClick={() => context.deleteProduct(item.id)} >Eliminar Producto</Button>
                                </Details>
                            </DetailProduct>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount> {item.quantity} items ${item.cost} c/u </ProductAmount>
                                </ProductAmountContainer>
                                <Price>${item.costProduct}</Price>
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
                            <h2>Total</h2>
                            <h2>${context.totalCost}</h2>
                        </div></>
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

export default Cart;