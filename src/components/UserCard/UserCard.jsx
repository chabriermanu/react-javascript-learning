
// TODO import du module CSS propre à ce composant
// Plus d'informations sur le CSS modulaire : https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
import styles from './UserCard.module.css'; // Import css modules stylesheet as styles

export const UserCard = ({ user }) => {
    // Gestion des valeurs par défaut si certaines données sont manquantes
    const { 
        id,
        name, 
        email, 
        avatar, 
        role = 'Utilisateur',
        status = 'active'
    } = user;

    return (
        <div className={styles.userCard}>
            <div className={styles.header}>
                {/* Avatar utilisateur */}
                <div className={styles.avatarContainer}>
                    {avatar ? (
                        <img 
                            src={avatar} 
                            alt={`Avatar de ${name}`}
                            className={styles.avatar}
                        />
                    ) : (
                        <div className={styles.avatarPlaceholder}>
                            {name?.charAt(0).toUpperCase()}
                        </div>
                    )}
                    {/* Indicateur de statut */}
                    <span 
                        className={`${styles.statusBadge} ${styles[status]}`}
                        title={status === 'active' ? 'En ligne' : 'Hors ligne'}
                    />
                </div>

                {/* Informations utilisateur */}
                <div className={styles.userInfo}>
                    <h3 className={styles.userName}>{name}</h3>
                    <p className={styles.userEmail}>{email}</p>
                    <span className={styles.userRole}>{role}</span>
                </div>
            </div>

            {/* Actions (optionnel) */}
            <div className={styles.actions}>
                <button 
                    className={styles.btnPrimary}
                    aria-label={`Voir le profil de ${name}`}
                >
                    Voir profil
                </button>
                <button 
                    className={styles.btnSecondary}
                    aria-label={`Contacter ${name}`}
                >
                    Contacter
                </button>
            </div>
        </div>
    );
};
