import React from 'react';
import { Link } from 'react-router-dom';


const Brand = ({ brand }) => {
    const { name, image, category_id } = brand;

    return (
        <div>
            <div className='pt-5'>
                <div className="card bg-black text-neutral-content">
                    <div className="card-body items-center text-center text-xl font-bold">
                        <img src={image} alt="" />
                        <h2 className="text-2xl text-yellow-400 font-bold text-center">{name}</h2>
                    </div>
                    <Link to={`/products/${category_id}`}><button>Explore More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Brand;