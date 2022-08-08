import styles from "./Header.module.css";
import igniteLogo from "../assets/img/Ignite_logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logomarca" />
    </header>
  );
};
