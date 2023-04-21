import React from 'react';
import NoteForm from '../components/noteApp';

const Home = () => {
  return (
    <div className='container text-center grid grid-cols-2'>
      <h1 className=' text-start text-gray-100 text-xl mt-6 ml-4 font-mono underline underline-offset-8  decoration-6 decoration-blue-400 dark:decoration-blue-600'>Note App</h1>
      <h1 className=' text-end text-gray-100 text-xl mt-6 mr-4 font-mono underline underline-offset-8  decoration-6 decoration-blue-400 dark:decoration-blue-600'>Mulham Shaker</h1>
      <NoteForm />
    </div>
  );
};

export default Home;