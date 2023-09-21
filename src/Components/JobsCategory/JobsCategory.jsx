import '../Home/Home.css'

const JobsCategory = ({jobsCategory}) => {

    const{logo, category_name,availability} = jobsCategory;
    return (
        <div className="custom-gradient mr-10 p-10 text-center hover:shadow-xl cursor-pointer">
            <img className='ml-16' src={logo} alt="" />
            <br />
            <h1 className='text-lg font-bold'>{category_name}</h1>
           
            <p className='text-sm text-[#A3A3A3]'>{availability}</p>
        </div>
    );
};

export default JobsCategory;