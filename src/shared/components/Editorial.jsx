import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Editorial() {


    const Scope = [

        {
            topic: "Manuscript Evaluation",
            content: "The board reviews submitted papers for originality, relevance, and quality, ensuring only high-standard research is accepted for presentation or publication.",
        },
        {
            topic: "Peer-Review Oversight",
            content: "They manage the peer-review process, assign qualified reviewers, and ensure ethical, unbiased, and constructive evaluation of all submissions.",
        },
        {
            topic: "Quality Assurance",
            content: "Responsible for maintaining academic integrity and publication quality by checking for plagiarism, formatting issues, and adherence to submission guidelines.",
        },
        {
            topic: "Editorial Guidance",
            content: "They provide strategic advice on editorial policies, publication standards, and thematic alignment with the conference's goals and scientific scope.",
        },
        {
            topic: "Conflict Resolution",
            content: "The board addresses disputes related to reviews, authorship, or content to uphold transparency and fairness in the editorial process.",
        },

    ]


    const editorial = [
        {
            name: "Dr. Thendral Puyalnithi",
            university: "Kalasalingam Academy of Research and Education",
            expertise: "  Department of CSE",
            country: " India"
        },

        {
            name: "Dr.B. MOHAMMED ",
            university: "Al-Madinah International University",
            expertise: "Faculty Of Finance & Admin. Science",
            country: " Malaysia"
        },
        {
            name: "Dr. Jawwad Sami Ur Rahman",
            university: "Riphah International University",
            expertise: "Biomedical Engineering Department",
            country: " Pakistan"
        },
        {
            name: "Dr. Vibha Aggarwal",
            university: "Riphah International University",
            expertise: "Department of ECE",
            country: " India"
        },
        {
            name: "Dr.R. Arun Kumar",
            university: "University of South Wales",
            expertise: "Lecturer in Digital Forensics & Cyber Security",
            country: " United Kingdom"
        },
        {
            name: "Dr.Md. Foysal",
            university: "Khulna University of Engineering and Technology Khulna",
            expertise: "Department of ECE",
            country: " Bangladesh"
        },
        {
            name: "Dr. Rajeev Kumar Singh",
            university: "Madhav Institute of Technology and Science",
            expertise: " Department of IT",
            country: " India"
        },
        {
            name: "Dr.S. Prasanth",
            university: "Sabaragamuwa University of Sri Lanka",
            expertise: " Department of Physical Sciences and Technology",
            country: " Sri Lanka"
        },
         {
            name: "Dr.S. Jayanthi ",
            university: "Tagore Institute of Engineering and Technology",
            expertise: " Principal",
            country: " India"
        },
        {
            name: "Dr. Aaron Izang",
            university: "Babcock University",
            expertise: " Department of IT",
            country: " Nigeria"
        },
        {
            name: "Dr. Balakrishnan Baranitharan",
            university: " Kalasalingam Academy of Research and Education",
            expertise: " Department of Civil Engineering",
            country: " India"
        },
      
        {
            name: "Dr. Pravin Futane",
            university: " Vishwakarma Institute of Information Technology",
            expertise: " Department of CSE",
            country: " India"
        },
        {
            name: "Dr. Ebelogu Christopher Ubaka",
            university: " University of Abuja",
            expertise: " Department of CS",
            country: " Nigeria"
        },
        {
            name: "Dr. Kabir G. Kharade",
            university: " Shivaji University",
            expertise: " Department of CSE",
            country: " India"
        },
        {
            name: "Dr. Salah Eddine Benatia",
            university: " Mascara University",
            expertise: " Department of CSE",
            country: " Algeria"
        },
        {
            name: "Dr. Ajanthaa Lakkshmanan",
            university: " Sathyabama institute of science and technology",
            expertise: " Department of CSE",
            country: " India"
        },
        {
            name: "Dr.A. Karthikeyan",
            university: " SNS College of Technology",
            expertise: " Department of AIE",
            country: " India"
        },
        {
            name: "Dr. Sakthivel Velusamy",
            university: " Sathyabama institute of science and technology",
            expertise: " Department of CSE",
            country: " South Korea"
        },
        {
            name: "Dr.S.S Akilan",
            university: " Mepco Schlenk Engineering College",
            expertise: "  Department of CA",
            country: " India"
        },
        {
            name: "Dr.D. Kayathri Devi",
            university: "  Amity University",
            expertise: "  Department of ITE",
            country: " Uzbekistan"
        },
        {
            name: "Dr.S. Raghavendra",
            university: "  Manipal Institute of Technology",
            expertise: "  Department of IC",
            country: " India"
        },
       
        // {
        //     name: "Pramod Begur Nagaraj",
        //     university: "Indian Institute of Management Bangalore",
        //     expertise: " Onapsis",
        //     country: " Texas,USA"
        // },


    ]
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-75 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Editorial Board</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#CD40BF] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#CD40BF] "><span className="text-white">/ </span>Editorial Board</h2>
                    </div>
                </div>
            </div>

            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  ">
                <div className="space-y-4">
                    <div className="flex justify-center lg:justify-start"> <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto lg:mx-0 bg-white lg:mt-15 mt-10"><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Editorial Board</h2></div></div>
                    <h2 className="namdhinggo-bold lg:text-[24px] text-[20px]">International Conference on <span className="text-[#CD40BF]">IoT, Machine Learning, </span> and <span className="text-[#CD40BF]">Data Analytics</span></h2>
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The Editorial Board of <span className="inter-bold ">the International Conference on Internet of Things, Machine Learning, and Data Analytics </span> <span className="inter-regular opacity-85">comprises distinguished researchers, academicians, and industry experts with extensive experience in their respective fields. The board is committed to maintaining high academic and ethical standards by overseeing the peer-review process and ensuring the quality of all accepted submissions. Through their expertise and guidance, the board supports the conference's mission to promote innovative research, encourage scholarly collaboration, and uphold excellence in emerging areas of IoT, machine learning, and data analytics.</span></p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0 lg:mt-15 mt-10 overflow-hidden">
                <div className="flex justify-center lg:flex-row flex-col items-center gap-10">
                    <div className="max-w-[600px] mx-auto w-fit">
                        <img src="/images/editorpage.jpg" alt="img" loading='lazy' className="hidden lg:block" />
                    </div>
                    <div className=" space-y-3  ">
                        <div className="flex justify-center lg:justify-start"><div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit bg-white mb-5  "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Editorial Board Roles and Responsibilities</h2></div></div>
                        <div className="max-w-[600px] mx-auto w-fit">
                            <img src="/images/editorpage.jpg" alt="img" loading='lazy' className="lg:hidden block" />
                        </div>
                        <h2 className="namdhinggo-bold lg:text-[24px] text-[20px]">International Conference on <span className="text-[#CD40BF]">IoT, Machine Learning, </span> and <span className="text-[#CD40BF]">Data Analytics</span></h2>

                        {Scope.map((item, index) => {

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
                <div className="bg-[#FFF9FD] lg:pt-15 pt-10   px-4" >
                    <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto bg-white mb-10 "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Meet Our Editorial Board Members</h2></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 lg:mt-7 mt-5 place-items-center max-w-[1400px] mx-auto pb-10 lg:pb-15 ">
                        {editorial.map((item, index) => (
                           
                            <div key={index} className="w-full group relative">
                                <div className=" md:block hidden bg-white rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.25)] max-w-[400px] mx-auto text-center transition-all duration-500 cursor-pointer h-[140px] flex items-center justify-center relative">

                                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0">
                                        <p className="namdhinggo-bold text-[22px] lg:text-[24px] text-[#CD40BF]">{item.name}</p>
                                    </div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 space-y-2 p-2">
                                        <p className="text-[18px] lg:text-[18px] namdhinggo-medium text-gray-700">{item.expertise},</p>
                                        <p className="text-[18px] lg:text-[18px] namdhinggo-medium text-[#CD40BF]">{item.university},</p>
                                        <p className="text-[18px] lg:text-[18px] namdhinggo-medium text-gray-700">{item.country}</p>
                                    </div>

                                </div>
                                 <div className=" md:hidden bg-white rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.25)] max-w-[400px] mx-auto text-center cursor-pointer flex flex-col items-center justify-center px-2 py-4 ">

                                    <div className=" flex items-center justify-center transition-all duration-500 ">
                                        <p className="namdhinggo-bold text-[22px] lg:text-[24px] text-[#CD40BF]">{item.name},</p>
                                    </div>

                                    <div className=" flex flex-col items-center justify-center space-y-2">
                                        <p className="text-[18px] lg:text-[18px] namdhinggo-medium text-gray-700">{item.expertise},</p>
                                        <p className="text-[18px] lg:text-[18px] namdhinggo-medium text-[#CD40BF]">{item.university},</p>
                                        <p className="text-[18px] lg:text-[18px] namdhinggo-medium text-gray-700">{item.country}</p>
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

export default Editorial