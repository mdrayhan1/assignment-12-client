import React from 'react';

const Banner = () => {
  return (
    // <div className="w-full">
    //   <p className='text-center text-3xl font-bold'>EXCLUSIVE SELECTION OF <br />
    //       DIFFERENT WATCHES</p>
    //   <figure className=''>
    //     <img src="https://cdn.shopify.com/s/files/1/0577/7027/9106/files/Vintage_Watch.jpg?v=1632846473" alt="car!" />
    //   </figure>
    // </div>  
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0577/7027/9106/files/Vintage_Watch.jpg?v=1632846473")` }}>
  <div></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-0 text-3xl font-bold">EXCLUSIVE SELECTION OF <br />
           DIFFERENT WATCHES</h1>
    </div>
  </div>
</div>  
  );
};

export default Banner;