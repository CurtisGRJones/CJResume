import styles from './spinner.module.css'

export const Spinner = () => {
    return (
        <div className={styles['cover']}>
            <div className={styles['spinner-container']}> 
                <div className={styles['spinner']}>
                    <div className={styles['hourglass']}/>
                    <div className={[styles['sand'], styles['top']].join(' ')}/>
                    <div className={[styles['sand'], styles['bottom']].join(' ')}/>
                    <div className={[styles['sand'], styles['hourglass']].join(' ')}/>
                </div>
            </div>
        </div>
    )
}