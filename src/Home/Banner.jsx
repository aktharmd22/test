import React, { useState } from 'react'
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectCategory from '../components/SelectCategory';

const title=(
    <h2>Search your One From Thousand of Books</h2>
);
//console.log(productData)
const desc="We have the largest collection of Books"
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];
    

const Banner = () => {
    const [searchInput,setSearchInput]=useState("");
    const [filteredProducts,setFilteredProducts]=useState("")

    //searchfunctionality

    const handleSearch= e=>{
        //console.log(e.target.value)
        const searchTerm=e.target.value;
        setSearchInput(searchTerm)

        //filtering based on search
        const filtered=productData.filter((product)=> product.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setFilteredProducts(filtered);
    }
  return (
    <div className='banner-section style-4'>
        <div className="container">
            <div className='banner-content'>
                {title}
                <form>
                    <SelectCategory select={"all"}/>
                <input type="text" name='search' id='search' placeholder='Search your Books' value={searchInput} onChange={handleSearch}/>
                <button>
                <i class="icofont-search-2"></i>
                </button>
            </form>
            <p>{desc}</p>
            <ul className="lab-ul">
                {
                    searchInput && filteredProducts.map((product,i)=><li key={i}>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>)
                }
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner