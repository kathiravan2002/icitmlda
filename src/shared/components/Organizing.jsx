import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Organizing() {


    const organize = [
        {
            topic: "Conference Planning",
            content: "The committee defines the conference theme, scope, and objectives while outlining the structure, timelines, and major events for a successful academic gathering.",
        },
        {
            topic: "Speaker and Session Coordination",
            content: "They invite keynote speakers, assign session chairs, and coordinate technical sessions to ensure diverse and impactful presentations across the conference themes.",
        },
        {
            topic: "Paper Review Management",
            content: "The committee oversees the call for papers, assigns reviewers, and ensures a transparent peer-review process to maintain the academic quality of accepted submissions.",
        },
        {
            topic: "Logistics and Scheduling",
            content: "They manage the venue, session schedules, registration, and technical setup, ensuring smooth execution of all conference activities with timely support.",
        },
        // {
        //     topic: "Communication and Promotion",
        //     content: "Responsible for promoting the event through academic networks, emails, and social media while providing timely updates and support to all participants and stakeholders",
        // },
        // {
        //     topic: "Sponsorship and Collaboration",
        //     content: "The committee seeks sponsorships and builds collaborations with institutions and industry partners to enhance the reach, funding, and impact of the conference.",
        // },


    ]


    const team = [
        {
            title: "Chairman",
            name: "Dr. Sundaram M.E., Ph.D.,",
            position: "Principal",
            qualification: "M.E., Ph.D.,",
            location: "Chennai"
        },
        {
            title: "Chairman",
            name: "Dr. Sundaram M.E., Ph.D.,",
            position: "Principal",
            qualification: "M.E., Ph.D.,",
            location: "Chennai"
        },
        {
            title: "Chairman",
            name: "Dr. Sundaram M.E., Ph.D.,",
            position: "Principal",
            qualification: "M.E., Ph.D.,",
            location: "Chennai"
        },



    ]
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-75 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Organizing Committee</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#CD40BF] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#CD40BF] "><span className="text-white">/ </span>Organizing Committee</h2>
                    </div>
                </div>
            </div>



            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  ">
                <div className="space-y-4">
                    <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit bg-white lg:mt-15 mt-10"><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Organizing Committee</h2></div>
                    <h2 className="namdhinggo-bold lg:text-[24px] text-[20px]">International Conference on <span className="text-[#CD40BF]">IoT, Machine Learning, </span> and <span className="text-[#CD40BF]">Data Analytics</span></h2>
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The Organizing Committee of <span className="inter-bold ">the International Conference on Internet of Things, Machine Learning, and Data Analytics </span> <span className="inter-regular opacity-85">consists of distinguished academicians, researchers, and industry experts committed to excellence in conference planning and execution. The committee plays a vital role in curating technical sessions, managing the peer-review process, and coordinating with speakers, authors, and participants. Their collective efforts ensure the delivery of a high-quality, impactful event that fosters innovation, collaboration, and knowledge exchange across the fields of IoT, machine learning, and data analytics.</span></p>
                </div>
            </div>



            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0 lg:mt-15 mt-10 overflow-hidden">
                <div className="flex justify-center lg:flex-row flex-col items-center gap-10">
                    <div className="max-w-[600px] w-fit">
                        <img src="/images/editorpage.jpg" alt="img" className="" />
                    </div>
                    <div className=" space-y-3  ">
                        <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit bg-white mb-5  "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Organizing Committee Roles And Responsibilities</h2></div>
                        <h2 className="namdhinggo-bold lg:text-[24px] text-[20px]">International Conference on <span className="text-[#CD40BF]">IoT, Machine Learning, </span> and <span className="text-[#CD40BF]">Data Analytics</span></h2>

                        {organize.map((item, index) => {

                            return (
                                <div key={index} className="">
                                    <div className=" ">
                                        <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold text-[#CD40BF] ">
                                            {item.topic}
                                        </h2>
                                        <div className="flex gap-3  text-justify py-2 px-4">
                                            <TbPointFilled className=" text-[35px] text-[#CD40BF] flex shrink-0  mt-3" />
                                            <p className="inter-regular opacity-85 text-[16px] leading-[30px]">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                </div>
            </div>


            <div className=" mt-15">
                <div className="bg-[#FFF9FD] lg:pt-15 pt-10  px-4 " >
                    {/* <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#CD40BF] text-center  ">Meet the team behind ICITMLDA 2025</h2> */}
                    <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto bg-white mb-10 "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Meet the team behind ICITMLDA 2025</h2></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 lg:mt-7 mt-5 place-items-center max-w-[1400px] mx-auto pb-10 lg:pb-15 ">
                        {team.map((item, index) => (
                            <div key={index} className="w-full group relative">
                                <div className="bg-white rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.25)] relative overflow-hidden group max-w-[500px] mx-auto">

                                    <div className="flex justify-center">
                                        <img src="/images/cnhuman.png" alt="image" className="w-full h-auto" loading="lazy" />
                                    </div>

                                    <div
                                        className=" absolute bottom-0 right-0  lg:w-[60px] lg:h-[60px] w-[220px] h-[180px]  bg-[#CD40BF]  rounded-tl-full  transition-all duration-700  lg:group-hover:w-[300px]  lg:group-hover:h-[220px]  flex items-center justify-center  overflow-hidden" >
                                        <div className=" lg:opacity-0 opacity-100 translate-y-2 transition-all duration-300 delay-300 group-hover:opacity-100 group-hover:translate-y-0 text-white text-center px-4" >
                                            <p className="namdhinggo-extrabold text-[24px] leading-tight ">{item.title}</p>
                                            <p className="namdhinggo-extrabold text-[14px] md:text-[16px] lg:text-[20px] leading-tight">
                                                {item.name}
                                            </p>
                                            <p className="namdhinggo-medium text-[12px] md:text-[14px] lg:text-[18px] leading-tight">
                                                {item.location}
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

export default Organizing