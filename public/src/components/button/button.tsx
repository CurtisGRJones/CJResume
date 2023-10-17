import './button.css'

export const Button = ({
    textContent,
    href
}: any) => {
    return (
        <a href={href} className='button'>
            <div className='btn-content-wrapper'>
                <span> {textContent} </span>
            </div>
        </a>
    );
}