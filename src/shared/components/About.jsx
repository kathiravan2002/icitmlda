import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';


function About() {


    const Goal = [
        {
            topic: "Foster Interdisciplinary Research",
            content: "We encourage collaborative research that spans computing, psychology, engineering, and design, enabling diverse perspectives to tackle challenges in HCI and drive innovative solutions for real-world problems through integrated thinking.",
        },
        {
            topic: "Bridge Academia and Industry",
            content: "The conference provides a dynamic platform for connecting academic researchers with industry leaders, enabling the translation of theoretical insights into practical applications that shape future technologies and solve pressing human-computer interaction issues.",
        },

        {
            topic: "Advance Human-Centered Design",
            content: "We prioritize research that focuses on user needs, emotions, and behaviors, aiming to create intuitive, accessible, and meaningful digital experiences that are effective across various demographics, cultures, and usage contexts.",
        },
        {
            topic: "Promote Inclusive Technology",
            content: "This conference emphasizes designing digital systems that are accessible and equitable for all users, including marginalized communities and individuals with disabilities, ensuring broader participation and technological empowerment through inclusive innovation.",
        },
        {
            topic: "Encourage Ethical Innovation",
            content: "We promote the responsible development of technologies, addressing concerns like bias, privacy, security, and sustainability to ensure HCI solutions remain fair, transparent, and aligned with human values and societal needs.",
        },
        {
            topic: "Enhance User Experience Globally",
            content: "Our goal is to explore culturally responsive and context-aware approaches to interaction design, ensuring technologies provide a satisfying, relevant, and impactful experience for users across the globe.",
        },
    ]


    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-100 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">About Us</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#CD40BF] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#CD40BF] "><span className="text-white">/ </span>About Us</h2>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFF9FD] lg:py-15 py-7 px-4">
                <div className="">

                    <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7  2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center max-w-[1400px] mx-auto mb-5">
                        <div className="max-w-[600px] w-fit  " ><img src="/images/abouthome.png" alt="image3" className="hidden lg:block" loading="lazy" /></div>

                        <div className=" space-y-5">
                           <div className="flex justify-center lg:justify-start"><div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit bg-white "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">About Our Conference</h2></div></div> 
                            <div className="max-w-[600px] mx-auto w-fit  " ><img src="/images/abouthome.png" alt="image3" className="block lg:hidden mt-7" loading="lazy" /></div>

                            <h2 className="namdhinggo-bold lg:text-[24px] text-[20px]">International Conference on <span className="text-[#CD40BF]">IoT, Machine Learning, </span> and <span className="text-[#CD40BF]">Data Analytics</span></h2>

                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The International Conference on Internet of Things, Machine Learning, and Data Analytics serves as a global platform for researchers, professionals, and academicians. It promotes the exchange of innovative ideas and real-world applications in IoT, ML, and data analytics. The conference supports collaboration and advances in intelligent technologies.</p>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">ICITMLDA covers a wide range of topics including smart systems, predictive analytics, healthcare technologies, and cybersecurity. The conference encourages interdisciplinary research and showcases advancements that improve decision-making, automation, and system performance. Participants gain exposure to practical implementations, fostering innovation through academic-industry collaboration and knowledge sharing across diverse technological domains.</p>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">Featuring keynote talks, technical sessions, and interactive workshops, ICITMLDA offers valuable insights into emerging technology trends. It provides excellent networking opportunities with leading experts and institutions. The conference aims to bridge the gap between research and practice, inspiring the development of future-ready solutions in the fields of IoT, machine learning, and analytics.</p>

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
                                <div className="flex gap-3"><IoLocationSharp className='text-[26px] text-[#CD40BF]' /><p className="namdhinggo-extrabold text-[20px] text-[#CD40BF]">Chongqing, China</p></div>
                                <div className="flex gap-3"><FaCalendar className='text-[24px] text-[#CD40BF] ' /><p className="namdhinggo-extrabold text-[20px] text-[#CD40BF]">26th December, 2025</p></div>
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

export default About