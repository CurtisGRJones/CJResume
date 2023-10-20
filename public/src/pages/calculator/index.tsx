import { MouseEventHandler, useState } from 'react'
import './calculator.css'
import { ToastContainer, toast } from 'react-toastify'

export const Calculator = () => {
    const [equation, setEquation] = useState('')
    const [usingResult, setUsingResult] = useState(false)

    const handlePress = (element: number | string): MouseEventHandler<HTMLButtonElement> => {
        return event => {
            if(usingResult && !Number.isNaN(Number((element)))) {
                setEquation(String(element))
                setUsingResult(false)
                return
            } else if(equation === "0") {
                setEquation(String(element))
                return
            }
            setEquation(equation + String(element))
            setUsingResult(false)
        }
    }

    const handleBack= (event: any) => {
        if(usingResult) {
            setEquation('')
            setUsingResult(false)
            return
        }
        setEquation(equation.slice(0, -1))
    }

    const handleClear= (event: any) => {
        setEquation('')
        setUsingResult(false)
    }

    const handleSubmit = (event: any) => {
        try {
            setEquation(eval(equation));
            setUsingResult(true)
        } catch (err) {
            setEquation('');
            if( err instanceof Error ) {
                toast(err.message)
            } else {
                toast(String(err))
            }
        }
    }

    return (
        <div className='calculator'>
            <div className='display'>
                <p> {equation} </p>
            </div>
            <div className='buttons'>
                <div className='numbers'>
                    {
                        Array(10).fill(undefined).map((_, index) => {
                            const btnNumber = 9 - index
                            return (
                                <button key={btnNumber} className={`calc-btn number-btn number-${btnNumber}`} onClick={handlePress(btnNumber)}>
                                    {btnNumber}
                                </button>
                            )
                        })
                    }
                </div>
                <div className='symbols'>
                    {
                        ['+', '-', '*', '/'].map((symbol) => {
                            return (
                                <button key={symbol} className={`calc-btn symbol-btn symbol-${symbol}`} onClick={handlePress(symbol)}>
                                    {symbol}
                                </button>
                            )
                        })
                    }
                </div>
                <div className='functions'>
                    <button className={`calc-btn function-btn function-back`} onClick={handleBack}>
                        <div className='arrow-left' />
                    </button>
                    <button className={`calc-btn function-btn function-clear`} onClick={handleClear}>
                        <p> CLR </p>
                    </button>
                    <button className={`calc-btn function-btn function-eq`} onClick={handleSubmit}>
                        <p> = </p>
                    </button>
                </div>
            </div>
            { 
                // TODO work on this <ToastContainer />
            }
        </div>
    )
}