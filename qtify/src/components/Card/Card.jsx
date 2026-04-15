import {Chip} from '@mui/material';
import styles from './Card.module.css';

function Card ({image, title,follows,likes,isAlbum=true}){
    return(
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img 
                src={image}
                 alt={title}
                 className={styles.image}
                 />

                 <Chip 
                 label={isAlbum ?`${follows} Follows` : `${likes} Likes`}
                 size="small"
                 className={styles.chip}
                 sx={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    fontSize: '10px',
                 }}
                 />
            </div>

            <div className={styles.cardBottom}>
                <p className={styles.title}>
                 {title}
                </p>
            </div>
        </div>
    );
}

export default Card;