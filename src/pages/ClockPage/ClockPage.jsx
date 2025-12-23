import { useEffect, useState, useRef } from "react";

import styles from "./ClockPage.module.css";

/**
 * Page présentant une horloge interactive
 */
const ClockPage = () => {

    // déclarer un state permettant de stocker la date et l'heure actuelle
    const [now, setNow] = useState(new Date());

    // stocker l'ID de interval
    const intervalRef = useRef(null);

    // nettoyage si le composant se demonte
    useEffect(() => {
        return()=>clearInterval(intervalRef.current);
    }, []);

    /**
     fonction permettant de démarrer l'horloge
     */
    function handleStartClick() {

        // eviter qu'il y est plusieurs intervalles
        if(intervalRef.current !== null ) return;

        intervalRef.current = setInterval(()=>{
            setNow(new Date());
        }, 1000);
    }

        
    /**
     * TODO fonction permettant de stopper l'horloge
     */
    function handleStopClick() {
       clearInterval(intervalRef.current);
       intervalRef.current = null;
    }

    return (
        <div className={styles.clockContainer}>
            <h1>Horloge</h1>
            <p>{now.toLocaleTimeString()}</p>
            <button onClick = {handleStartClick}>start</button>
            <button onClick = {handleStopClick}>stop</button>
        </div>
    );
}

export default ClockPage;