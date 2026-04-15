import Logo from "../Logo/Logo";
import Search from "../search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Logo />
            <Search />
            <Button text="Give Feedback" />
        </nav>
    );
}

export default Navbar;