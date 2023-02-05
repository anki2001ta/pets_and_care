import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


const Streetcat = () => {
  return (
    <div style={{overflow:"-moz-hidden-unscrollable"}}>
    <PieChart style={{height:"250px",marginTop:"7px",textShadow: "0 1px 0 #ccc, 0 2px 0 #ccc"}} 
  data={[
    { title: 'Total No. of cats in India', value: 121000000000, color: '#3d3d3d' },
    { title: 'Street Cats', value:12090900000, color: "#f0ac03" }
   
  ]}
/>;
    </div>
  )
}

export default Streetcat