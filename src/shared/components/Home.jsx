import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { BsCalendar4Range, BsFillClockFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TbPointFilled } from 'react-icons/tb';


function Home() {

    const gridItems = [

        {
            Date: "July 20,2025",
            Title: "Paper Submission Deadline  Final Extension"
        },
        {
            Date: "August 20,2025",
            Title: "Author Acceptance Notification Description"
        },
        {
            Date: "September 10,2025",
            Title: "Final Manuscript Submission Guidelines"
        },

    ]




    const speaker = [
        {
            name: "A.Aravind ME.Phd",
            position: "Research Analayst"
        },
        {
            name: "A.Aravind ME.Phd",
            position: "Research Analayst"
        },
        {
            name: "A.Aravind ME.Phd",
            position: "Research Analayst"
        },


    ]



    return (
        <div >
            <div className="relative  lg:h-screen bg-cover bg-center " style={{ backgroundImage: "url('/images/herohome3.jpg')" }}>

                <div className="absolute inset-0 bg-[#000000] opacity-0"></div>
                <div className="flex 2xl:gap-15 gap-5 lg:flex-row flex-col-reverse justify-start items-center h-full max-w-[1400px] mx-auto py-20 2xl:pt-20 xl:pt-35 lg:pt-35 md:pt-40 pt-35 " >
                    {/* <img src="/images/herobghome.png" alt="img" className="relative" /> */}
                    <div className="flex-[50] relative z-10  flex flex-col 2xl:space-y-8 xl:space-y-5 lg:space-y-5 space-y-5 justify-center  max-w-[900px] px-5 md:px-10 lg:px-5" >
                        <div className="flex md:gap-10 gap-5 items-center">
                            <p className="text-[#CD40BF] poppins-extrabold md:text-9xl text-8xl">28</p>
                            <div className="space-y-2 max-w-[500px]">
                                <div className=""><h2 className="text-white namdhinggo-extrabold md:text-[26px] text-[20px]">Sep, 2025</h2></div>
                                <div className=""><h2 className="text-white namdhinggo-extrabold md:text-[26px] text-[20px]">Beijing, China</h2></div>
                            </div>
                        </div>
                        <h1 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[28px] text-[25px] namdhinggo-extrabold text-white lg:text-start text-start">International Conference on <span className="text-[#CD40BF]">Internet of Things, Machine Learning, </span>and  <span className="text-[#CD40BF]">Data Analytics</span></h1>
                        <p className="text-[16px] md:text-[18px] leading-[30px] text-justify inter-regular text-white">The conference brings together researchers and professionals to share advancements in IoT, machine learning, and data analytics, fostering collaboration, innovation, and the development of intelligent, data-driven technologies for the future.</p>
                        <div className='flex flex-col md:flex-row md:gap-20 gap-7'>
                            <Link to="/paper-submission">
                                <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex lg:justify-start  justify-center ">
                                    <button className="cursor-pointer flex items-center gap-4 px-4   bg-[#CD40BF] text-white   lg:py-1 py-2 rounded-lg transition-all duration-300 ">
                                        Register Now <FaArrowRightLong className=" mt-0.5 text-[25px]" />
                                    </button>
                                </div>
                            </Link>

                            <Link to="/about">
                                <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex lg:justify-start  justify-center ">
                                    <button className="cursor-pointer flex items-center gap-4 px-4   bg-white text-[#CD40BF]   lg:py-1 py-2 rounded-lg transition-all duration-300 ">
                                        Learn more <FaArrowRightLong className=" mt-0.5 text-[25px]" />
                                    </button>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className="relative max-w-[565px] px-4  ">
                        <img src="/images/herohome2.png" alt="img" className="" />
                    </div>
                </div>

            </div>

            <div className="bg-[#FFF9FD] lg:pt-15 pt-5 pb-10 px-4">
                <div className="">


                    <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center max-w-[1400px] mx-auto">
                        <div className=" max-w-[600px] w-fit"><img src="/images/abouthome.png" alt="image3" className=" hidden lg:block" loading="lazy" /></div>
                        <div className="space-y-5">
                            <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto lg:mx-0 bg-white "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">About the Conference</h2></div>
                            <div className=" max-w-[600px] w-fit"><img src="/images/abouthome.png" alt="image3" className=" lg:hidden block" loading="lazy" /></div>

                            <h2 className="namdhinggo-bold lg:text-[24px] text-[20px]">Fostering Global Excellence in <span className="text-[#CD40BF]">IoT, Machine Learning, </span> and <span className="text-[#CD40BF]">Data Analytics Research</span></h2>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">We are committed to advancing research and innovation by bringing together global experts in IoT, machine learning, and data analytics, fostering collaboration, sharing knowledge, and promoting real-world applications through interactive sessions and discussions.</p>
                            <div className="mt-5 space-y-3 text-justify">
                                <div className="">
                                    <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">  Interdisciplinary Focus</h2>
                                    <div className="flex gap-3 ">
                                        <TbPointFilled className=" text-[35px] text-[#CD40BF] flex shrink-0  mt-2" />
                                        <p className="inter-regular opacity-85 text-[16px] leading-[30px] ">Brings together IoT, machine learning, and data analytics to promote integrated research, innovation, and cross-domain knowledge sharing.</p></div>
                                </div>
                                <div className="">
                                    <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Global Participation</h2>
                                    <div className="flex gap-3 "><TbPointFilled className=" text-[35px] text-[#CD40BF] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px] ">Includes researchers and professionals worldwide, creating a diverse platform for exchanging ideas, cultural perspectives, and global technology trends.</p></div>
                                </div>

                            </div>
                            <Link to="/about">
                                <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex justify-end  mt-5 ">
                                    <button className="cursor-pointer flex items-center gap-4 px-4   bg-[#CD40BF] text-white   lg:py-1 py-2 rounded-lg transition-all duration-300 ">
                                        Read more<FaArrowRightLong className=" mt-0.5 text-[25px]" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0 lg:mt-15 mt-10">

                <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center">


                    <div className="space-y-5 ">
                        <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto lg:mx-0 bg-white "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Our Mission</h2></div>
                        <div className="max-w-[600px] w-fit lg:hidden block " ><img src="/images/scopehome.jpg" alt="image3" className="  " loading="lazy" /></div>
                        <h2 className="namdhinggo-bold lg:text-[24px] text-[20px]">Advancing Excellence in <span className="text-[#CD40BF]">Intelligent </span> and <span className="text-[#CD40BF]">Data-Driven Systems</span></h2>
                        <p className=" text-[16px] leading-[30px] text-justify mt-5 inter-regular opacity-85">Our mission is to advance knowledge and innovation in IoT, machine learning, and data analytics by fostering collaboration, promoting impactful research, and providing a global platform for sharing real-world solutions and technological breakthroughs.</p>
                        <div className="mt-5 space-y-3 text-justify">
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Promoting Real-world Applications </h2>
                                <div className="flex gap-3 ">  <TbPointFilled className=" text-[35px] text-[#CD40BF] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Explores principles and practices that place users at the center of technology design, ensuring intuitive, accessible, and meaningful interactions across digital systems.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Supporting Knowledge and Skill Development</h2>
                                <div className="flex gap-3 ">  <TbPointFilled className=" text-[35px] text-[#CD40BF] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Focuses on improving system usability, satisfaction, and engagement through methods like user testing, behavior analysis, and interface evaluation.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Bridging Academia and Industry Needs </h2>
                                <div className="flex gap-3 ">  <TbPointFilled className=" text-[35px] text-[#CD40BF] flex shrink-0  mt-2" /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Covers the integration of AI technologies such as machine learning, natural language processing, and adaptive interfaces to enhance user interaction and personalization.</p></div>
                            </div>

                        </div>
                    </div>

                    <div className="max-w-[600px] w-fit flex justify-center items-center"><img src="/images/scopehome.jpg" alt="image3" className="   hidden lg:block" loading="lazy" /></div>

                </div>
            </div>




            <div className="bg-[#FFF9FD] mt-15" >
                <div className="max-w-[1400px] mx-auto pt-15 space-y-10  pb-15 px-4">
                    <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto lg:mx-0 bg-white  "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Our Featured Speakers</h2></div>
                    <p className=" text-[16px] leading-[30px] text-justify mt-5 inter-regular opacity-85">Our featured speakers include esteemed experts, innovators, and thought leaders from academia, industry, and research institutions worldwide. With deep expertise in IoT, machine learning, and data analytics, they will share transformative ideas, breakthrough research, and real-world experiences. Their sessions aim to inspire attendees, encourage collaboration, and spark impactful discussions on the future of intelligent and data-driven technologies.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-20 xl:gap-10 lg:gap-10 gap-10 lg:mt-7 mt-5 place-items-center  ">
                        {speaker.map((item, index) => (
                            <div key={index} className="w-full group relative">
                                {/* <div className="bg-white rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.25)] relative overflow-hidden">
                                    <div className="flex justify-center">
                                        <img src="/images/cnhuman.png" alt="image" className="w-full max-w-[500px] h-auto" loading='lazy' />
                                    </div>

                                    <div className="absolute bottom-0 right-0 w-[60px] h-[60px] bg-[#CD40BF] rounded-tl-full transition-all duration-700 group-hover:hidden"></div>
                                    <div className="absolute bottom-0 right-0 flex flex-col justify-center items-center text-white bg-[#CD40BF] max-w-[500px] md:h-[250px] h-[180px] rounded-tl-full rounded-r-[15px] py-6 px-18 mb-0 md:mb-4 lg:mb-10 transform translate-y-0 md:translate-y-1/4 lg:translate-y-1/3 lg:opacity-0  lg:group-hover:opacity-100 transition-all duration-700">
                                        <p className="namdhinggo-extrabold text-[18px] md:text-[20px] lg:text-[24px]">{item.name}</p>
                                        <p className="namdhinggo-medium text-[16px] md:text-[18px] lg:text-[20px]">{item.position}</p>
                                    </div>
                                </div> */}
                                <div className="bg-white rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.25)] relative overflow-hidden group max-w-[500px] mx-auto">
                                    
                                    <div className="flex justify-center">
                                        <img src="/images/cnhuman.png"   alt="image" className="w-full h-auto" loading="lazy" />
                                    </div>

                                    <div
                                        className=" absolute bottom-0 right-0  lg:w-[60px] lg:h-[60px] w-[220px] h-[180px]  bg-[#CD40BF]  rounded-tl-full  transition-all duration-700  lg:group-hover:w-[250px]  lg:group-hover:h-[220px]  flex items-center justify-center  overflow-hidden" >
                                        <div className=" lg:opacity-0 opacity-100 translate-y-2 transition-all duration-300 delay-300 group-hover:opacity-100 group-hover:translate-y-0 text-white text-center px-4" >
                                            <p className="namdhinggo-extrabold text-[14px] md:text-[16px] lg:text-[18px] leading-tight">
                                                {item.name}
                                            </p>
                                            <p className="namdhinggo-medium text-[12px] md:text-[14px] lg:text-[16px] leading-tight">
                                                {item.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


            <div className="pb-15  max-w-[1400px] mx-auto mt-15 px-4 2xl:px-0">
               <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto  bg-white  "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px]  namdhinggo-extrabold text-[#CD40BF]  ">Join Us at ICITMLDA 2025</h2></div>
                <p className="md:text-[18px] text-[16px]  inter-semibold lg:text-center mt-5  opacity-85 text-justify">Experience groundbreaking research presentations and network with industry leaders</p>

                <div className=" mt-10 flex items-center  ">
                    <div className=" max-w-[1400px] mx-auto "  >
                        <div className=" bg-[#FFF9FD] rounded-[15px] border-3 border-[#CD40BF]  text-center space-y-5 px-6 py-5">
                            <p className="namdhinggo-extrabold 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] text-[#CD40BF]">Ready to Join the Innovation ?</p>
                            <p className="inter-medium text-[16px] text-[#CD40BF] text-justify md:text-center ">Register now and secure your spot today to connect with global experts, explore emerging technologies, and be part of shaping the future of computer science.</p>
                            <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 space-y-5  justify-center items-start sm:items-center lg:items-start">
                                <div className="flex gap-3"><IoLocationSharp className='text-[26px] text-[#CD40BF]' /><p className="namdhinggo-extrabold text-[20px] text-[#CD40BF]">Beijing, China</p></div>
                                <div className="flex gap-3"><FaCalendar className='text-[24px] text-[#CD40BF] ' /><p className="namdhinggo-extrabold text-[20px] text-[#CD40BF]">28th to 30th Sep, 2025</p></div>
                                <div className="flex gap-3"><BsFillClockFill className='text-[24px] text-[#CD40BF] ' /><p className="namdhinggo-extrabold text-[20px] text-[#CD40BF]">9:00 AM – 5:00 PM</p></div>
                            </div>
                            <Link to="/paper-submission">
                                <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex   justify-center ">
                                    <button className="cursor-pointer flex items-center gap-4 px-4   bg-[#CD40BF] text-white   lg:py-1 py-2 rounded-lg transition-all duration-300 ">
                                        Register Now <FaArrowRightLong className=" mt-0.5 text-[25px]" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Home