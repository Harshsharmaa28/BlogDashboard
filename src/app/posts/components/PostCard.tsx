"use client";

import { useState, useEffect } from 'react';
import { Post, User } from '@/types';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
  user: User | undefined;
}

export default function PostCard({ post, user }: PostCardProps) {
  const [likes, setLikes] = useState<number>(post.likes || 0);


  useEffect(() => {
    const savedLikes = localStorage.getItem(`post-${post.id}-likes`);
    console.log(savedLikes, `post-${post.id}-likes`)
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10));
    }
  }, [likes]);

  useEffect(() => {
    localStorage.setItem(`post-${post.id}-likes`, likes.toString());
  }, [likes]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">
        {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
      </p> */}

      {user && (
        <div className="text-gray-600 mb-2 text-sm font-medium">
          <span>Posted by: </span>
          <span className="text-blue-600">{user.name}</span>
        </div>
      )}
      <h3 className="text-gray-800 font-semibold text-lg mb-2">
        <span className="text-gray-500 font-medium">Title: </span>
        {post.title}
      </h3>

      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3  py-1">
        {post.body}
      </p>
      <Link className="text-blue-600 hover:underline font-semibold" href={`/posts/${post.id}`}>
        Read More
      </Link>
    </div>
  );
}