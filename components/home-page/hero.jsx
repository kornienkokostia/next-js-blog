import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={'/images/site/kostya.jpg'}
          alt="An image showing Kostya"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I'm Kostya</h1>
      <p>
        I blog about web development - especially front-end frameworks like
        React or Vue.
      </p>
    </section>
  );
};

export default Hero;
