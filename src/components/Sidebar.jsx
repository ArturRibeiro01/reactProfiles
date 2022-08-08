import React from "react";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          src="https://images.unsplash.com/photo-1612994370726-5d4d609fca1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=90"
          className={styles.cover}
        />
        <div className={styles.profile}>
          <strong>Artur Ribeiro</strong>
          <span>Desenvolvedor Web</span>
        </div>

        <footer>
          <a href="#">Editar ser Perfil</a>
        </footer>
      </aside>
    </div>
  );
};
