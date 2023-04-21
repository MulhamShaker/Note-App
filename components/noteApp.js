import { useState } from 'react';

const Home = () => {
    const [note, setNote] = useState('');

    const handleSaveNote = async () => {
        try {
            const response = await fetch('/api/saveData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ note }),
            });

            if (response.ok) {
                console.log('Note saved successfully');
            } else {
                console.error('Failed to save note');
            }
        } catch (err) {
            console.error('Failed to save note', err);
        }
    };

    return (
        <div className='container text-center grid grid-cols-1 ml-96'>
            <h1 className="mt-20 text-4xl md:text-5xl lg:text-2xl  dark:text-white font-extrabold leading-none tracking-tight text-gray-900 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 before:content-['Add_'] before:text-blue-400">Note</h1>
            <div className=' sm:grid-cols-1 md:grid-cols-1'>
                <textarea placeholder='Add A Note' rows={5} value={note} onChange={(e) => setNote(e.target.value)} className='placeholder:text-center mt-10 bg-gray-400 text-black text-2xl font-serif font-bold rounded-lg text-start w-96 h-80 form-control bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' />
                <div className=''>
                    <button onClick={handleSaveNote} className='text-white bg-gray-400 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-800 dark:focus:ring-blue-800 mt-5'>Save</button>
                </div>
                <div className='notification'>
                    <span className='notification_progress'>Welcome to Note App</span>
                </div>
            </div>
        </div>
    );
};

export default Home;
