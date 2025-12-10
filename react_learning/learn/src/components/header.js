import Search from "./Search";
import { Link } from "react-router-dom";
export function Header ({cartItems}){
    return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to=''><img width="40px" height={'40px'} src="/images/logo1.png" style={{borderRadius:'15px'}}/></Link>
          
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search/>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to='/test'>
        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">{cartItems.length}</span>
        </Link>
        {console.log(cartItems,'this')}
      </div>
    </nav>
    )
}