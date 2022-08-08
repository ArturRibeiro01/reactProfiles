import React from "react";

import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/59667445?v=4"
          />
        </div>
        <div className={styles.authorinfo}>
          <strong>Artur Ribeiro</strong>
          <span>Desenvolvedor Web</span>
        </div>

        <time title="08 de Agosto de 2022" dateTime="2022-08-08 10:27:48">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe et vel
          eaque ipsam iure ad?
        </p>
        <p>
          👉 <a>jane.design/doctorcare </a>
        </p>
        <p>
          <a>#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
};
