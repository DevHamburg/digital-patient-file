import React from 'react'
import { Chart } from 'react-google-charts'

export default function DonutChart() {
  const pieOptions = {
    title: '',
    pieHole: 0.6,
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
    fontName: 'Roboto',
  }

  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={[['Age', 'Weight'], ['Negativ', 16], ['Positiv', 1.5]]}
        options={pieOptions}
        graph_id="PieChart"
        width={'280px'}
        height={'280px'}
        legend_toggle
      />
    </div>
  )
}
