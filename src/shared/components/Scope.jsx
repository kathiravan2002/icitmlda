import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Scope() {

    const Scope = [
        {
            topic: "Human-Computer Interaction",
            content: "Focuses on improving how humans interact with digital systems by developing intuitive interfaces, enhancing usability, and studying behavioral patterns that inform interactive technology across various devices, platforms, and environments.",
        },
        {
            topic: "User Experience (UX) Design",
            content: "Explores how users perceive, feel, and engage with technology through structured design methods, usability testing, and accessibility practices to create seamless, efficient, and enjoyable digital experiences for all user types.",
        },

        {
            topic: "Artificial Intelligence in Interaction",
            content: "Investigates AI-powered systems that adapt interfaces based on user behavior, including natural language processing, personalization algorithms, and machine learning tools to enhance smart, predictive, and responsive human-computer interactions.",
        },
        {
            topic: "Virtual and Augmented Reality",
            content: "Examines immersive digital environments using VR/AR to transform education, simulation, healthcare, and entertainment through 3D spatial interaction, motion tracking, and real-time sensory feedback technologies.",
        },
        {
            topic: "Accessibility and Inclusive Design",
            content: "Promotes the creation of inclusive systems by addressing the needs of users with disabilities through assistive technologies, universal design principles, and equitable digital access across all platforms.",
        },
        {
            topic: "Ethics and Responsible Innovation",
            content: "Addresses issues like bias, privacy, transparency, and societal impact in emerging technologies, emphasizing responsible design and development aligned with human rights and ethical standards.",
        },
    ]

    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-75 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Our Scope</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#CD40BF] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#CD40BF] "><span className="text-white">/ </span>Our Scope</h2>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFF9FD] lg:py-15 py-7 px-4">
                <div className=" max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7  2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center  mb-5">
                        <div className="max-w-[600px] w-fit  " ><img src="/images/scopehome2.png" alt="image3" className="hidden lg:block" loading="lazy" /></div>

                        <div className=" space-y-5">
                            <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit bg-white "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Scope Of Our Conference</h2></div>
                            <div className="max-w-[600px] w-fit  " ><img src="/images/scopehome2.png" alt="image3" className="block lg:hidden mt-8" loading="lazy" /></div>

                            <h2 className="namdhinggo-bold lg:text-[24px] text-[20px]">International Conference on <span className="text-[#CD40BF]">IoT, Machine Learning, </span> and <span className="text-[#CD40BF]">Data Analytics</span></h2>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The scope of ICITMLDA spans innovative research and practical advancements in Internet of Things (IoT), machine learning, and data analytics. The conference encourages the integration of intelligent technologies to solve real-world challenges. It aims to support digital transformation across industries by exploring scalable, efficient, and intelligent system designs and implementations.</p>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">ICITMLDA welcomes contributions in areas such as smart cities, healthcare informatics, industrial IoT, deep learning models, big data processing, and real-time analytics. The conference invites interdisciplinary approaches that link algorithms, hardware, and software systems. It promotes innovation that enhances automation, security, communication, and sustainable data-driven decision-making in modern technological ecosystems.</p>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The conference also focuses on bridging academic research with industrial applications, creating opportunities for knowledge transfer and partnership. It supports the development of next-generation solutions by providing a platform for sharing case studies, prototype systems, and pilot projects. ICITMLDA aims to drive technological progress through collaboration, creativity, and the advancement of intelligent digital systems.</p>

                        </div>

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

export default Scope