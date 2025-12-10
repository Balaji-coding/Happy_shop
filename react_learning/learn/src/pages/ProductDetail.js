import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export  function ProductDetail({cartItems,setCartItems}){
    const [product,setProduct]=useState(null);
    const {id} =useParams();
    const [count,setCount]=useState(1)
  useEffect(()=>{
      fetch(process.env.REACT_APP_API_URL+"/products/"+id)
      .then(res=>res.json())
      .then(res =>{setProduct(res.product)
    console.log(res,'res')})
      .then(console.log(product))    
  },[])
  const addtocart =()=>{
    const itempre = cartItems.find((item)=>item.product._id ==product._id)
    if(!itempre){
        const newItem ={product,count}
            setCartItems((state)=>[...state,newItem])
    }
    else{
        cartItems.map((item)=>{
            if(item.product._id ==product._id){
                item.count = count
            }
        })
    }
    console.log('cart values',cartItems)
  }
    return (
        product &&
            <div className="container container-fluid">
                {console.log('product',product)}
        <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-7 img-fluid" id="product_image">
                <img src={product?.images[0].image} alt="sdf" height="500" width="500"/>
            </div>

            <div className="col-12 col-lg-5 mt-5">
                <h3>{product?.name}</h3>
                <p id="product_id">Product # {product._id}</p>

                <hr/>

                <div className="rating-outer">
                    <div className="rating-inner" style={{width:`${product?.ratings/5 *100}%`}}></div>
                </div>
           

                <hr/>

                <p id="product_price">${product?.price}</p>
                <div className="stockCounter d-inline">
                    <span className="btn btn-danger minus" onClick={()=>
                    {
                        if(count>1){
                            setCount(count-1)}
                        }
                        }>-</span>

                    <input type="number" className="form-control count d-inline" value={count} readOnly />

                    <span className="btn btn-primary plus" onClick={()=>{
                        if(product.stock>count){
                            setCount(count+1)
                        }
                    }}>+</span>
                </div>
                 <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={()=>addtocart()}>Add to Cart</button>

                <hr/>

                <p>Status: <span id="stock_status" className={product.stock >0 ?  "text-success":"text-danger" }>{product.stock >0 ? 'In Stock':'Out Of Stock'}</span></p>

                <hr/>

                <h4 className="mt-2">Description:</h4>
                <p>{product?.description}</p>
                <hr/>
                <p id="product_seller mb-3">Sold by: <strong>{product?.sellor}</strong></p>
				
                <div className="rating w-50"></div>
						
            </div>

        </div>

    </div>
    )
}