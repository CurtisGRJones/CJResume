import { Button } from '../button/button'
import './menuBar.css'

export const MenuBar = () => {
    return (
        <div className="menu-bar">
            <Button textContent='HOME'/>
            <Button textContent='RESUME'/>
            <Button textContent='CALCULATOR'/>
        </div>
    );
}