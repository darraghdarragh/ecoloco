// App.js

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import api from './services/api';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {/* News Box */}
        <div className="news-box">
          <img
            src="https://placekitten.com/200/150" // Placeholder image URL
            alt="News Image"
          />
          <div className="news-content">
            <h2>Breaking News Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </p>
          </div>
        </div>

        {/* Feed Component */}
        <Feed posts={posts} />
      </main>
    </div>
  );
}

export default App;
