import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import './anchorButton.css'

export const AnchorButton = ({
    textContent,
    href
}: any) => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate(href);
    }

    return (
        <div onClick={redirect} className='a-btn'>
            <div className='a-btn-content-wrapper'>
                <div className='a-btn-bar' />
                <span className='a-btn-text-content'> {textContent} </span>
            </div>
        </div>
    );
}