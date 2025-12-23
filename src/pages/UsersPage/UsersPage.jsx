import { useEffect, useState } from "react";

import { UserCard } from "../../components/UserCard/UserCard";

//importer les utilisateurs du fichier "/assets/data/users.js"
import  usersData  from "../../assets/data/users.js";

// Importer le css modulaire pour cette page
import style from "./UsersPage.module.css";

const UsersPage = () => {
    // Déclaration d'un state permettant de stocker les utilisateur
    const [users, setUsers] = useState(usersData); // Utilise usersData directement
  
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Erreur:', error);
            }
        };
        
        fetchUsers();
    }, []);


    return (
        <div className={style.usersContainer}>
            <h1>Liste des utilisateurs</h1>
            <div className={style.usersGrid}>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default UsersPage;