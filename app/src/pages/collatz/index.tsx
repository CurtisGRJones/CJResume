import { ChangeEvent, useEffect, useState } from 'react'
import { Graph } from '../../components'
import styles from './collatz.module.css'

export const Collatz = () => {
    const defaultValue = 7
    const maxIttr = 1000
    const [data, setData] = useState<graphData>([])

    const calculate = (num: number): graphData => {
        const ret: graphData = [{
            x: 0,
            y: num
        }]
        // TODO optomize this better
        let ittr = 1
        while (num !== 1 && ittr <= maxIttr) {
            const div2 = num / 2

            if (Number.isInteger(div2)) {
                num = div2
            } else {
                num = 3 * num + 1
            }

            ret.push({
                x: ittr,
                y: num
            })

            ittr++
        }

        return ret
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        // TODO validate number input better or display error
        setData(calculate(Number(event.target.value)))
    }

    useEffect(() => {
        setData(calculate(defaultValue))
    }, [])

    return (
        <div className={styles['collatz']}>
            <div className={styles['content']}>
                <div className={styles['title']}>
                    <h3> [WIP] 3x + 1 AKA Collatz Congecture </h3>
                </div>
                <div className={styles['description']}>
                    <p> The 3x + 1 problem, also known as the Collatz Conjecture is a commonly known unsolved math conjecture named after Lothar Collatz in 1973.
                        The conjecture states that any number when run through the following series will resolve to a 4, 2, 1 loop. </p>
                    <p> Equation:</p>
                    <div className={styles['equation']}>
                        <p className={styles['left']}> x<sub>n</sub> = </p>
                        <p className={styles['bracket']}>{'{'}</p>
                        <pre className={styles['top']}>x<sub>n-1</sub>/2      for x<sub>n-1</sub> even</pre>
                        <pre className={styles['bot']}>3x<sub>n-1</sub> + 1   for x<sub>n-1</sub> odd </pre>
                    </div>
                    <p> Input a number below and see the 3x + 1 series on the graph </p>
                </div>
                <div className={styles['input']}>
                    <input type='number' defaultValue={defaultValue} onChange={onChange} />
                </div>
            </div>
            <div className={styles['graph']}>
                {data.length > 0 && (
                    <>
                        <Graph data={data} />
                        {data[data.length-1].y !== 1 ?
                            // TODO allow them to use the API to solve for over maxIttr
                            <p> Not all data shown as it did not resolve to 1 in {maxIttr} itterations </p> : 
                            <p> Sequence resolved in {data.length - 1} itterations </p>
                        }
                    </>
                )}
            </div>
        </div>
    )
}