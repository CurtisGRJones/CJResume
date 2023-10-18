import { AnchorButton } from '../anchorButton'
import './menuBar.css'

export const MenuBar = () => {
    return (
        <div className="menu-bar">
            <AnchorButton textContent='HOME' href='/' />
            <AnchorButton textContent='RESUME' href='/resume' />
            <AnchorButton textContent='CALCULATOR' href='/calculator' />
            <AnchorButton textContent='ADCSIM' href='/adcSim' />
        </div>
    );
}