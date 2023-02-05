import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


const Graph = () => {
  return (
    <div style={{overflow:"-moz-hidden-unscrollable"}}>
    <PieChart style={{height:"250px",marginTop:"7px",textShadow: "0 1px 0 #ccc, 0 2px 0 #ccc"}} 
  data={[
    { title: 'Total Dogs', value: 62000000, color: '#f0ac03' },
    { title: 'Street Dogs', value: 10200000, color: '#9b8cfa' }
   
  ]}
/>;
    </div>
  )
}

export default Graph