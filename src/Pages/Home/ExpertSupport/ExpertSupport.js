import React from 'react';

const ExpertSupport = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://cdn.shopify.com/s/files/1/0577/7027/9106/files/Chat_with_an_expert_2_185x_crop_center.png?v=1632859784" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Chat With An Expert</h2>
                <p className="mb-5">Question or concern? Not sure what to get? Facing <br />
                    Difficulties buying a Watch?! Our team is here to help!</p>    <div className="card-actions">
                    <button className="btn btn-black text-white-500 text-bold">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default ExpertSupport;