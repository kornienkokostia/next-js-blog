import Image from 'next/image';
import React from 'react';
import classes from './post-item.module.css';
import Link from 'next/link';

const PostItem = ({ post }) => {
  const { title, image, excert, date, slug } = post;

  const formatted = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkHref = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkHref}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formatted}</time>
          <p>{excert}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
