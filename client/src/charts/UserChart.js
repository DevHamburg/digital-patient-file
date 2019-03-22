import React from 'react'
import { Chart } from 'react-google-charts'

export default function UserChart({percent}) {
  const pieOptions = {
    pieHole: 0.5,
    slices: [
      {
        color: '#5fbf00',
      },
      {
        color: 'lightgray',
      },
    ],
    legend: {
      position: 'bottom',
      alignment: 'center',
      textStyle: {
        color: '#333',
        fontSize: 24,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 0,
      top: 0,
      width: '100%',
      height: '60%',
    },
    fontName: 'Roboto, sans-serif',
  }

  const number = Number(percent)
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={[['Age', 'Weight'], ['Wert', number], ['Rest', 100 - number]]}
        options={pieOptions}
        graph_id="PieChart"
        width={'380px'}
        height={'280px'}
        legend_toggle
      />
    </div>
  )
}
