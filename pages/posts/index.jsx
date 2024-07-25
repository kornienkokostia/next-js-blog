import React from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const PostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export default PostsPage;

export const getStaticProps = async () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};
