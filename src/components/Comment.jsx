import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

const Comment = ({ content }) => {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/59667445?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Artur Ribeiro</strong>
              <time title="08 de Agosto de 2022" dateTime="2022-08-08 10:27:48">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
