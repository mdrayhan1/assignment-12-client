import React from 'react';
import { useLoaderData } from "react-router-dom";
import ShowWatches from '../../ShowWatches/ShowWatches';


const EachWatches = () => {
    const showBrands = useLoaderData();
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
           {
            showBrands.map(brand => 
            <ShowWatches
            key={brand._id}
            brand={brand}
            ></ShowWatches> )
           }
        </div>
    );
};

export default EachWatches;