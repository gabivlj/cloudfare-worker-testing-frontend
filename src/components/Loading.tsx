import React from 'react';

export default function Loading({ message }: { message: string }) {
  return (
    <div className='bg-indigo-900 text-center py-4 lg:px-4 w-100 m-3'>
      <div
        className='p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex'
        role='alert'
      >
        <span className='flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3'>
          Loading
        </span>
        <span className='font-semibold mr-2 text-left flex-auto'>
          {message}
        </span>
      </div>
    </div>
  );
}
