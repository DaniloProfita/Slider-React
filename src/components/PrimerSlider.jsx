import React from 'react';

const PrimerSlider = ({ mostrar, onClick }) => {
  return (
    <>
      {mostrar && (
        <div className='w-full h-full flex justify-center items-center'>
          <div className='text-3xl'>PrimerSlider</div>
        </div>
      )}
      <div className='absolute text-right right-10 cursor-pointer bottom-1/2 -translate-y-5 hidden sm:block'>
        <div onClick={onClick}>
          <p className='opacity-70 hover:opacity-100 transition duration-500'>PrimerSlider</p>
        </div>
      </div>
    </>
  );
};

export default PrimerSlider;