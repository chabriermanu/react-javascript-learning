import { useRef, useState } from "react";

import styles from "./TaskPage.module.css";


const TasksPage = () => {

    /**
     * TODO Déclaration d'un état permettant de stocker la liste des tâches.
     */
    const [tasks, setTasks] = useState([]);

    /**
     * Référence vers l'input (élément du DOM). Permet de retrouver ce que l'utilisateur a saisi.
     */
    const inputRef = useRef(null);

    /**
     * Fonction qui sera appelée en cas de clic pour ajouter un élément.
     * 
     * Il est possible de NE PAS passer en paramètre event: React.MouseEvent<HTMLButtonElement>
     */
    function handleAddClick() {
        // création d'un nouveau tableau à partir du tableau "prevTasks"
        setTasks((prevTasks) => [...prevTasks, inputRef.current?.value])
        // ajouter la valeur de l'input à la liste des tâches    
    }

    /**
     * TODO fonction permettant de supprimer toutes les tâches
     */
    function handleClearClick() {
        if (inputRef.current.value === "0"){
            return
        }else {
            setTasks([])
            inputRef.current.value = ""
        };
    }

    return (
        <>
            <h2>Liste de tâches :</h2>
            <input ref={inputRef} />
            <button onClick={handleAddClick}>Ajouter</button>
            <button onClick={handleClearClick}>Tout supprimer</button>
            <ul className={ styles.task }>
                {
                    // ["Apprendre React", "Les courses", "Arrêter de fumer"]
                    // Le map transforme chaque chaîne de caractères du tableau (le state) en un JSX (en gros HTML + variable JS)
                    // pour chaque élément, le paramètre "uniqueKey" va prendre une valeur (0, 1...). C'est un index.
                    tasks.map((todo, uniqueKey) => {
                        return <li key={uniqueKey}>{ todo }</li>
                    })
                }
            </ul>
        </>
    )
}

export default TasksPage;