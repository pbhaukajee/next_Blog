import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/pbhk.png"
          alt="An image showing Priyanka"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I&apos;m Priyanka</h1>
      <p>
        I am learning web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;
