import React from 'react';
import PostItem from './post-item';
import classes from './posts-grid.module.css';

const PostsGrid = ({ posts }) => {
  return (
    <div className={classes.grid}>
      {posts.map(el => (
        <PostItem post={el} key={el.slug} />
      ))}
    </div>
  );
};

export default PostsGrid;
