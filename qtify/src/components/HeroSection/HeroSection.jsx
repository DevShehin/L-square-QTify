import headphones from '../../assests/headphone.png';
import styles from './HeroSection.module.css';

function HeroSection(){
    return(
        <section className={styles.hero}>
            <div className={styles.heroText}>
        <h1 className={styles.title}>
            100 Thousand Songs,ad-free
            </h1>
        <p className={styles.subtitle}>
            Over thousands podcast episodes
            </p>
            </div>
            <div className={styles.imageContainer}>
            <img 
            src={headphones} 
            alt="Headphones" 
            className={styles.heroImage}
                />
                </div>
        </section>
    );
}

export default HeroSection