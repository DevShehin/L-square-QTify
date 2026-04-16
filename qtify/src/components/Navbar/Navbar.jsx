import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar(){
    return (
        <nav className={styles.navbar} data-testid="navbar">
  <div data-testid="logo"><Logo /></div>
  <div data-testid="search"><Search /></div>
  <div data-testid="feedback-button"><Button text="Give Feedback" /></div>
</nav>
    );
}

export default Navbar;


