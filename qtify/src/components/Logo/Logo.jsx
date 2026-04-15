import logoImage from '../../assests/Logo.svg';
import styles from './Logo.module.css';

function Logo(){
    return(
        <div className={styles.logoContainer}>
            <img src={logoImage} alt="QTify Logo" className={styles.logo} />
        </div>
    );   
}
export default Logo;