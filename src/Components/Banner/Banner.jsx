


const Banner = () => {
    return (
        <div  className="flex justify-around">
            <div className="w-2/5 flex flex-col text-center justify-center items-center gap-5">
                <h1 className="text-7xl font-bold">One Step Closer To Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">Dream Job</span> </h1>
                <p className="text-sm text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get Started</button>
            </div>
            <div className="w-2/4">
                <img src={'./images/user.png'} alt="" />
            </div>

        </div>
    );
};

export default Banner;