import { ChangeEvent, useEffect, useState } from 'react'
import { Graph } from '../../components'
import styles from './collatz.module.css'

export const Collatz = () => {
    const defaultValue = 7
    const [data, setData] = useState<graphData>([])

    const calculate = (num: number): graphData => {
        const ret: graphData = [{
            x: 0,
            y: num
        }]
        // TODO optomize this better
        let ittr = 1
        while (num !== 1 && ittr <= 1000) {
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
                    <h3> 3x + 1 AKA Collatz Congecture </h3>
                </div>
                <div className={styles['description']}>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra vulputate aliquam. Praesent fringilla pulvinar facilisis. Vivamus vel eros sit amet augue maximus posuere. Vivamus libero velit, malesuada a sem eu, ultricies pharetra justo. Duis tincidunt tincidunt dui, vitae viverra orci condimentum sed. Integer ipsum felis, auctor vitae rutrum vitae, euismod quis sapien. Mauris sed nulla convallis, facilisis orci vel, pulvinar nunc. Praesent urna sem, eleifend id mauris sed, varius vulputate mauris. Mauris id leo felis. Phasellus augue diam, facilisis non commodo ut, sodales venenatis mauris. Cras a mattis nisl, eget posuere metus. Integer non dapibus lorem. Nam vestibulum maximus mattis. </p>
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
                            // TODO allow them to use the API to solve for over 100
                            <p> Not all data shown as it did not resolve to 1 in 100 itterations </p> : 
                            <p> Sequence resolved in {data.length} itterations </p>
                        }
                    </>
                )}
            </div>
        </div>
    )
}