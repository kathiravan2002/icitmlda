import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar } from 'react-icons/fa';
import { FaArrowRightLong, FaCalendarDays } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight, CreditCard } from 'lucide-react';

function Datesandbank() {
    // const dates = [
    //     {
    //         content1: " August 10, 2025",
    //         title: "Abstract Submission Deadline"
    //     },
    //     {
    //         content1: " August 10, 2025",
    //         title: "Full Paper Submission Deadline"
    //     },
    //     {
    //         content1: " September 15, 2025",
    //         title: "Notification of Acceptance"
    //     },
    //     {
    //         content1: " September 30, 2025",
    //         title: "Final Paper Submission"
    //     },
    //     {
    //         content1: " September 15, 2025",
    //         title: "Registration Deadline"
    //     },
    //     {
    //         content1: " October 24–26, 2025",
    //         title: "Conference Dates"
    //     },

    // ]

    // const bank = [
    //     {
    //         content1: " ICITMLDA Conference",
    //         content2: " 123456789",
    //         content3: " China",
    //         content4: " TMBL03000045",
    //         content5: " 605060005",

    //     },]

    const dates = [
        {
            content1: "December 2, 2025",
            title: "Abstract Submission Deadline",
            icon: "📝"
        },
        {
            content1: "December 5, 2025",
            title: "Full Paper Submission Deadline",
            icon: "📄"
        },
        {
            content1: "December 10, 2025",
            title: "Notification of Acceptance",
            icon: "✅"
        },
        {
            content1: "December 15, 2025",
            title: "Final Paper Submission",
            icon: "📋"
        },
        {
            content1: "December 17, 2025",
            title: "Registration Deadline",
            icon: "🎟️"
        },
        {
            content1: "December 26, 2025",
            title: "Conference Dates",
            icon: "🎤"
        },
    ];

    const bank = {
        accountName: "ICITMLDA Conference",
        accountNumber: "123456789",
        branch: "China",
        ifscCode: "TMBL03000045",
        micr: "605060005"
    };
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Important Dates</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#CD40BF] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#CD40BF] "><span className="text-white">/ </span>Important Dates </h2>
                    </div>
                </div>
            </div>



            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0   ">
                <div className="space-y-4">
                     <div className="flex justify-center lg:justify-start"><div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit bg-white lg:mt-15 mt-10"><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Important Dates </h2></div></div>

                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The Important Dates & Bank Details section provides participants with essential information regarding the timeline and payment process for the International Conference on Internet of Things, Machine Learning, and Data Analytics. This section outlines key deadlines for abstract submission, paper acceptance, registration, and final paper submission. </p>
                </div>
            </div>



            <div className="py-16 px-6 bg-[#FFF9FD] lg:mt-15 mt-10 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto bg-white "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  "> Key Dates Timeline</h2></div>
                        <p className="mt-4 lg:text-[24px] text-[20px] inter-regular opacity-85">Mark your calendar for these important milestones</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dates.map((item, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full border border-gray-100">
                                    {/* <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#CD40BF] to-[#99dd92] rounded-full text-white text-2xl">
                                        {item.icon}
                                    </div> */}
                                    <div className="text-center">
                                        <h3 className="text-[24px] namdhinggo-bold  mb-3 ">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center justify-center space-x-2">
                                            <Calendar className="text-[#CD40BF] text-[20px]" />
                                            <p className="text-[#CD40BF] inter-medium text-[20px] ">
                                                {item.content1}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bank Details */}
            {/* <div className="lg:mt-15 mt-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className=" shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-xl p-8 lg:p-12 ">
                        <div className="text-center mb-12">
                            <CreditCard className="mx-auto w-16 h-16 text-[#CD40BF] mb-4" />
                            <h2 className="lg:text-[32px] text-[24px] text-[#CD40BF] namdhinggo-bold mb-4">
                                Payment Information
                            </h2>
                            <p className="inter-regular opacity-85 leading-relaxed max-w-3xl mx-auto text-justify">
                                Participants are requested to make their registration payment through the official bank account. 
                                Please include your full name and paper ID in the transaction reference for accurate verification.
                            </p>
                        </div>

                        <div className="flex justify-center ">
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#CD40BF] rounded-lg flex items-center justify-center">
                                            <span className="text-white inter-bold">AN</span>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#CD40BF] text-[24px] namdhinggo-bold">Account Name</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.accountName}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#CD40BF] rounded-lg flex items-center justify-center">
                                            <span className="text-white inter-bold">#</span>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#CD40BF] text-[24px] namdhinggo-bold">Account Number</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.accountNumber}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#CD40BF] rounded-lg flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#CD40BF] text-[24px] namdhinggo-bold">Branch</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.branch}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#CD40BF] rounded-lg flex items-center justify-center">
                                            <span className="text-white inter-bold">IF</span>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#CD40BF] text-[24px] namdhinggo-bold">IFSC Code</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.ifscCode}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#CD40BF] rounded-lg flex items-center justify-center">
                                            <span className="text-white inter-bold">MI</span>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#CD40BF] text-[24px] namdhinggo-bold">MICR Code</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.micr}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
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

export default Datesandbank