import { useState, useEffect } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{

        fetch('jobs.json')
        .then(response => response.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div>
            <div className="text-center mt-24">
            <h1 className="text-5xl font-extrabold my-5">Featured Jobs</h1>
            <p className="text-sm text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 my-12 gap-10 ">
            {
                jobs.map((job,idx) =><FeaturedJob key={idx} job ={job}></FeaturedJob> )
            }
            </div>
           <div className="flex justify-center mt-5">
           <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2">See All Jobs</button>
           </div>
        </div>
    );
};

export default FeaturedJobs;