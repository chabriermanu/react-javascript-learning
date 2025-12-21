import { useEffect, useState } from "react";

import styles from "./ClockPage.module.css";

/**
 * Page présentant une horloge interactive
 */
const ClockPage = () => {

    // TODO déclarer un state permettant de stocker la date et l'heure actuelle
    // Indice sur ce qu'il faudrait stocker : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date
    

    useEffect(() => {

    }, []);

    /**
     * TODO fonction permettant de démarrer l'horloge
     */
    function handleStartClick() {
    }

        
    /**
     * TODO fonction permettant de stopper l'horloge
     */
    function handleStopClick() {

    }

    return (
        <div className={styles.clockContainer}>
            {/* TODO implémenter l'interface graphique de l'horloge */}
        </div>
    );
}

export default ClockPage;