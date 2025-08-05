// src/app/page.js
'use client'; // <-- Tambahkan ini di baris paling atas

import React, { useState, useEffect } from 'react';
import PostsList from '../components/PostsList';
import PostForm from '../components/PostForm';
import './crud.css'; // Impor file CSS baru kita
import styles from './page.module.css';

export default function Home() {
  // State untuk menyimpan daftar posts
  const [posts, setPosts] = useState([]);
  // State untuk status loading
  const [isLoading, setIsLoading] = useState(true);
  // State untuk mengontrol visibilitas form (modal)
  const [isFormVisible, setIsFormVisible] = useState(false);
  // State untuk menyimpan post yang sedang diedit
  const [currentPost, setCurrentPost] = useState(null);

  // Fungsi untuk mengambil data posts dari API
  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      if (data.sucess) {
        setPosts(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
    setIsLoading(false);
  };

  // useEffect untuk memanggil fetchPosts saat komponen pertama kali dimuat
  useEffect(() => {
    fetchPosts();
  }, []);

  // Fungsi untuk menangani submit form (Create & Update)
  const handleFormSubmit = async (formData) => {
    const method = currentPost ? 'PATCH' : 'POST';
    const url = currentPost ? `/api/posts/${currentPost.id}` : '/api/posts';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Jika berhasil, tutup form dan muat ulang data posts
        setIsFormVisible(false);
        setCurrentPost(null);
        fetchPosts();
      } else {
        console.error("Failed to save post");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Fungsi untuk membuka form dalam mode "Create"
  const handleCreate = () => {
    setCurrentPost(null);
    setIsFormVisible(true);
  };

  // Fungsi untuk membuka form dalam mode "Edit"
  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsFormVisible(true);
  };

  // Fungsi untuk menghapus post
  const handleDelete = async (postId) => {
    // Tampilkan konfirmasi sebelum menghapus
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await fetch(`/api/posts/${postId}`, { method: 'DELETE' });
        if (response.ok) {
          // Jika berhasil, muat ulang data posts
          fetchPosts();
        } else {
          console.error("Failed to delete post");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <main className={styles.main}>
      <div className="crud-container">
        <div className="crud-header">
          <h1>Prisma ORM</h1>
          <button onClick={handleCreate} className="btn btn-primary">Create New Post</button>
        </div>
        
        {isLoading ? (
          <p>Loading posts...</p>
        ) : (
          <PostsList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
        )}

        {isFormVisible && (
          <PostForm
            post={currentPost}
            onSubmit={handleFormSubmit}
            onClose={() => setIsFormVisible(false)}
          />
        )}
      </div>
    </main>
  );
}