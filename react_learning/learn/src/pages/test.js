import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime"
export function Test({cartItems ,setCartItems}){
    const [orderState,setorderState]=useState('')
    const increse=(item)=>{
        if(item.product.stock> item.count){
                const updated =cartItems.map((i)=>{
                    if(item.product._id == i.product._id){
                        i.count++
                    }
                    return i;
                }
            )
            setCartItems(updated)
            }
    }
    const decrese=(item)=>{
        if(item.count>0){
                const updated =cartItems.map((i)=>{
                    if(item.product._id == i.product._id){
                        i.count--
                    }
                    return i;
                }
            )
            setCartItems(updated)
            }
    }
    const remove=(item)=>{
                const updated =cartItems.filter((i)=>{
                    if(item.product._id !== i.product._id){
                        
                        return true;
                    }
                }
            )
            setCartItems(updated)
            }

    function placeOrder(){
        fetch(process.env.REACT_APP_API_URL+'/orders',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(cartItems)
        })
        .then(()=>{
            setCartItems([]);
            setorderState('complited')

        })
        return
    }
    return (
        cartItems.length>0?
    <Fragment>
        <div className="container container-fluid">
        <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
                {cartItems.map((item)=>
                <Fragment>
                    {console.log(item.product.images[0].image,'item')}
                <hr />
                <div className="cart-item">
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src={item.product.images[0].image} alt="Laptop" height="90" width="115"/>
                        </div>

                        <div className="col-5 col-lg-3">
                            <Link to={"/products/"+item.product._id}>{item.product.description}</Link>
                        </div>


                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">${item.product.price}</p>
                        </div>

                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={()=>decrese(item)}>-</span>
                                <input type="number" className="form-control count d-inline" value={item.count} readOnly />

								<span className="btn btn-primary plus" onClick={()=>increse(item)}>+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={()=>remove(item)}></i>
                        </div>

                    </div>
                </div>
                </Fragment>
                )}
                <hr />
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((acc,item)=>{return acc+item.count },0)} (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">${cartItems.reduce((acc,item)=>{return acc+(item.product.price * item.count) },0)}</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block" onClick={placeOrder}>Place Order</button>
                </div>
            </div>
        </div>
    </div>
    </Fragment>: (orderState=='complited')?<h2 style={{textAlign:'center',marginTop:'15px'}}>Order Placed Successfully</h2>:<h2 style={{textAlign:'center',marginTop:'15px'}}>Your Cart Is Empty</h2>
    )
}