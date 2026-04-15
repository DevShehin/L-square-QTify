import headphones from '../../assets/headphone.png';
import styles from './HeroSection.module.css';

function HeroSection(){
    return(
        <section className={styles.hero} data-testid="hero-section">
  <div data-testid="hero-text">
    <h1 className={styles.title}>100 Thousand Songs, ad-free</h1>
    <p className={styles.subtitle}>Over thousands of podcast episodes</p>
  </div>
  <img src={headphones} alt="Headphones" data-testid="hero-image" />
</section>
    );
}

export default HeroSection