import { useNavigate } from "react-router-dom";
import styles from './anchorButton.module.css'

export const AnchorButton = ({
    textContent,
    href
}: any) => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate(href);
    }

    return (
        <div onClick={redirect} className={styles['a-btn']}>
            <div className={styles['a-btn-content-wrapper']}>
                <div className={styles['a-btn-bar']} />
                <span className={styles['a-btn-text-content']}> {textContent} </span>
            </div>
        </div>
    );
}