import React from 'react';
import * as PostModel from '../model/post';

export default function Post({ post }: { post: PostModel.default }) {
  return (
    <article className='flex flex-col shadow my-4 w-full'>
      <div className='bg-white flex flex-col justify-start p-6'>
        <p className='text-blue-700 text-sm font-bold uppercase pb-4'>POST</p>
        <p className='text-3xl font-bold hover:text-gray-700 pb-4'>
          {post.title}
        </p>
        <p className='text-sm pb-8'>
          By{' '}
          <p className='font-semibold hover:text-gray-800'>{post.username}</p>
        </p>
        <p className='pb-3'>{post.content}</p>
      </div>
    </article>
  );
}
