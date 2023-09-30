import { useLoaderData, useParams } from "react-router-dom";
import './JobDetails.css';
import './JobDetails.css'
import { AiOutlineDollarCircle, AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import { BiTask } from 'react-icons/bi';
import { CiLocationOn} from 'react-icons/ci';
import { ToastContainer } from 'react-toastify';
import { saveJobApplication } from "../../Utilites/LocalStorage";
import Swal from 'sweetalert2'

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    
  const job= jobs.find(job => job.id ===idInt)
 const {job_description,job_responsibility,job_title, educational_requirements,experiences, salary, contact_information} = job;
  

  
    const handleApply=(id)=>{
        
        saveJobApplication(id);
        // toast.success('Added to database', {position: "top-right"});
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You have applied successfully',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div>
          <div className="jobDetails-bg">
          <h1 className=" text-center mt-12 text-5xl font-extrabold my-5 ">Job Details</h1>
          </div>

          <div className="flex gap-10 max-w-6xl mx-auto">
            <div className="w-2/3">
                <h1><span className="font-bold">Job description:</span> <span className="text-sm text-[#757575]">{job_description}</span> </h1>
                <br />
                <h1><span className="font-bold">Job Responsibility:</span> <span className="text-sm text-[#757575]">{job_responsibility}</span> </h1>
                <br />
                <h1><span className="font-bold">Educational Requirements:</span> <br /><span className="text-sm text-[#757575]">{educational_requirements}</span> </h1>
                <br />
                <h1><span className="font-bold">Experiences: </span> <br /><span className="text-sm text-[#757575]">{experiences}</span> </h1>
                <br />
            </div>
            <div className="w-1/3 ">
            <div className="gradient p-5">
                <h1 className="font-bold">Job Details</h1>
                <hr />
                <div className="flex items-center">
                    <AiOutlineDollarCircle></AiOutlineDollarCircle>
                    <span className="text-#474747">Salary: </span> <span className="text-[#757575]">  {salary}</span>
                </div>
                <div className="flex items-center">
                    <BiTask></BiTask>
                    <span className="text-#474747">Job Title: </span> <span className="text-[#757575]">  {job_title}</span>
                </div>
                <br />
                <h1 className="font-bold">Contact Information</h1>
                <hr />
                <br />
                <div className="flex  items-center">
                    <AiOutlinePhone></AiOutlinePhone>
                    <span className="text-#474747">Phone: </span> <span className="text-[#757575]">  {contact_information.phone}</span>
                </div>
                <div className="flex items-center">
                    <AiOutlineMail></AiOutlineMail>
                    <span className="text-#474747">Email: </span> <span className="text-[#757575]">  {contact_information.email}</span>
                </div>
                <div className="flex">
                    <CiLocationOn className="text-xl"></CiLocationOn>
                    <span className="text-#474747">Address: </span> <span className="text-[#757575]">  {contact_information.address}</span>
                </div>
            </div>
            <div className="w-full">
                <br />
            <button onClick={()=>handleApply(idInt)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Apply</button>
            
            </div>
            
            </div>
           
            
          </div>  
          <ToastContainer />
        </div>
        
    );
};

export default JobDetails;