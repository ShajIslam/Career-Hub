import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className="max-w-6xl mx-auto">
           <JobCategoryList></JobCategoryList>
           <br />
           <FeaturedJobs></FeaturedJobs>
           </div>
           
        </div>
    );
};

export default Home;