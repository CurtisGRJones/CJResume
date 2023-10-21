import { AnchorButton } from '../anchorButton'
import { Logo } from '../logo';
import './menuBar.css'

export const MenuBar = () => {
    return (
        <div className="menu-bar">
            <div className='logo'>
                <Logo width={120} />
            </div>
            <div className='navigation'>
                <AnchorButton textContent='HOME' href='/' />
                <AnchorButton textContent='RESUME' href='/resume' />
                <AnchorButton textContent='CALCULATOR' href='/calculator' />
                { /*<AnchorButton textContent='ADCSIM' href='/adcSim' /> */}
            </div>
            <div className='copywright'>
                <p> &copy; Curtis Jones 2023 </p>
            </div>
        </div>
    );
}