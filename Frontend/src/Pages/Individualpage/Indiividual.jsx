import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { GetProductRequest, GetSingleSuccess } from '../../Redux/AppReducer/Action';
const Individual = () => {
  const {category,id}=useParams()
  const dispatch=useDispatch()
  const indiData=useSelector((store)=>store.singleData)
  console.log(indiData)
  let api;
  if(category=="pets"){
    api=`${process.env.REACT_APP_URL}/pets/single/${id}`
    
  }
  else if(category=="food"){
    api=`${process.env.REACT_APP_URL}/pets/foodsingle/${id}`
  }
  else {
    api=`${process.env.REACT_APP_URL}/pets/caresingle/${id}`
  }
  useEffect(()=>{
    dispatch(GetProductRequest())
  axios.get(api).then((res)=>{
    dispatch(GetSingleSuccess((res.data.data)))
  })
  .catch((er)=>{
    console.log(er)
  })
  },[])
  return (
    <div>Indiividual</div>
  )
}

export default Individual