'use client';

import React, { useState } from 'react';
import { Search, Filter, ArrowUp } from 'lucide-react';
import '../styles/discussion-forum.css';
import PostModal from './PostModal';

interface Reply {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
}

interface DiscussionPost {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  week: string;
  date: string;
  replyCount: number;
  replies: Reply[];
  isExpanded?: boolean;
}

const DiscussionForum: React.FC = () => {
    const [postmodal, setPostModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<DiscussionPost[]>([
    {
      id: 1,
      author: 'Mariam P',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mariam',
      title: 'What is the value of X in this equation?',
      content:
        'When solving this equation in constant value function, i did not received any result though this method. Please help me solve this problem using this method of solution while keeping the algorithm same.',
      week: 'Week-1',
      date: 'Apr 22, 2025',
      replyCount: 7,
      replies: [],
      isExpanded: false,
    },
    {
      id: 2,
      author: 'Mariam P',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mariam',
      title: 'What is the value of X in this equation?',
      content:
        'When solving this equation in constant value function, i did not received any result though this method. Please help me solve this problem using this method of solution while keeping the algorithm same.',
      week: 'Week-1',
      date: 'Apr 22, 2025',
      replyCount: 2,
      replies: [
        {
          id: 1,
          author: 'Mariam P',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mariam',
          content:
            'When solving this equation in constant value function, i did not received any result though this method. Please help me solve this problem using this method of solution while keeping the algorithm same.',
          timestamp: 'Apr 22, 2025',
        },
        {
          id: 2,
          author: 'Mariam P',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mariam',
          content:
            'When solving this equation in constant value function, i did not received any result though this method. Please help me solve this problem using this method of solution while keeping the algorithm same.',
          timestamp: 'Apr 22, 2025',
        },
      ],
      isExpanded: true,
    },
    {
      id: 3,
      author: 'Mariam P',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mariam',
      title: 'What is the value of X in this equation?',
      content:
        'When solving this equation in constant value function, i did not received any result though this method. Please help me solve this problem using this method of solution while keeping the algorithm same.',
      week: 'Week-1',
      date: 'Apr 22, 2025',
      replyCount: 0,
      replies: [],
      isExpanded: false,
    },
  ]);

  const toggleReplies = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, isExpanded: !post.isExpanded } : post
      )
    );
  };

  const handleWritePost = () => {
    setPostModal(true)
  };

  return (
    <div className="forum-container">
      {/* Forum Header */}
      <div className="forum-header">
        <div className="search-bar-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search topic for discussion"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="forum-controls">
          <button className="filter-btn">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="sort-btn">
            <ArrowUp size={18} />
            <span>Sort</span>
          </button>
          <button className="write-post-btn" onClick={handleWritePost}>
            ✏️ Write a post
          </button>
        </div>
      </div>

      {/* Discussions List */}
      <div className="discussions-list">
        {posts.map((post) => (
          <div key={post.id} className="discussion-post">
            <div className="post-header">
              <img src={post.avatar || "/placeholder.svg"} alt={post.author} className="user-avatar" />
              <div className="post-meta">
                <div className="author-info">
                  <span className="author-name">{post.author}</span>
                  <span className="post-action">posted a discussion in</span>
                  <span className="week-badge">{post.week}</span>
                </div>
                <span className="post-date">{post.date}</span>
              </div>
            </div>

            <div className="post-content">
              <h4 className="post-title">{post.title}</h4>
              <p className="post-description">{post.content}</p>

              {post.replyCount > 0 && !post.isExpanded && (
                <button
                  className="view-replies-btn"
                  onClick={() => toggleReplies(post.id)}
                >
                  View {post.replyCount} Replies
                </button>
              )}

              {post.isExpanded && post.replies.length > 0 && (
                <div className="replies-container">
                  {post.replies.map((reply) => (
                    <div key={reply.id} className="reply-item">
                      <img src={reply.avatar || "/placeholder.svg"} alt={reply.author} className="reply-avatar" />
                      <div className="reply-content">
                        <div className="reply-author">{reply.author}</div>
                        <p className="reply-text">{reply.content}</p>
                      </div>
                    </div>
                  ))}

                  {post.replyCount > 0 && (
                    <button
                      className="hide-replies-btn"
                      onClick={() => toggleReplies(post.id)}
                    >
                      Hide Replies
                    </button>
                  )}
                </div>
              )}

              <div className="reply-input-container">
                <input
                  type="text"
                  placeholder="Give a reply..."
                  className="reply-input"
                />
                <button className="send-reply-btn">➤</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Write Post Modal */}
      {postmodal && (
        <PostModal onClose={()=> setPostModal(false)}/>
      )}
    </div>
  );
};

export default DiscussionForum;
