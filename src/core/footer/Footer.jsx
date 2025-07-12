import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#CD40BF] text-white rounded-tl-xl rounded-tr-xl">
      <div className=" mx-auto px-5 max-w-[90rem]  lg:py-10 py-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  md:gap-8 gap-8 mt-5 lg:mt-0 ">
          <div className='text-center md:text-left flex flex-col justify-center items-start'>
            {/* <Link to='/'>

              <img className='md:w-45 w-35' src="/images/ICITMLDA.png" alt="logo" />
            </Link> */}
            <Link to="/" className="text-white text-4xl namdhinggo-extrabold">
              ICITMLDA
            </Link>

          </div>
          <div className='lg:mx-auto md:text-left text-start '>
            <h4 className="lg:text-xl poppins-bold mb-2 ">Quick Links</h4>
            <ul className=' lg:text-base text-sm inter-medium space-y-2'>
              <li><a href="/" className="">Home</a></li>
              <li><a className=" w-fit"> <Link to='/about'>About the Conference</Link></a></li>
              <li><a className=""><Link to='/scope'>Scope</Link> </a></li>
              <li><a className=""><Link to='/organizing-committee'>Organization Committee</Link></a></li>
              <li><a className=""><Link to='/editorial-board'>Editorial Board</Link> </a></li>
            </ul>
          </div>
          <div className='lg:ml-auto  md:text-left text-start  '>
            <div className='flex gap-4 flex-wrap justify-start items-end '>
              <div className=''>
                <h4 className="lg:text-xl poppins-bold mb-2 ">Registration Guide</h4>
                <ul className="lg:text-base text-sm inter-medium space-y-2">
                  <li><a className=""><Link to='/key-dates'>Key Dates</Link> </a></li>
                  <li><a className=""><Link to='/conference-tracks'>Conference Tracks</Link></a></li>
                  <li><a className=""><Link to='/paper-submission'>Paper submission </Link>  </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='lg:ml-auto  md:text-left text-start  '>
            <div className='flex gap-4 flex-wrap justify-start items-end '>
              <div className=''>
                <h4 className="lg:text-xl poppins-bold mb-2 ">Contact Info</h4>
                <ul className="lg:text-base text-sm space-y-2">
                  <li><a className=" inter-medium"><Link to=''>Beijing, China</Link></a></li>
                  <li><a className=" inter-medium"><Link to=''>info.icitmlda@gmail.com</Link></a></li>
                  <li><a className=" inter-medium"><Link to=''>+91 8870212121</Link></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-white h-[1px]   mx-auto  "></h1>
      <div className='grid lg:grid-cols-3 grid-cols-1  items-center    py-3 '>
        <div>
        </div>
        <div className="text-center md:text-base text-xs inter-regular">
          <p>© 2025 <span className='' > <Link to="/" target='_blank'>ICITMLDA </Link> </span> . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;