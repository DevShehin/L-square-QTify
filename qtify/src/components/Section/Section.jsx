import { useState, useEffect } from "react";
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from './Section.module.css';

function Section ({title,fetchData,showToggle=true}){
    const [data, setData] = useState([]);
    const [isCollasped, setIsCollapsed]= useState(false);

    useEffect(()=>{
        const loadData = async () =>{
            try{
                const result= await fetchData();
                setData(result);
            }catch(error){
                console.error("Error fetching data:",error);
            }
        };
        loadData();
    },[fetchData]);

    return(
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>
                {title}
                </h2>

            {showToggle && (
                <button 
                className={styles.toggleButton}
                onClick={()=> setIsCollapsed(!isCollasped)}
                >
                    {isCollasped ? "Show All" : "Collapse"}
                </button>
            )}
            </div>

            {isCollasped ?(
                <Carousel>
                    {data.map(item=>(
                        <Card
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        follows={item.followCount}
                        />
                    ))}
                </Carousel>
            ):(
                <div className={styles.grid}>
                    {data.map(item=>(
                        <Card
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        follows={item.followCount}
                        />
                    ))}
                </div>
            )}
        </section>
    
    );
}

export default Section