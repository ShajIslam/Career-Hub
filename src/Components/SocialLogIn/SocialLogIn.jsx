import { FcGoogle } from 'react-icons/fc';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom';

const SocialLogIn = () => {

    const {googlSignIn, githubSignIn, facebookSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

   

    const handleGoogleSignIn = ()=>{
        googlSignIn()
        .then(result=>{
            console.log(result.user);
            toast.success('User Created Successfully!')
            const address = localStorage.getItem('location') || '/'
            localStorage.removeItem('location');
            navigate(address);

        })
        .catch(error=>{
            console.log(error.message);
            toast.error("please try again")
        })
    }

    const handleGithubSignIn = ()=>{
        githubSignIn()
        .then(result=>{
            console.log(result.user);
            toast.success('User Created Successfully!')
        })
        .catch(error=>{
            console.log(error.message);
            toast.error("please try again")
        })
    }

    const handleFacebookSignIn = ()=>{
        facebookSignIn()
        .then(result=>{
            console.log(result.user);
            toast.success('User Created Successfully!')
        })
        .catch(error=>{
            console.log(error.message);
            toast.error("please try again")
        })
    }

    return (
        <div>
            
<div className="bg-white dark:bg-gray-900 custom-gradient ">
    
        <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <button onClick={handleGoogleSignIn} className='text-3xl'>
                 
                    <FcGoogle></FcGoogle>

                  <span className="sr-only">Google page</span>
              </button>
              <button onClick={handleFacebookSignIn} className='text-3xl'>
                  <BsFacebook></BsFacebook>
                  <span className="sr-only">Facebook community</span>
              </button>
            
              <button onClick={handleGithubSignIn} className='text-3xl'>
                  <BsGithub></BsGithub>
                  <span className="sr-only">GitHub account</span>
              </button>
              
        </div>
</div>

        </div>
    );
};

export default SocialLogIn;