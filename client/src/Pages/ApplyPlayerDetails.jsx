import React, { useEffect, useState } from 'react'
import LayoutHome from '../Components/LayoutHome'
import { useLocation, useNavigate } from 'react-router-dom'
import { Col, Form, Input, Row, Table, message, Spin } from 'antd';
import axios from 'axios';
import UserDetailsView from '../Components/UserDetailsView';

// import css file
import '../Style/ApplyPlayerDetailsStyle.css'

export default function ApplyPlayerDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]); // Initialize with an array

  const details = location.state.record;

  const ApplyPositionDetails = async () => {
    try {
      console.log(details);
      setUserData([details]);

    } catch (error) {
      message("Error while occure inside the Apply Position Details")
    }
  }

  // handle approve button
  const handleApprove = async (recordId, status) => {

    console.log(recordId, status);


    try {
      const approve = await axios.post("http://localhost:8080/api/v1/admin/changeAccountStatus", { doctorId: recordId, status: status })
      console.log(approve);

      navigate("/get-all-notification")

    } catch (error) {
      console.log(error);
    }
  }


  // handle Delete button
  const handleDelete = async (recordId, status) => {

    console.log(recordId, status);


    try {
      const deletedRequest = await axios.post("http://localhost:8080/api/v1/admin/deleteRequest", { userId: recordId })
      navigate("/get-all-notification")

    } catch (error) {
      console.log(error);
    }
  }


  // Handle pending button
  const handlePending = async (recordId, status) => {
    try {
      navigate("/get-all-notification")

    } catch (error) {
      message("Error while occure executing Handle pending status")
    }
  }


  // const Fcolumns = [
  //   {
  //     title : "Full Name",
  //    render :(text,record)=>(
  //     <span>{record.firstName + " " + record.lastName}</span>
  //    )

  //   },
  //   {
  //     title : "Email",
  //    render :(text,record)=>(
  //     <span>{record.email}</span>
  //    )

  //   },

  // ]




  useEffect(() => {
    ApplyPositionDetails();
  }, [])


  return (

    <div>
      <LayoutHome>
        <h1 className="text-center m-3">{details.firstName} Details</h1>

        <br /><br />

        {/* design user details view part */}
        <div className='ApplyPlayerDetailsStyle'>
          <UserDetailsView
            title={"Full Name : "}
            value={details.firstName + " " + details.lastName}
          /><br /><br />

          <UserDetailsView
            title={"User Email : "}
            value={details.email}
          /><br /><br />

          <UserDetailsView
            title={"Address : "}
            value={details.address}
          /><br /><br />

          <UserDetailsView
            title={"Experience : "}
            value={details.experience}
          /><br /><br />

          <UserDetailsView
            title={"Fees Per Consaltation : "}
            value={details.feesPerConsaltation}
          /><br /><br />

          <UserDetailsView
            title={"Phone Number : "}
            value={details.phone}
          /><br /><br />

          <UserDetailsView
            title={"Specialization : "}
            value={details.specialization}
          /><br /><br />

          <UserDetailsView
            title={"Timing : "}
            value={"Start Time : " + details.timing[0]}
          />

          <UserDetailsView
            value={"End Time : " + details.timing[1]}
          />
<br /><br />
          <UserDetailsView
            title={"Status : "}
            value={details.status}
          />


        </div>



        {/* <Table columns={Fcolumns} dataSource={userData} /> */}



        <div className="btn_div">
          {/* Handle aprove button and delete */}
          {

            details.status === "pending" ?

              <button className="btn btn-success" onClick={() => handleApprove(details._id, "Approved")}> Approve </button>

              :

              <button className="btn btn-success" disabled={true}> Approved </button>


          }

          {
            <button className="btn btn-danger" onClick={() => handleDelete(details._id)}> Delete </button>

          }

          {
            <button className="btn btn-danger" onClick={() => handlePending()}> pending </button>

          }
        </div>


      </LayoutHome>
    </div>
  )
}

