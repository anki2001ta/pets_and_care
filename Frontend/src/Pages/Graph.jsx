import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


const Graph = () => {
  return (
    <div style={{overflow:"-moz-hidden-unscrollable"}}>
    <PieChart style={{height:"240px",marginTop:"7px",textShadow: "0 1px 0 #ccc, 0 2px 0 #ccc"}} 
  data={[
    { title: 'Total Dogs', value: 62000000, color: '#4d4f4e' },
    { title: 'Street Dogs', value: 10200000, color: 'white' }
   
  ]}
/>;
    </div>
  )
}

export default Graph