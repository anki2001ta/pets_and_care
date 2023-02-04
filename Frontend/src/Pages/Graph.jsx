import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


const Graph = () => {
  return (
    <div>
    <PieChart style={{height:"100px"}}
  data={[
    { title: 'Total Dogs', value: 62000000, color: '#E38627' },
    { title: 'Street Dogs', value: 10200000, color: '#C13C37' }
   
  ]}
/>;
    </div>
  )
}

export default Graph