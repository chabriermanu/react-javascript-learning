import { useState } from "react";

const CounterPage = () => {
    /**
     *  Déclaration de l'état stockant la valeur du compteur
     */
    const [count, setCount]=useState(0);
    /**
     *   implémenter Fonction permettant d'incrémenter l'état du compteur.
     */
    function handleClick() {
        setCount(count+1)
    }
   
    /**
     * On renvoie le JSX correspond à ce qui est à afficher
     */
    return (
        <>
            <h2>Compteur :</h2>

        {/* compléter le code affichant le nombre de clics et des boutons */}
            <button onClick={handleClick}>
                clicked{count}times
            </button>
           
        </>
    )
}

export default CounterPage;