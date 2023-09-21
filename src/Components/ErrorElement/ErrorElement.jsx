import { useRouteError } from "react-router-dom";

const ErrorElement = () => {

    const error = useRouteError();

    return (
        <div className="text-center text-5xl font-bold mt-36">
            <h1>Page is not Found</h1>
            {
                error.statusText || error.message 
            }
        </div>
    );
};

export default ErrorElement;