import { MouseEventHandler, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import styles from './calculator.module.css'

export const Calculator = () => {
    const [equation, setEquation] = useState('')
    const [usingResult, setUsingResult] = useState(false)

    useEffect(() => {
        console.log('Hello! if you are here you may be undering how I did this, I tried to make the logic without any prebuilt ' +
                    'libraries to help me to show how I problem solve, for easier to access code please look at the github repo here ' +
                    'https://github.com/CurtisGRJones/CJResume/blob/main/app/src/pages/calculator/index.tsx' )
    }, [])

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
            // TODO check for adjacent symbols
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
        // Not the most efficient way to deal with equations, but is 
        // showing a way that I would solve it for the basic calculator
        try {
            // TODO Add more possible functions
            const solveEquation = (expression: string): number => {
                const stringArray: Array<string> = expression.split(/(\*|\/|\+|-)/g).filter((value) => {
                    return value.length > 0;
                })
                let equationArray: Array<string | number> = []
                let negative: boolean = false
                let expectsNumber: boolean = true;
                stringArray.forEach((value) => {
                    value = value.replace(/ /g,'')
                    if (['*', '/', '+', '-'].includes(value)) {
                        if(expectsNumber) {
                            if (!negative && value === '-') {
                                negative = true;
                            } else if (!negative && value === '+') {
                                // Do nothing, this has no effect
                            } else {
                                throw Error('Multiple functions next to each other');
                            }
                        } else {
                            equationArray.push(value);
                            expectsNumber = true;
                        } 
                        
                    } else {
                        equationArray.push((negative ? -1 : 1) *Number(value))
                        negative = false;
                        expectsNumber = false;
                    }
                })

                console.log('Inital Array: ', equationArray)

                const solveForSymbols = ( 
                    expressionArray: Array<string | number>, 
                    symbolToName: { 
                        [symbol :string]: (a: number, b: number) => number 
                    }): Array<string | number> => {
                    
                    const symbols = Object.keys(symbolToName)
                    
                    let foundSymbolIndexes: Array<number> = [];
                    expressionArray.forEach( (value, index ) => {
                        if ( symbols.includes(String(value)) ) {
                            foundSymbolIndexes.push(expressionArray.length - index - 1)
                        }
                    })

                    expressionArray = expressionArray.reverse()

                    foundSymbolIndexes.forEach((value) => {
                        const beforeValue = value + 1
                        const afterValue = value - 1
                        const a = expressionArray[beforeValue];
                        const b = expressionArray[afterValue];
                        const symbol = expressionArray[value]

                        if( typeof a !== 'number' ) {
                            throw Error(`Expected number before symbol, got ${a} instead`)
                        }

                        if( typeof b !== 'number' ) {
                            throw Error(`Expected number after symbol, got ${b} instead`)
                        }

                        const newValue = symbolToName[expressionArray[value]](a, b)

                        console.log(`Resolved ${a}${symbol}${b}=${newValue}`)

                        expressionArray.splice(afterValue, 2)
                        expressionArray[afterValue] = newValue;
                    })

                    console.log('Symbols: ', symbols)
                    console.log('Symbol Locations: ', foundSymbolIndexes)

                    return expressionArray.reverse()
                }

                const symbolFunctions: Array<
                { 
                    [symbol :string]: (a: number, b: number) => number 
                }
                > = [
                    {
                        '/': (a: number, b: number): number => {
                            return a / b
                        },
                        '*': (a: number, b: number): number => {
                            return a * b
                        },
                    },
                    {
                        '+': (a: number, b: number): number => {
                            return a + b
                        },
                        '-': (a: number, b: number): number => {
                            return a - b
                        },
                    },
                ]

                symbolFunctions.forEach((value) => {
                    console.log('Before: ', equationArray)
                    equationArray = solveForSymbols(equationArray, value)
                    console.log('After: ', equationArray)
                })

                // TODO properly test to make sure it is 1 long and a number
                if ( equationArray.length !== 1 || typeof equationArray[0] !== 'number' ) {
                    throw Error('Equation left with a non-number or more than 1 result')
                }

                return equationArray[0];
            }
            
            setEquation(String(solveEquation(equation)));
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