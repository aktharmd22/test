import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
import CheckoutPage from './CheckoutPage';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    //fetch cart item from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems)
  }, [])

  //calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  }

  //handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    //update from local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  //handle quantity decrease

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      //update from local storage
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }

  //handle item remove

  const handleItemRemove = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    //update new cart
    setCartItems(updateCart);

    updateLocalStorage(updateCart);

  }

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  //cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
      return total + calculateTotalPrice(item);
    }, 0)

    //order total
    const orderTotal = cartSubtotal;
  
  return (
    <div>
      <PageHeader title={"shop cart"} curPage={"cart page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top*/}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* table body */}

                <tbody>
                  {
                    cartItems.map((item, i) => (
                      <tr key={i}>
                        <td className="product-item cat-product">
                          <div className="p-thumb">
                            <Link to="/shop">
                              <img src={item.img} alt="" />
                            </Link>
                          </div>
                          <div className="p-content">
                            <Link to="/shop">{item.name}</Link>
                          </div>

                        </td>

                        <td className="cat-price">
                          $ {item.price}
                        </td>

                        <td className="cat-quantity">
                          <div className="cart-plus-minus">
                            <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                            <input type="text" name="qtybutton" id="" className='cart-plus-minus-box' value={item.quantity} />
                            <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                          </div>
                        </td>

                        <td className="cat-toprice">
                          ${calculateTotalPrice(item)}
                        </td>

                        <td className="cat-edit">
                          <a href="#" onClick={() => handleItemRemove(item)}>
                            <img src={delImgUrl} alt="" />
                          </a>
                        </td>
                      </tr>
                    )
                    )
                  }
                </tbody>
              </table>
            </div>

            {/* cart top ends */}

            {/* cart bottom */}

            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form action="" className="coupon">
                  <input type="text" name="coupon" id="" placeholder='Coupon code...' />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <form action="" className='cart-checkout'>
                  <input type="submit" value="Update Cart" />

                  <div>
                    <CheckoutPage/>
                  </div>
                </form>
              </div>
              {/* checkout box end */}
            

            {/* shipping box */}

            <div className="shiping-box">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="calculate-shiping">
                    <h3>Calculate Shipping</h3>
                    <div className="outline-select">
                      <select>
                        <option value="">Select Location</option>
                        <option value="KSA">Saudi Arabia</option>
                        <option value="UAE">UAE</option>
                        <option value="QAT">Qatar</option>
                        <option value="BAH">Bahrain</option>
                      </select>
          

                    </div>

                    <input type="text" placeholder='postalCode/ZIP' className='mt-3' />
                    <button type='submit' className='lab-btn text-white mt-3 p-3'>Update Address</button>

                  </div>
                </div>

                <div className="col-md-6 col-12">
                  <div className="cart-overview">
                    <h3>Cart Total</h3>
                    <ul className="lab-ul">
                      <li>
                        <span className="pull-left">Cart Subtotal</span>
                        <p className="pull-right">${cartSubtotal}</p>
                      </li>
                      <li>
                        <span className="pull-left">Shipping and Handling</span>
                        <p className="pull-right">Free Shipping</p>
                      </li>
                      <li>
                        <span className="pull-left">Cart Subtotal</span>
                        <p className="pull-right">${orderTotal.toFixed(2)}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage