import React, { useState } from 'react';
import Modale from './Modale';
function Banner() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };


  return (
    <div className="overflow-auto">
      <div className="flex max-w-screen-2xl mx-0 mainTitle relative -mt-8">
        <div>
          <h1 className="text-black pt-28 pr-3 pl-12 font-bold text-4xl width-2/5 relative">
            Find Live Online Classes &<br /> Campus For Kids
          </h1>
          <div
            className={`${active ? '' : 'hidden'}  w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            onClick={handleClick}>
            <img src="/images/plane.jpg" className=" ml-96 pl-64 -mt-16 relative" alt="" />
          </div>
          <h4 className="text-black pt-2 pr-3 pl-12 text-l width-2/5 relative">
            Discover summer campus, classes,drop-ins,workshops, and more. Art,coding,
            <br /> sports, STEM,academics-book it all here.
          </h4>
          <button className="rounded-3xl text-white mt-4 mr-3 ml-12 p-2 text-xl relative mainButton ">
            View Details
          </button>
        </div>
      </div>

       
        
          
      

     
      {/* <section id="featured-services" className="featured-services ">
      <div className="container" data-aos="fade-up">

        <div className="row ">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 ">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 ">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i class="bx bx-file"></i></div>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 ">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i class="bx bx-tachometer"></i></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i class="bx bx-world"></i></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div> 

      </div>
    </section> */}


       <h1 className="mt-8 mb-3 ml-12 text-2xl">Popular Categories</h1>
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">

            <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-white-600 hover:text-black mr-8 font-semibold">
              <img
                src="/images/Dance.svg"
                className="flex-auto w-60 h-60 ml-12 mr-12 font-bold text-white filterProperty "
                alt="Dance"
              />
           
            </div>
            <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-white-600 hover:text-black mr-8 font-semibold">
              <img
                src="/images/Music.svg"
                className=" flex-auto w-60 h-60 ml-12 mr-12 font-bold text-white filterProperty"
                alt="Music"
              />
              
            </div>
            <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-white-600 hover:text-black mr-8 font-semibold">
              <img
                src="/images/Art.svg"
                className="flex-auto w-60 h-60 ml-12 mr-12 font-bold text-white filterProperty"
                alt="Art"
              />
              
            </div>
            <div className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-white-600 hover:text-black mr-8 font-semibold">
              <img
                src="/images/Craft.svg"
                className="flex-auto w-60 h-60 ml-12 mr-12 font-bold text-white filterProperty"
                alt="Craft"
              />
              
            </div>
          </div>
          
<Modale />
    </div>
  );
}

export default Banner;
