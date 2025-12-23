import { useEffect, useState } from "react";

import { UserCard } from "../../components/UserCard/UserCard";

//importer les utilisateurs du fichier "/assets/data/users.js"
import { users } from "../../assets/data/users";

// Importer le css modulaire pour cette page
import style from "./UsersPage.module.css";

const UsersPage = () => {
    // Déclaration d'un state permettant de stocker les utilisateur
    const [users, setUsers] = useState([]);

    // TODO compléter ce useEffect qui se déclenche à la création du composant
    // Dans un premier temps : complétez le avec la tableau d'utilisateurs provenant du fichier "assets/data/users.tsx"
    //
    // Dans un deuxième temps, ajoutez une requête HTTP pour l'obtention des données 
    // Url à utiliser : https://jsonplaceholder.typicode.com/users
    // Tutoriel pouvant vous aider : https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le
    useEffect(() => {
        // TODO mise à jour du state
    }, []);

    return (
        <p>TODO</p>
        // {
        // // TODO faire interface graphique pour la liste des utilisateurs
        // // Pour générer les "cards" utilisateur veillez à vous servir du composant "UserCard
        // }
    );

}

export default UsersPage;