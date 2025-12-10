import { Fragment } from "react/jsx-runtime"
import { ProductCarts } from "../components/productCarts"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
export function Home(){
  const [products,setProducts]=useState([])
  const [searchParams , setSearchParams]=useSearchParams()
  useEffect(()=>{
  

      fetch(process.env.REACT_APP_API_URL+"/products?"+searchParams)
      .then(res=>res.json())
      .then(res =>{setProducts(res.product)
    console.log(res,'res')})
      .then(console.log(products))
    
      setProducts([])
    
  },[searchParams])
    return(
        <Fragment>

    <h1 id="products_heading" style={{
      textAlign:'center'
    }}>Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">
        {products.map((product)=> <ProductCarts key={product._id} product ={product}/> )}
        {/* <ProductCarts/> */}
      </div>
    </section>


        </Fragment>
    )
}
// export default  Index;