import styles from './404.module.css'

export const Page404 = () => {
    return (
        <div className={styles['404']}>
            <h1> Error Code 404 </h1>
            <h3> Page Not Found </h3>
        </div>
    );
}