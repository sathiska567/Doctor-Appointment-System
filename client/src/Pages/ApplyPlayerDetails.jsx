import React, { useState } from 'react'
import LayoutHome from '../Components/LayoutHome'
import { useLocation, useNavigate } from 'react-router-dom'
import { Table, message } from 'antd';
import axios from 'axios';

export default function ApplyPlayerDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const details = location.state.record;


  // handle approve status
 const handleApprove = async(recordId , status)=>{
     
  console.log(recordId,status);


    try {
      const approve = await axios.post("http://localhost:8080/api/v1/admin/changeAccountStatus", {doctorId : recordId , status : status})
      console.log(approve);
      navigate("/get-all-notification")

    } catch (error) {
       console.log(error);
    }
 }


  // handle Delete status
 const handleDelete = async(recordId , status)=>{
     
  console.log(recordId,status);


    try {
      const approve = await axios.post("http://localhost:8080/api/v1/admin/changeAccountStatus", {doctorId : recordId , status : status})
      console.log(approve);
      navigate("/get-all-notification")

    } catch (error) {
       console.log(error);
    }
 }


  return (

    <div>
        <LayoutHome>
        <h1 className="text-center m-3">{details.firstName} Details</h1>
        <p>{details.firstName + " "+  details.lastName } </p>
        <p>{details.email}</p>
        <p>{details.address}</p>
        <p>{details.experience}</p>
        <p>{details.feesPerConsaltation}</p>
        <p>{details.phone}</p>
        <p>{details.specialization}</p>
        <p>status: {details.status}</p>


{/* Handle aprove button and delete */}
        {
        
        details.status === "pending" ? 
        
        <button className="btn btn-success" onClick={() => handleApprove(details._id , "Approved")}> Approve </button>
         
        :

        <button className="btn btn-danger" onClick={() => handleDelete(details._id , "pending")}> Delete </button>
        
      
         }
        

        </LayoutHome>
    </div>
  )
}

