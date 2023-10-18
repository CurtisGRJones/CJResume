import './spinner.css'

export const Spinner = () => {
    return (
        <div className='cover'>
            <div className='spinner-container'> 
                <div className='spinner'>
                    <div className='hourglass'/>
                    <div className='sand top'/>
                    <div className='sand bottom'/>
                    <div className='sand hourglass' />
                </div>
            </div>
        </div>
    )
}