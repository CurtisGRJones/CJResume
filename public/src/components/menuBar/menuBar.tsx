import { Button } from '../button/button'
import './menuBar.css'

export const MenuBar = () => {
    return (
        <div className="menu-bar">
            <Button textContent='HOME' href='/' />
            <Button textContent='RESUME' href='/resume' />
            <Button textContent='CALCULATOR' href='/calculator' />
        </div>
    );
}