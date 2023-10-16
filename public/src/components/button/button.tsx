import './button.css'

export const Button = ({
    textContent,
    onClick
}: any) => {
    return (
        <>
            <div className='button'>
                <span> {textContent} </span>
            </div>
        </>
    );
}