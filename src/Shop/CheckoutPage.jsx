import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import '../components/modal.css'
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const [show, setShow] = useState(false)
    const [activeTab, setActiveTab] = useState("visa");

    //handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const location=useLocation();

    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/";

    const handleOrderConfirm=()=>{
        alert("Your Order is placed Succesfully!");
        localStorage.removeItem("cart");
        navigate(from, {replace: true})
    }
    return (
        <div className="modalCard">
            <Button variant='primary' className='py-2' onClick={handleShow}>  Proceed to CheckOut</Button>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered >

                <div className="modal-dialog">
                    <div className="px-3 mb-3">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="tabs mt-3">
                                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                        <li className='nav-item' role='presentation'>
                                            <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                            id='visa-tab'
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls='visa'
                                            aria-selected={activeTab === "visa"}
                                            onClick={()=>handleTabChange("visa")}
                                            href='#visa'
                                            ><img src="https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png" alt="" width="80" /></a>
                                        </li>

                                        <li className='nav-item' role='presentation'>
                                            <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                                            id='paypal-tab'
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls='paypal'
                                            aria-selected={activeTab === "paypal"}
                                            onClick={()=>handleTabChange("paypal")}
                                            href='#paypal'
                                            ><img src="https://www.freepnglogos.com/uploads/paypal-logo-png-16.png" alt="" width="80" /></a>
                                        </li>
                                        
                                    </ul>

                                    {/* content */}
                                    <div className="tab-content" id='myTabContent'>
                                        {/* visa content */}

                                        <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : " "}`} id='visa' role='tabpanel' aria-labelledby='visa-tab'>
                                            {/* visa tab content */}
                                            <div className="mt-4 mx-4">
                                                <div className="text-center">
                                                    <h5>Credit Card</h5>
                                                </div>
                                                <div className="form mt-3">
                                                    <div className="inputbox">
                                                        <input type="text" name='name' id='name' className='form-control' required />
                                                        <span>CardHolder Name</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' className='form-control' required min='1' max='999'/>
                                                        <span>Card Number</span><i className='fa fa-eye'></i>
                                                    </div>
                                                    <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' className='form-control' required min='1' max='999'/>
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' className='form-control' required min='1' max='999'/>
                                                        <span>CVV</span>
                                                    </div>
                                                    </div>
                                                    <div className="px-5 pay">
                                                    <button className="btn btn-primary btn-block my-6" onClick={handleOrderConfirm}>Confirm Order</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/* paypal content */}
                                        <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : " "}`} id='paypal' role='tabpanel' aria-labelledby='paypal-tab'>
                                        <div className="mt-4 mx-4">
                                                <div className="text-center">
                                                    <h5>Paypal Account info</h5>
                                                </div>
                                                <div className="form mt-3">
                                                    <div className="inputbox">
                                                        <input type="text" name='name' id='name' className='form-control' required />
                                                        <span>Enter your e-mail</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' className='form-control' required min='1' max='999'/>
                                                        <span>Your Name</span><i className='fa fa-eye'></i>
                                                    </div>
                                                   
                                                    <div className="d-flex flex-row">
                                                    
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' className='form-control' required min='1' max='999'/>
                                                        <span>Extra info</span>
                                                    </div>
                                                    
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' className='form-control' required min='1' max='999' inactive/>
                                                        <span></span>
                                                    </div>
                                                    
                                                    </div>

                                                    <div className="px-5 pay">
                                                    <button className="btn btn-primary btn-block my-6" onClick={handleOrderConfirm}>Add paypal</button>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>

                                    {/* payent disclaimer */}

                                    <p className='mt-3 px-4 p-Disclaimer'>
                                    <em>Payment Disclaimer:</em> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aspernatur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default CheckoutPage