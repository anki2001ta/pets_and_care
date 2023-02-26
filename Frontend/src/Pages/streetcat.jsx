import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';


const Streetcat = () => {
  return (
    <div style={{overflow:"-moz-hidden-unscrollable"}}>
    <PieChart style={{height:"230px",marginTop:"7px",textShadow: "0 1px 0 #ccc, 0 2px 0 #ccc"}} 
  data={[
    { title: 'Total No. of cats in India', value: 121000000000, color: '#4d4f4e' },
    { title: 'Street Cats', value:12090900000, color: "white" }
   
  ]}
/>;
    </div>
  )
}

export default Streetcat