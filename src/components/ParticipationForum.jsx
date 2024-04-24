/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const RegistrationForumofHackathon = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return;
    setPosts([...posts, newPost]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hurry Up</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
        />
       
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Post
        </button>
      </form>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="border border-gray-300 rounded-md p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrationForumofHackathon;
