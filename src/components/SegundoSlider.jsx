import React from 'react';

const SegundoSlider = ({ mostrar, onClick }) => {
  return (
    <>
      {mostrar && (
        <div className='w-full h-full flex justify-center items-center'>
          <div className='text-3xl'>SegundoSlider</div>
        </div>
      )}
      <div className='absolute text-right right-10 cursor-pointer -translate-y-1/2 top-1/2 hidden sm:block'>
        <div onClick={onClick}>
          <p className='opacity-70 hover:opacity-100 transition duration-500'>SegundoSlider</p>
        </div>
      </div>
    </>
  );
};

export default SegundoSlider;