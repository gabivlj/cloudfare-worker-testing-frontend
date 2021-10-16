import React, { useState } from 'react';
import Input from './Input';
import Post from '../model/post';

const Default = {
  title: '',
  content: '',
  username: '',
};

export default function PostInput({
  newPost,
  disabled,
}: {
  newPost: (p: Post) => void;
  disabled: boolean;
}) {
  const [postInput, setPostInput] =
    useState<Pick<Post, 'title' | 'username' | 'content'>>(Default);

  function setInput(key: string, newValue: string) {
    setPostInput(prev => ({ ...prev, [key]: newValue }));
  }

  function onSubmit(e: Event) {
    newPost({ ...postInput, id: 'optimistic' });
    setPostInput(Default);
  }

  return (
    <div>
      <div className='flex flex-wrap h-100'>
        <Input
          className='w-full mt-2'
          placeholder='Your username!'
          onChange={s => {
            setInput('username', s);
          }}
          value={postInput.username}
          label='Username'
        />
        <Input
          className='w-full mt-6'
          placeholder='Title of your post'
          onChange={s => {
            setInput('title', s);
          }}
          value={postInput.title}
          label='Title'
        />
        <Input
          multiline={true}
          className='w-full mt-6 '
          placeholder='Lore ipsum... all of that stuff'
          onChange={s => {
            setInput('content', s);
          }}
          value={postInput.content}
          label='Content'
        />
        <button
          className={
            'ml-3 shadow hover:bg-gray-300 focus:shadow-outline focus:outline-none text-gray-500 font-bold py-2 px-4 rounded ' +
            (disabled ? 'bg-gray-300' : 'bg-gray-200 ')
          }
          onClick={e => onSubmit(e as unknown as Event)}
          disabled={disabled}
          type='button'
        >
          Submit post
        </button>
      </div>
    </div>
  );
}
