const getStoredJobApplication = ()=>{
    const storedJobApplication = localStorage.getItem('jobapplications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
  }
  return [];
}
    const saveJobApplication =id=>{
        const storedJobApplications = getStoredJobApplication();
        const exists = storedJobApplications.find(jobId=>jobId === id)
        if(!exists){
           storedJobApplications.push(id);
           localStorage.setItem('jobapplications', JSON.stringify(storedJobApplications));
        }
    }
export {saveJobApplication, getStoredJobApplication};