import { MouseEventHandler, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import styles from './calculator.module.css'

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
            // TODO remove eval
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
        <div className={styles['calculator']}>
            <div className={styles['display']}>
                <p> {equation} </p>
            </div>
            <div className={styles['buttons']}>
                <div className={styles['numbers']}>
                    {
                        Array(10).fill(undefined).map((_, index) => {
                            const btnNumber = 9 - index
                            return (
                                <button key={btnNumber} className={[styles['calc-btn'], styles['number-btn'], styles[`number-${btnNumber}`]].join(' ')} onClick={handlePress(btnNumber)}>
                                    {btnNumber}
                                </button>
                            )
                        })
                    }
                </div>
                <div className={styles['symbols']}>
                    {
                        ['+', '-', '*', '/'].map((symbol) => {
                            return (
                                <button key={symbol} className={[styles['calc-btn'], styles['symbol-btn'], styles[`symbol-${symbol}`]].join(' ')} onClick={handlePress(symbol)}>
                                    {symbol}
                                </button>
                            )
                        })
                    }
                </div>
                <div className='functions'>
                    <button className={[styles['calc-btn'], styles['function-btn'], styles['function-back']].join(' ')} onClick={handleBack}>
                        <div className={styles['arrow-left']} />
                    </button>
                    <button className={[styles['calc-btn'], styles['function-btn'], styles['function-clear']].join(' ')} onClick={handleClear}>
                        <p> CLR </p>
                    </button>
                    <button className={[styles['calc-btn'], styles['function-btn'], styles['function-eq']].join(' ')} onClick={handleSubmit}>
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