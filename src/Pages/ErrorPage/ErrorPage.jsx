import { Link, useRouteError } from 'react-router-dom'
import useDynamicTitle from '../../CustomHook/UseDynamicTitle';

const ErrorPage = () => {
    useDynamicTitle("Page Not Found")
    const { error, status } = useRouteError()

    return (
        <div className='flex items-center h-full w-full mt-5'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto '>
                <div className=' text-center'>
                    <div className=' flex justify-center items-center'>
                        <img src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-19458.jpg?w=996&t=st=1684568547~exp=1684569147~hmac=d74fd39dda54eab13998800ff686af550ed5cdc18947915206b97b7161e1bb5a" className="lg:h-[500px]" alt="" />
                    </div>
                    <div>
                        <h2 className="my-5 font-extrabold md:text-6xl text-red-500">ERROR: {status || 404}</h2>
                        <p className='font-semibold md:text-3xl text-red-700 mb-8'>
                            {error?.message}
                        </p>
                    </div>
                    <div>
                        <Link to='/' className='btn btn-outlook bg-blue-500 text-black hover:bg-blue-900'>
                            Go to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage