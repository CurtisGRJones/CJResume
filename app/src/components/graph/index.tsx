import { LineChart } from '@mui/x-charts';
import styles from './graph.module.css'

interface params {
  data: graphData
}

export const Graph = ({
  data
}: params) => {
  const xAxis: Array<number> = []
  const yAxis: Array<number> = []

  data.forEach(({ x, y }) => {
    xAxis.push(x)
    yAxis.push(y)
  });

  console.log(xAxis)
  console.log(yAxis)

  return (
    <LineChart
      
      xAxis={[{ data: xAxis }]}
      series={[
        {
          data: yAxis,
          color: 'var(--primary-text-color)'
        },
      ]}
      width={500}
      height={300}
      sx={{
        backgroundColor: 'var(--secondary-background-color)',
      }}
    />
  )
};