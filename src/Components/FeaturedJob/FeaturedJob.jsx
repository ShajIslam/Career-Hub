import { FaLocationDot } from 'react-icons/fa6';
import { AiFillDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const FeaturedJob = ({job}) => {
    
    const {id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job;

    return (
        <div className="border border-[#E8E8E8] p-10 hover:shadow-2xl ">
            <img className='w-20' src={logo} alt="" />
            <h1 className="text-lg font-bold text-[#474747] mt-5">{job_title}</h1>
            <p className="text-md text-[#757575] my-2">{company_name}</p>
            <div className="flex gap-5 my-2">
            <h1 className="p-2 text-sm border-2 border-[#7E90FE] text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">{remote_or_onsite}</h1>
            <h1 className="p-2 text-sm border-2 border-[#7E90FE] text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">{job_type}</h1>
               
            </div>
            <div className="flex gap-5 text-[#757575] my-5">
                <div className='flex justify-center items-center'>
                    <FaLocationDot></FaLocationDot>
                <h1 className='text-sm'>{location}</h1>
                </div>
                <div className='flex justify-center items-center'>
                   <AiFillDollarCircle></AiFillDollarCircle>
                <h1 className='text-sm '>{salary}</h1>
                </div>
            </div>
            <Link to={`/job/${id}`}><button type="button" className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2">View Details</button></Link>
            
        </div>
    );
};

export default FeaturedJob;