import { FaLocationDot } from 'react-icons/fa6';
import { AiFillDollarCircle } from 'react-icons/ai';

const AppliedJobCard = ({job}) => {

    console.log(job);
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job;

    return (
        <div>
            <div className='flex justify-around items-center border border-[#E8E8E8] p-10 hover:shadow-2xl'>
            <div className='flex gap-5' >
                <div className='flex justify-center items-center bg-[#F4F4F4] h-48 w-48 rounded-lg'>
                <img className='w-20' src={logo} alt="" />
                </div>
            <div>
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

            </div>
            </div>
            <div>
            <button type="button" className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2">View Details</button>
            </div>
           
           
        </div>
        
        </div>
    );
};

export default AppliedJobCard;