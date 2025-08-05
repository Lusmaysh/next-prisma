// src/components/PostForm.js
'use client';

import React, { useState, useEffect } from 'react';

export default function PostForm({ post, onSubmit, onClose }) {
  // State untuk menyimpan data dari input form
  const [formData, setFormData] = useState({ title: '', content: '' });

  // useEffect akan berjalan ketika prop 'post' berubah (saat tombol edit diklik)
  useEffect(() => {
    if (post) {
      // Jika ada post (mode edit), isi form dengan datanya
      setFormData({ title: post.title, content: post.content || '' });
    } else {
      // Jika tidak ada post (mode create), kosongkan form
      setFormData({ title: '', content: '' });
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data form ke fungsi onSubmit yang ada di page.js
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{post ? 'Edit Post' : 'Create New Post'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="5"
            ></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}