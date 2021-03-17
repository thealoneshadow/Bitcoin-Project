import React,{useState} from 'react'
function Banner() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
    return (
        <div>
            <div className="flex max-w-screen-2xl mx-0 mainTitle relative -mt-12">
        <div>
        <h1 className="text-black pt-28 pr-3 pl-20 font-bold text-4xl width-2/5 relative">Find Live Online Classes &<br/> Campus For Kids</h1>
         <div className={`${active ? '' : 'hidden'}  w-full lg:inline-flex lg:flex-grow lg:w-auto`} onClick={handleClick}>
        <img src="plane.jpg" className=" ml-96 pl-64 -mt-16 relative" alt=""/>
        </div>
        <h4 className="text-black pt-3 pr-3 pl-20 text-l width-2/5 relative">Discover summer campus, classes,drop-ins,workshops, and more. Art,coding,<br /> sports, STEM,academics-book it all here.</h4>
        <button className="rounded-3xl text-white mt-4 mr-3 ml-20 p-2 text-xl relative mainButton ">
          View Details
          </button>
      </div>
     </div>
     
     <div className="flex-1 font-bold">
       <h1 className="mt-3 mb-3 ml-8 text-2xl">Popular Categories</h1>
       <div className="flex mt-8">
         <div className="relative items-center text-white">
          <img src="Dance.svg" className="inline-flex w-60 h-60 ml-12 mr-12 font-bold text-white filterProperty" alt="Dance"/>  
          <div className="absolute top-2/4 left-2/4 ">Dance</div>
         </div>
      
      
       
      <img src="https://skyandtelescope.org/wp-content/uploads/2015-04-15_552ec785e77b6_download-1.jpg" className="inline-flex w-60 h-60 ml-12 mr-12 ring-black"/>
      <img src="https://skyandtelescope.org/wp-content/uploads/2015-04-15_552ec785e77b6_download-1.jpg" className="inline-flex w-60 h-60 ml-12 mr-12"/>
      <img src="https://skyandtelescope.org/wp-content/uploads/2015-04-15_552ec785e77b6_download-1.jpg" className="inline-flex w-60 h-60 ml-12 mr-12"/>
      </div>
      
     </div>
     
     
        </div>
    )
}

export default Banner
