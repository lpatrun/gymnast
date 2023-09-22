import Button from '../../../shared/button/Button';
import styles from './styles.module.css';
import casperLogo from '../../../../assets/casper.jpg';

interface Props {
    onCLick: () => void;
}

export default function EmptyListComponent({ onCLick }: Props) {
    return (
        <div className={styles.emptyList}>
            <img className={styles.placeholderImg} src={casperLogo} alt='List is empty' />

            <h3>No applications yet</h3>

            <p className={styles.emptyListDescription}>
                List of your requests will appear here when you add gymnasts.
            </p>

            <Button variant='warning' onClick={onCLick}>
                <p>Apply gymnasts</p>
            </Button>
        </div>
    );
}
