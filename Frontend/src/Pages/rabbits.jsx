import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


const Rabbit = () => {
  return (
    <div style={{overflow:"-moz-hidden-unscrollable"}}>
    <PieChart style={{height:"250px",marginTop:"7px",textShadow: "0 1px 0 #ccc, 0 2px 0 #ccc"}} 
  data={[
    { title: 'Approximate value for rabbits in India', value: 100000, color: '#3d3d3d' },
    { title: 'Approximate value for rabbits died annually India', value: 15000, color: '#f0ac03' }
   
  ]}
/>;
    </div>
  )
}

export default Rabbit