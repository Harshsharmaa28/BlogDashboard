import { useState } from 'react';

export default function CommentForm({ postId,onAddComment}) {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { name, body, postId };
    onAddComment(newComment);
    setName('');
    setBody('')
  };

  return (
    <form className='flex gap-10 mx-5' onSubmit={handleSubmit}>
      <input className=' text-center' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      <textarea className=' text-center' value={body} onChange={(e) => setBody(e.target.value)} placeholder="Your comment" />
      <button className=' border border-black bg-green-500 font-bold px-2' type="submit">Add Comment</button>
    </form>
  );
}
