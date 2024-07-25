import React from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData } from '../../lib/posts-util';

const PostDetailsPage = ({ post }) => {
  return <PostContent post={post} />;
};

export default PostDetailsPage;

export const getServerSideProps = async ({ params }) => {
  return {
    props: {
      post: getPostData(params.slug),
    },
  };
};
