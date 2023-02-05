import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


const Birds = () => {
  return (
    <div style={{overflow:"-moz-hidden-unscrollable"}}>
    <PieChart style={{height:"250px",marginTop:"7px",textShadow: "0 1px 0 #ccc, 0 2px 0 #ccc"}} 
  data={[
    { title: 'Total no.of birds approximately', value:100000, color: '#f0ac03' },
    { title: 'Total birds killed annually', value: 60000, color: '#9b8cfa' }
   
  ]}
/>;
    </div>
  )
}

export default Birds