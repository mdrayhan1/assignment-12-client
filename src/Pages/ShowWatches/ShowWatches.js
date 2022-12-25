import React from 'react';

const ShowWatches = ({brand}) => {

    const { name, img, location, originalPrice, resalePrice, usedYear, timePosted, sellerName} = brand;

    return (
        <div className="card-body border bg-base-300">
        <div className="justify-center px-4 py-16 text-center bg-base-200">
            <h2 className='text-bold text-xl text-pink-400'>Watch Name: {name}</h2>
            <img className='p-3 ml-2' src={img} alt="" />
            <h2>Location: {location}</h2>
            <h2>Origina lPrice: {originalPrice} Tk</h2>
            <h2>Resale Price: {resalePrice} Tk</h2>
            <h2>Used Year: {usedYear}</h2>
            <h2>Posted Time: {timePosted}</h2>
            <h2>Seller Name: {sellerName}</h2>
        </div>
        <button className="btn btn-outline btn-accent">Book Now</button>
    </div>
    );
};

export default ShowWatches;