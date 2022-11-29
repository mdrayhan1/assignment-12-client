import React, { useEffect, useState } from 'react';
import Brand from './Brand';

const DifferentBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("https://discover-watches-server.vercel.app/categoryData")
            .then((res) => res.json())
            .then((data) => setBrands(data));
    }, []);

    return (
        <section className='pt-14'>
            <p className='text-3xl font-bold text-center'>Shop Watches By Brands...</p>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 pt-7'>
                {brands.map((brand) => (
                    <Brand
                        key={brand._id}
                        brand={brand}
                    ></Brand>
                ))}
            </div>
        </section>
    );
};

export default DifferentBrands;
// 