import { useEffect, useState } from "react";
import JobsCategory from "../JobsCategory/JobsCategory";


const JobCategoryList = () => {
    const [jobsCategories, setJobsCategories] = useState([]);

    useEffect(()=>{

        fetch('categories.json')
        .then(response => response.json())
        .then(data => setJobsCategories(data))
    },[])

    return (
        <div>
            <div className="text-center mt-24">
            <h1 className="text-5xl font-extrabold my-5">Job Category List</h1>
            <p className="text-sm text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 my-12 ">
            {
                jobsCategories.map((jobsCategory,idx) => <JobsCategory key={idx} jobsCategory={jobsCategory} ></JobsCategory>)
            }
            </div>
        </div>

    );
};

export default JobCategoryList;