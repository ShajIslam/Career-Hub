import { useEffect, useState } from "react";
import '../JobDetails/JobDetails.css'

import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";
import { getStoredJobApplication } from "../../Utilites/LocalStorage";


const AppliedJobs = () => {

    
    const [appliedJobs, setAppliedJobs] = useState([])
    const [filterJobs, setFilterJobs] = useState([]);

    const handleJobsFilter = filter=>{

        if(filter ==='all'){
                    setAppliedJobs(filterJobs)
                }else if(filter ==='remote'){
                    const remoteJobs = filterJobs.filter(job =>job.remote_or_onsite ==='Remote')
                    setAppliedJobs(remoteJobs)
                }else if(filter === 'onsite'){
                    const onsiteJobs = filterJobs.filter(job =>job.remote_or_onsite ==='Onsite')
                    setAppliedJobs(onsiteJobs)
                }

    }
    

    useEffect(()=>{
        console.log('okay')
        fetch('/jobs.json')
        .then(response=> response.json())
        .then(data => {
            const storedJobId =getStoredJobApplication();
            if(data.length>0){
                const jobsApplied = [];
                for(const id of storedJobId){
                    const job = data.find(job =>job.id===id)
                    if(job){
                        jobsApplied.push(job);
                    }
                }
                setAppliedJobs(jobsApplied);
                setFilterJobs(jobsApplied);
               
            }
        })

    }, [])


    return (
        <div>
           
            <div className="jobDetails-bg">
          <h1 className=" text-center mt-12 text-5xl font-extrabold my-5 ">Applied Job</h1>
          </div>
          
           <div className="grid gap-5 mt-12 max-w-6xl mx-auto">
           <details className="dropdown mb-24 ml-[980px]">
  <summary className="m-1 btn">filter by</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
    <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
    <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
  </ul>
</details>
             
           {
                appliedJobs.map((job,idx )=> <AppliedJobCard key={idx} job={job}></AppliedJobCard>)
            }
           </div>
        </div>
    );
};

export default AppliedJobs;