import React, { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FileText, Mail, Building, Phone } from 'lucide-react';


function Contactus() {

    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            const response = await fetch('http://192.168.29.71/icitmlda/contactus.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.text();
            setStatus(result);

            if (response.ok) {
                toast.success("Message submitted successfully!");
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Contact Us</h2>
                    <h2 className="lg:text-[28px] md:text-[20px] text-[18px] text-center namdhinggo-medium text-white  ">International Conference on Human-Computer Interaction and Emerging Technologies</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#CD40BF] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#CD40BF] "><span className="text-white">/ </span>Contact Us</h2>
                    </div>
                </div>
            </div>



            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0 lg:mt-15 mt-10 ">
                <div className="space-y-4">
                  <div className="flex justify-center lg:justify-start">  <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto lg:mx-0 bg-white "><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Contact Us</h2></div></div> 
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">For any queries related to the International Conference on Internet of Things, Machine Learning, and Data Analytics , please feel free to contact us. Whether you need assistance with paper submission, registration, accommodation, or general information, our organizing team is here to help. We welcome communication from authors, participants, sponsors, and academic collaborators. You can reach us via email, phone, or through the official conference website. Prompt support and guidance will be provided to ensure a smooth and successful experience for all attendees.</p>
                </div>
            </div>
            <div className=" px-4 max-w-[1400px] mx-auto lg:mt-15 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
                    <div className="flex gap-5 px-4 py-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[25px]">
                        <div className="  flex justify-center items-center">
                            <IoLocationSharp className="text-[#CD40BF] text-[45px]" />
                        </div>
                        <div className="space-y-3 flex flex-col justify-center ">
                            <h2 className="text-[#CD40BF] namdhinggo-extrabold lg:text-2xl text-xl">Location</h2>
                            <a href="" >
                                <p className="inter-medium text-base  opacity-85">
                                    Beijing, China
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-5 px-4 py-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[25px]">
                        <div className="flex justify-center items-center">
                            <FiPhoneCall className="text-[#CD40BF] text-[45px]" />
                        </div>
                        <div className="space-y-3 flex flex-col justify-center ">
                            <h2 className="text-[#CD40BF] namdhinggo-extrabold lg:text-2xl text-xl">Phone</h2>
                            <Link to="">
                                <p className="inter-medium text-base opacity-85">
                                    +91 8870212121
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-5 px-4 py-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[25px] ">
                        <div className=" flex justify-center items-center">
                            <MdEmail className="text-[#CD40BF] text-[45px]" />
                        </div>
                        <div className="space-y-3 flex flex-col justify-center ">
                            <h2 className="text-[#CD40BF] namdhinggo-extrabold lg:text-2xl text-xl">Email</h2>
                            <Link to="" >
                                <p className="inter-medium text-base wrap-anywhere opacity-85 ">
                                    info.icitmlda@gmail.com
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1  gap-8 max-w-[1000px] mx-auto lg:mt-15 mt-10 ">


                {/* Form Section */}
                <div className="">
                    <div className="bg-white rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-[#CD40BF] to-[#CD40BF] p-8 text-white text-center">
                            <p className="text-white poppins-medium text-[20px]">If you have any questions, please contact us!</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            {/* Paper Title */}
                            <div className="space-y-2">
                                <label className="block text-sm poppins-semibold text-gray-700">First Name</label>
                                <div className="relative">
                                    <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CD40BF] w-5 h-5" />
                                    <input
                                        type="text"
                                        name="firstname"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 poppins-medium  border-[#CD40BF] rounded-2xl focus:border-[#CD40BF] focus:outline-none focus:bg-white transition-all duration-300  placeholder-gray-500"
                                        placeholder="Enter Your First Name"
                                        value={formData.firstname}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Institution Name */}
                            <div className="space-y-2">
                                <label className="block text-sm poppins-semibold text-gray-700">Second Name</label>
                                <div className="relative">
                                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CD40BF] w-5 h-5" />
                                    <input
                                        type="text"
                                        name="secondname"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 poppins-medium  border-2 border-[#CD40BF] rounded-2xl focus:border-[#CD40BF] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                        placeholder="Enter Your Last Name "
                                        value={formData.secondname}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Author Name */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Phone number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CD40BF] w-5 h-5" />
                                        <input
                                            type="tel"
                                            name="number"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 poppins-medium  border-2 border-[#CD40BF] rounded-2xl focus:border-[#CD40BF] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter Your Phone Number"
                                            value={formData.number}
                                            onChange={handleFileInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CD40BF] w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50  poppins-medium border-2 border-[#CD40BF] rounded-2xl focus:border-[#CD40BF] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter Your Email"
                                            value={formData.email}
                                            onChange={handleFileInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>



                            {/* File Upload */}

                            <div className="space-y-2 ">
                                <label className="block text-sm poppins-semibold text-gray-700">Enter Your Message</label>
                                <div className="relative ">
                                    <textarea
                                        className="border-2  border-dashed border-[#CD40BF] poppins-medium rounded-2xl p-8  w-full  hover:border-[#CD40BF]  focus:outline-none transition-all duration-300 bg-gray-50  group cursor-pointer"

                                        name="message"
                                        placeholder="Enter Message"
                                        rows="6"

                                        value={formData.message}
                                        onChange={handleFileInputChange}
                                        required
                                    />


                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="namdhinggo-extrabold text-[20px] flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-2">
                                <button className="cursor-pointer text-white px-4 bg-[#CD40BF] p-2 rounded-lg  ">
                                    {status === 'Sending...' ? 'Submitting...' : 'Send Message'}

                                </button>
                            </div>
                        </form>
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

export default Contactus