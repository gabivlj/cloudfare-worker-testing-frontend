import React, { DetailedHTMLProps } from 'react';

interface InputProps {
  onChange: (newText: string) => void;
  placeholder: string;
  value: string;
  label: string;
  className?: string;
  multiline?: boolean;
}

export default function Input(props: InputProps) {
  return (
    <div className={'flex ' + props.className}>
      <div className={'md:w-1/3 mt-2'}>
        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>
          {props.label}
        </label>
      </div>
      <div className='md:w-2/3'>
        {!props.multiline ? (
          <input
            className={
              'bg-gray-200 appearance-none  py-2 px-4 border-2 border-gray-200 rounded w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            }
            type='text'
            placeholder={props.placeholder}
            value={props.value}
            onChange={function (e) {
              props.onChange(e.target.value);
            }}
          />
        ) : (
          <textarea
            className={
              'bg-gray-200 p-3 appearance-none border-2 border-gray-200 rounded w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            }
            placeholder={props.placeholder}
            value={props.value}
            onChange={function (e) {
              props.onChange(e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
}
