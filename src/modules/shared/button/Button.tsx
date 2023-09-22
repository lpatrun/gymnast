import { type ReactElement } from 'react';

import styles from './styles.module.css';

interface Props {
    children: ReactElement;
    variant: 'alert' | 'warning' | 'info' | 'success' | 'online' | 'clear' | 'clear-underline';
    onClick?: () => void;
    type?: 'button' | 'reset' | 'submit';
}

export default function Button({ children, variant, onClick, type = 'button' }: Props) {
    return (
        <button type={type} className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
}
