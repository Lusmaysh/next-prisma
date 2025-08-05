// src/components/PostsList.js
import React from 'react';

// Terima props posts, onEdit, dan onDelete dari komponen induk
export default function PostsList({ posts, onEdit, onDelete }) {
  return (
    <div className="posts-list">
      {posts.map(post => (
        <div key={post.id} className="post-item">
          <div className="post-content">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
          <div className="post-actions">
            <button onClick={() => onEdit(post)} className="btn btn-edit">Edit</button>
            <button onClick={() => onDelete(post.id)} className="btn btn-delete">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}