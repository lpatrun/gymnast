import gymnastLogo from '../../../assets/gymnast.svg';
import avatar from '../../../assets/avatar.jpg';
import styles from './styles.module.css';

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <div className={`${styles.headerRow} ${styles.leftSide}`}>
                <img src={gymnastLogo} alt='Gymnast logo' />
                <h3>
                    Competition name · <span className={styles.secondaryText}>Date</span>
                </h3>
            </div>
            <div className={`${styles.headerRow} ${styles.rightSide}`}>
                <img src={avatar} alt='Nicolas Cage' />
                <p>Nikola Kavezić</p>
            </div>
        </header>
    );
}
