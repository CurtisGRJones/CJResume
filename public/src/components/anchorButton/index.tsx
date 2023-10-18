import './anchorButton.css'

export const AnchorButton = ({
    textContent,
    href
}: any) => {
    return (
        <a href={href} className='a-btn'>
            <div className='a-btn-content-wrapper'>
                <span> {textContent} </span>
            </div>
        </a>
    );
}