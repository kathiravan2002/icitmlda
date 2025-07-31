import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaDatabase, FaHandPointRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { IoArrowRedoSharp, IoLocationSharp } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Conferencetracks() {


    const data = [
        {
            icon: <FaDatabase />,
            title: " Internet of Things (IoT)",
            content: "This track explores the design and implementation of IoT systems including smart devices, sensor networks, embedded systems, and edge computing. It covers real-world applications such as smart homes, healthcare monitoring, agriculture automation, and industrial IoT solutions that enhance connectivity, efficiency, and real-time decision-making through intelligent data communication across devices."
        },
        {
            icon: <FaDatabase />,
            title: "Machine Learning & Deep Learning",
            content: "Focuses on the development and application of machine learning algorithms, including supervised, unsupervised, and reinforcement learning. It highlights advances in deep learning, neural networks, and AI models that support automation, prediction, and optimization. Use cases span various domains like healthcare, finance, transportation, and smart decision support systems."
        },
        {
            icon: <FaDatabase />,
            title: "Robotics & Intelligent Automation",
            content: "Focuses on the integration of AI in robotic systems for adaptive, autonomous, and intelligent behavior. Topics include robotic vision, motion planning, human-robot interaction, and industrial automation. This track encourages innovation in areas like smart manufacturing, logistics, defense, and service robots for complex and dynamic environments."
        },
        {
            icon: <FaDatabase />,
            title: "Data Analytics & Big Data",
            content: "Covers techniques for handling and analyzing massive datasets using big data frameworks. Topics include data mining, predictive modeling, real-time analytics, and data visualization. The track emphasizes scalable data solutions that uncover insights, drive strategic decisions, and support industries such as marketing, logistics, public policy, and scientific research."
        },
        {
            icon: <FaDatabase />,
            title: "Cybersecurity & Privacy",
            content: "Examines the protection of digital systems and sensitive data against threats and vulnerabilities. Key areas include encryption, intrusion detection, privacy-preserving AI, and blockchain-based security. The track also addresses ethical concerns, regulatory compliance, and strategies for building resilient infrastructures in increasingly interconnected and data-intensive environments."
        },
        {
            icon: <FaDatabase />,
            title: " Cloud and Edge Computing",
            content: "Focuses on computing architectures that support the scalability, flexibility, and speed required by modern applications. This includes hybrid cloud models, edge analytics, distributed computing, and virtual resource management. The track explores how cloud-edge synergy enhances performance, reduces latency, and supports real-time processing in IoT and AI systems."
        },
        {
            icon: <FaDatabase />,
            title: "Smart Systems & Applications",
            content: "Highlights intelligent systems applied in areas such as smart cities, transportation, energy grids, and healthcare. It focuses on automation, system integration, and context-aware computing. The track showcases how technologies like IoT and AI create responsive environments that improve quality of life, safety, sustainability, and service delivery."
        },
        {
            icon: <FaDatabase />,
            title: "Natural Language Processing (NLP)",
            content: "Covers the latest advancements in speech and text processing, sentiment analysis, language modeling, and machine translation. The track explores how NLP technologies are used in chatbots, voice assistants, content moderation, and human-computer interaction, enhancing communication and accessibility across languages, platforms, and industries."
        },
    ]
    return (
        <div>

            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Conference Tracks</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#CD40BF] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#CD40BF] "><span className="text-white">/ </span>Conference Tracks</h2>
                    </div>
                </div>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0   ">
                <div className="space-y-4">
                     <div className="flex justify-center lg:justify-start"><div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto lg:mx-0 bg-white lg:mt-15 mt-10"><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Conference Tracks</h2></div></div>

                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The conference tracks of <span className="inter-bold ">the International Conference on Internet of Things, Machine Learning, and Data Analytics </span>are designed to cover a broad spectrum of emerging technologies and applications. These tracks include specialized areas such as IoT architecture, smart systems, deep learning, data mining, big data analytics, cloud computing, cybersecurity, and intelligent automation. Each track offers a platform for researchers and practitioners to present their latest findings, share innovative solutions, and discuss real-world implementations that address global challenges through intelligent, data-driven, and interconnected technological systems.</p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0 mt-10 overflow-hidden">
                <div className=" bg-[#FFF9FD] px-4 py-4 rounded-lg  ">
                    <div className="">
                        {data.map((item, index) => {

                            return (
                                <div key={index} className="">
                                    <div className="    ">
                                        <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold text-[#CD40BF]  py-2 ">
                                            {item.title}
                                        </h2>
                                        <div className="flex gap-3 mt-2 text-justify py-2 px-4">
                                            <TbPointFilled className=" text-[35px] text-[#CD40BF] flex shrink-0  mt-2" />
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

export default Conferencetracks