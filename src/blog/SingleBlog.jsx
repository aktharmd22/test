import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../Shop/Tags';
import PopularPost from '../Shop/PopularPost';

const socialList = [{ link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", },];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()

    const result = blog.filter((b) => b.id === Number(id))
    return (
        <div>
            <PageHeader title="Blog Page" curPage={" Blog / Blog details"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">

                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                        <p>
                                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis reiciendis nostrum, maxime nesciunt porro inventore expedita ea quo? Facere voluptate itaque laborum, quisquam ullam ex cupiditate natus praesentium, nisi impedit quae, nulla harum aliquid. Totam illum omnis odio perspiciatis facilis excepturi consectetur. Quisquam nihil laudantium ipsum vitae asperiores, rem nobis maxime. Excepturi delectus atque laborum doloremque ducimus nulla at earum, eveniet praesentium? Repudiandae, veniam? Dignissimos, aperiam, aliquid amet accusamus explicabo rem alias architecto natus distinctio cupiditate, cum quibusdam dolorem. Non hic, in et, mollitia consequatur porro ut neque soluta, voluptas iusto ab sint magnam id perspiciatis aliquam alias ducimus delectus!
                                                                        </p>
                                                                        <div className="video-thumb">
                                                                            <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        </div>

                                                                        <p>
                                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolore perferendis porro consequatur temporibus delectus perspiciatis deleniti voluptas! Numquam eum ab sunt rem voluptate nemo obcaecati quia, fugit fuga repellendus magni rerum aspernatur porro. Unde ad hic quis nesciunt voluptate excepturi? Dolorum molestiae ullam architecto et, quisquam saepe voluptatum nostrum tempora minima, aliquid quibusdam aspernatur itaque praesentium dolorem voluptate iusto. Dolorum assumenda est error soluta accusantium, numquam laborum asperiores culpa dignissimos molestiae nemo dolores eligendi perspiciatis ratione deserunt tenetur distinctio fugiat porro qui. Explicabo consequatur assumenda nam, dicta a quos eius quidem nihil facilis magni nesciunt debitis veniam ad tempore!
                                                                        </p>
                                                                        <br />
                                                                        <p>
                                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eveniet possimus porro ipsa unde repellendus ducimus id sit optio inventore culpa esse quos praesentium sequi corporis in pariatur veniam eius aliquam architecto cum illo tempora, itaque mollitia! Veniam laborum quod maxime libero? Eveniet tempora illum quo rem rerum maiores nostrum.
                                                                        </p>
                                                                        <div className="tags-section">
                                                                            <ul className="tags lab-ul">
                                                                                <li>
                                                                                    <a href="">Agency</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="">Buisness</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="">Personal</a>
                                                                                </li>

                                                                            </ul>
                                                                            <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val,i)=>{
                                                                                    <li key={i}>
                                                                                        <a href="" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                })
                                                                            }
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="" className="prev">
                                                    <i className="icofont-double-left"></i>Previous Blog
                                                </a>
                                                <a href="" className='title'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, provident.
                                                </a>
                                            </div>

                                            <div className="right">
                                                <a href="" className="next">
                                                    <i className="icofont-double-left"></i>Next Blog
                                                </a>
                                                <a href="" className='title'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, provident.
                                                </a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <Tags/>
                            <PopularPost/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog