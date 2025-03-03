import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='grid h-screen place-content-center bg-black px-4 relative'>
      <div className='absolute top-4 left-4 flex items-center gap-2'>
        <img src='/logo.png' alt='Genfox Logo' className='w-8 h-8' />
        <span className='text-white font-semibold text-2xl'>Genfox</span>
      </div>
      <div className='text-center'>
        <h1 className='text-9xl font-black text-gray-200'>404</h1>

        <p className='text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl'>
          Uh-oh!
        </p>

        <p className='mt-4 text-gray-100'>We can't find that page.</p>

        <Link
          to='/'
          className='mt-6 inline-block rounded-sm bg-[#daeb20] px-5 py-3 text-md font-semibold text-black hover:bg-[#daeb20]/80 focus:ring-3 focus:outline-hidden'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;