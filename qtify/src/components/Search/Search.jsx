import styles from './Search.module.css';

function Search(){
    return (
        <div className={styles.searchContainer}>
            <input type="text"
            placeholder="Search a song of your choice"
            className={styles.searchInput}
             />
             <span className={styles.searchIcon}>🔍</span>
        </div>
    );
}

export default Search;