import igniteLogo from "../assets/img/Ignite_logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logomarca" />
    </header>
  );
};
