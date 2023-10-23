import { AnchorButton } from '../anchorButton'
import { Logo } from '../logo';
import styles from './navigationBar.module.css'

export const NavigationBar = () => {
    return (
        <div className={styles['navigation-bar']}>
            <div className={styles['logo']}>
                <Logo width={120} />
            </div>
            <div className={styles['navigation']}>
                <AnchorButton textContent='HOME' href='/' />
                <AnchorButton textContent='RESUME' href='/resume' />
                <AnchorButton textContent='CALCULATOR' href='/calculator' />
                { /*<AnchorButton textContent='ADCSIM' href='/adcSim' /> */}
            </div>
            <div className={styles['copywright']}>
                <p> &copy; Curtis Jones 2023 </p>
            </div>
        </div>
    );
}