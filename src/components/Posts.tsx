import React, { useEffect, useState } from 'react';
import PostAPI from '../api/post';
import useLoading from '../hooks/useLoading';
import Post from '../model/post';
import * as PostRender from './Post';
import PostInput from './PostInput';
import Error from './Error';

export default function Posts() {
  const { wrap, Loading, loading } = useLoading('Loading...');
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    wrap(PostAPI.getPosts())
      .then(posts => {
        setPosts(posts);
      })
      .catch(err => {
        console.error('error...');
      });
  }, [wrap]);

  function newPost(post: Post) {
    wrap(PostAPI.createPost(post))
      .then(response => {
        if (response.success) {
          setPosts(posts => {
            posts[0].id = response.id ? response.id : 'unreachable';
            return [...posts];
          });
          return;
        }
        setPosts(posts => posts.slice(1));
        setError('Error adding a post: ' + response.message);
        setTimeout(() => {
          setError('');
        }, 3000);
      })
      .catch(err => {
        console.error('unknown error...');
      });
    setPosts(posts => [post, ...posts]);
  }

  return (
    <div className='w-full md:w-2/3 flex flex-col items-center px-3'>
      <Loading />
      {error && <Error message={error} />}
      <div className='m-3'>
        <PostInput newPost={newPost} disabled={loading} />
      </div>
      {posts.map(post => (
        <PostRender.default key={post.id || '1'} post={post} />
      ))}
    </div>
  );
}
