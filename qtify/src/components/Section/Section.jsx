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
                setData(Array.isArray(result) ? result : []);
            }catch(error){
                console.error("Error fetching data:",error);
                setData([]);
            }
        };
        loadData();
    },[fetchData]);

    return(
        <section className={styles.section} data-testid={`section-${title.toLowerCase().replace(/\s/g, '-')}`}>
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
                        follows={item.followers}
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
                        follows={item.followers}
                        />
                    ))}
                </div>
            )}
        </section>
    
    );
}

export default Section