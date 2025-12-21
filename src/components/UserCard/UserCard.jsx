
// TODO import du module CSS propre à ce composant
// Plus d'informations sur le CSS modulaire : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from './UserCard.module.css'; // Import css modules stylesheet as styles

export const UserCard = ({ user }) => {

    return (
        <div className={ styles.userCard }>
            {/* TODO compléter le code pour interface graphique */}
        </div>
    )
}
