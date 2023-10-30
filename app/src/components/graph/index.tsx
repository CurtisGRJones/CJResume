import { LineChart } from '@mui/x-charts';
import styles from './graph.module.css'

interface PropsType {
  data: graphData
}

export const Graph = ({
  data
}: PropsType) => {
  const xAxis: Array<number> = []
  const yAxis: Array<number> = []

  data.forEach(({ x, y }) => {
    xAxis.push(x)
    yAxis.push(y)
  });

  return (
    <div className={styles['line-chart']}>
      <LineChart
        className='test-graph'
        xAxis={[{ data: xAxis }]}
        series={[
          {
            data: yAxis,
            color: 'var(--tertiary-text-color)',
            curve: 'linear',
            showMark: false
          },
        ]}
        width={500}
        height={250}
      />
    </div>
  )
};