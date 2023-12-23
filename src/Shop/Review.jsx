import React, { useState } from 'react'
import Rating from '../components/Rating';

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },];

    const reviewtitle="Add a Review"
const Review = () => {
    const [reviewShow,setReviewShow]=useState(true);
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={()=>setReviewShow(!reviewShow)}>Description</li>
                <li className='rev'  onClick={()=>setReviewShow(!reviewShow)}>Review 4</li>
            </ul>

            {/* desc and Review */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className="review-showing">
                    <ul className="content lab-ul">
                        {
                            ReviewList.map((review,i)=>(
                                <li key={i}>
                                    <div className='post-thumb'> 
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>

                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Add review filed */}

                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviewtitle}</h5>
                            </div>

                            <form action="action" className='row'>
                                <div className="col-md-4 col-12">
                                    <input type="text" id='name' placeholder='Full Name' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" id='email' placeholder='Email Id' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-1'>Your Rating:</span>
                                        <Rating/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message" rows="8" placeholder='Type your Review'></textarea>
                                </div>

                                <div className="col-12">
                                    <button type='submit' className='default-button'>
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className="description">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in laboriosam hic reprehenderit perspiciatis, voluptatibus nostrum non itaque nemo repudiandae officiis fugiat mollitia porro natus molestiae dignissimos explicabo temporibus? Ipsum illo corrupti amet, eveniet ducimus quia alias culpa ea, similique, blanditiis voluptas eum iusto commodi? Vero modi nisi eveniet id?

                        <div className="post-item">
                            <div className="post-thumb">
                                <img src="/src/assets/images/shop/01.jpg" alt="" />
                            </div>
                            <div className="post-content">
                                <ul className="lab-ul">
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, odit.</li>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, odit.</li>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, odit.</li>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, odit.</li>
                                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, odit.</li>
                                </ul>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, voluptatibus dignissimos totam soluta aspernatur praesentium esse eum temporibus vero quis incidunt laudantium sint saepe vitae libero eius, atque perferendis dolores magnam necessitatibus. Quod atque cumque quis accusantium, dignissimos sunt laborum, vitae quam eligendi aliquid, asperiores aspernatur quisquam!</p>
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Review