import React, { useState } from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiPhoneCall, FiUploadCloud } from 'react-icons/fi'
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Upload, FileText, Users, Mail, Building, CheckCircle, AlertCircle, Send } from 'lucide-react';

function Papersubmission() {

    const [fileName, setFileName] = useState('Choose Your File');

    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //         setFileName(e.target.files[0].name);
    //     }
    // };

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    // const handleChange = (e) => {
    //     if (e.target.type === 'file') {
    //         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    //     } else {
    //         setFormData({ ...formData, [e.target.name]: e.target.value });
    //     }
    // };

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const journalName = 'icitmlda';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);

            const mailPromise = fetch('https://icitmlda.com/api/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                setFileName('');
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }

    const submissionGuidelines = [
        {
            icon: <FileText className="w-5 h-5" />,
            title: "Paper Title",
            description: "Provide a clear, concise title representing your research paper accurately.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Author Information",
            description: "Enter the full name of the first author as written.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Contact Details",
            description: "Provide a working email address for future updates and communication.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Building className="w-5 h-5" />,
            title: "Institution",
            description: "Mention the institution the first author is currently affiliated with.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Upload className="w-5 h-5" />,
            title: "File Upload",
            description: "Upload your paper in PDF or DOC format, under 5MB.",
            color: "from-indigo-500 to-purple-500"
        }
    ];

    const importantNotes = [
        {
            icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
            text: "Submitted papers must be original and not published elsewhere previously."
        },
        {
            icon: <AlertCircle className="w-5 h-5 text-red-500" />,
            text: "Plagiarism will lead to immediate rejection without any exceptions."
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
            text: "Follow all formatting and submission guidelines strictly for consideration."
        },
        {
            icon: <Users className="w-5 h-5 text-purple-500" />,
            text: "At least one author must register and present the paper."
        },
        {
            icon: <FileText className="w-5 h-5 text-orange-500" />,
            text: "Camera-ready papers must incorporate all reviewer feedback and corrections."
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-green-500" />,
            text: "Certificates issued only to authors who register and present."
        }
    ];
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Paper Submission</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#CD40BF] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#CD40BF] "><span className="text-white">/ </span>Paper Submission</h2>
                    </div>
                </div>
            </div>



            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0">
                <div className="space-y-4">
                    <div className="flex justify-center lg:justify-start"> <div className="border-3 border-[#CD40BF] flex justify-center items-center gap-5 rounded-full px-5 py-2 w-fit mx-auto lg:mx-0 bg-white lg:mt-15 mt-10"><img src="/images/sun.png" alt="icon" className="w-8 h-8 logo-spin" /> <h2 className="lg:text-[26px] text-[24px] namdhinggo-extrabold text-[#CD40BF]  ">Paper Submission</h2></div></div>

                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The Paper Submission section outlines the guidelines for submitting original research to the International Conference on Internet of Things, Machine Learning, and Data Analytics. Authors are invited to submit unpublished, high-quality papers that align with the conference themes. Submissions must follow the prescribed format and will undergo a rigorous peer-review process by experts. Accepted papers will be presented during the conference and considered for publication in the conference proceedings or associated journals. Authors are encouraged to adhere to submission deadlines and ensure clarity, relevance, and originality in their work.</p>
                </div>
            </div>
            {/* <div className="flex lg:flex-row flex-col max-w-[1400px] mx-auto px-4 2xl:px-0  mt-10">
                <div className="flex-45  px-5 bg-cover lg:rounded-tl-[25px] lg:rounded-bl-[25px] rounded-tl-[25px] rounded-bl-[0px] rounded-tr-[25px] rounded-br-[0px] lg:rounded-tr-[0px] lg:rounded-br-[0px] " style={{ backgroundImage: 'url(/images/contactbg1.jpg)' }}>
                    <div className="flex h-full flex-col gap-10   py-10 lg:py-10" >
                        <div className="flex flex-col gap-10 ">

                            <div className="space-y-3 flex flex-col justify-center md:px-2 px-0  ">
                                <h2 className="text-[#CD40BF] namdhinggo-extrabold lg:text-2xl text-2xl text-center" >Paper Submission</h2>

                                <div className="mt-2 space-y-5 text-justify ">
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Provide a clear, concise title representing your research paper accurately.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Enter the full name of the first author as written.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Submit a valid mobile number, including country code if applicable.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Provide a working email address for future updates and communication.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Mention the institution the first author is currently affiliated with.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Upload your paper in PDF or DOC format, under 5MB.</p></div>

                                </div>

                            </div>
                            <div className="space-y-3 flex flex-col justify-center md:px-2 px-0  ">
                                <h2 className="text-[#CD40BF] namdhinggo-extrabold lg:text-2xl text-2xl text-center" >Important Notes</h2>

                                <div className="mt-2 space-y-5 text-justify ">
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Submitted papers must be original and not published elsewhere previously.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Plagiarism will lead to immediate rejection without any exceptions.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Follow all formatting and submission guidelines strictly for consideration.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">At least one author must register and present the paper.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Camera-ready papers must incorporate all reviewer feedback and corrections.</p></div>
                                    <div className="flex gap-3"> <img src="/images/Pain Point.png" alt="img" className="  w-[20px] h-[20px] lg:w-[22px] lg:h-[22px] mt-0 " /> <p className="inter-regular text-white text-[16px] ">Certificates issued only to authors who register and present.</p></div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                
            </div> */}
            <div className="grid grid-cols-1  gap-8 max-w-[1000px] mx-auto lg:mt-15 mt-10 ">


                {/* Form Section */}

                <div className="">
                    <div className="bg-white rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-[#CD40BF] to-[#CD40BF] p-8 text-white text-center">
                            <h2 className="text-3xl poppins-bold mb-2">Submit Your Paper</h2>
                            <p className="text-white poppins-medium ">Fill out the form below to submit your research paper</p>
                        </div>

                        <form onSubmit={handleSubmit}  >
                            <div className="p-8 space-y-6">
                                {/* Paper Title */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Paper Title</label>
                                    <div className="relative">
                                        <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CD40BF] w-5 h-5" />
                                        <input
                                            type="text"
                                            name="Paper_Title"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 poppins-medium  border-[#CD40BF] rounded-2xl focus:border-[#CD40BF] focus:outline-none focus:bg-white transition-all duration-300  placeholder-gray-500"
                                            placeholder="Enter your paper title"
                                            required
                                            value={formData.Paper_Title}
                                            onChange={handleFileInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Institution Name */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Institution Name</label>
                                    <div className="relative">
                                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CD40BF] w-5 h-5" />
                                        <input
                                            type="text"
                                            name="Institution_Name"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 poppins-medium  border-2 border-[#CD40BF] rounded-2xl focus:border-[#CD40BF] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter your institution name"
                                            required
                                            value={formData.Institution_Name}
                                            onChange={handleFileInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Author Name */}
                                    <div className="space-y-2">
                                        <label className="block text-sm poppins-semibold text-gray-700">Author's Full Name</label>
                                        <div className="relative">
                                            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CD40BF] w-5 h-5" />
                                            <input
                                                type="text"
                                                name="Author_FUll_Name"
                                                className="w-full pl-12 pr-4 py-4 bg-gray-50 poppins-medium  border-2 border-[#CD40BF] rounded-2xl focus:border-[#CD40BF] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                                placeholder="Enter author's full name"
                                                required
                                                value={formData.Author_FUll_Name}
                                                onChange={handleFileInputChange}
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
                                                name="Email_Address"
                                                className="w-full pl-12 pr-4 py-4 bg-gray-50  poppins-medium border-2 border-[#CD40BF] rounded-2xl focus:border-[#CD40BF] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                                placeholder="Enter author's email"
                                                required
                                                value={formData.Email_Address}
                                                onChange={handleFileInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Paper Track */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Paper Category</label>
                                    <select
                                        name="Paper_Track"
                                        className="w-full px-4 py-4 bg-gray-50 poppins-medium border-2 border-[#CD40BF] rounded-2xl focus:border-[#CD40BF] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800"
                                        required
                                        value={formData.Paper_Track}
                                        onChange={handleFileInputChange}
                                    >
                                        <option value="">Select Your Category</option>
                                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Human-Computer Interaction">Human-Computer Interaction</option>
                                        <option value="Cybersecurity">Cybersecurity</option>
                                        <option value="Internet of Things">Internet of Things</option>
                                        <option value="Data Analytics & Big Data">Data Analytics & Big Data</option>
                                        <option value="Natural Language Processing ">Natural Language Processing </option>
                                    </select>
                                </div>

                                {/* File Upload */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Upload Paper</label>
                                    <div className="relative">
                                        <div className="border-2 border-dashed border-[#CD40BF] rounded-2xl p-8 text-center hover:border-[#CD40BF]  focus:outline-none transition-all duration-300 bg-gray-50  group cursor-pointer">
                                            <input
                                                id='Paper_File'
                                                name="Paper_File"
                                                accept=".pdf,.doc,.docx"
                                                type="file"
                                                onChange={handleFileInputChange}
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                            />
                                            <div className="space-y-4">
                                                <div className=" flex items-center justify-center ">
                                                    <Upload className="w-8 h-8 text-[#CD40BF]" />
                                                </div>
                                                <div>
                                                    <p className="text-lg poppins-semibold text-gray-700 mb-2">
                                                        {fileName || "Click to Upload Paper"}
                                                    </p>
                                                    <p className="text-sm poppins-medium  text-gray-500">
                                                        PDF, DOC, or DOCX files only (Max 5MB)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="namdhinggo-extrabold text-[20px] flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-2">
                                    <button className="cursor-pointer text-white px-4 bg-[#CD40BF] p-2 rounded-lg  ">
                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}

                                    </button>
                                </div>
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

export default Papersubmission