import React, { useState, useEffect } from "react";
import axios from "axios";
import { message, Table } from "antd";
import LayoutHome from "./../../Components/LayoutHome";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();


  //getUsers
  const getDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/admin/getAllDoctors");

      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // hanlde aprove account status
  const handleAccountStatus = async (recordId , status) => {
    window.location.reload();
    try {

      const res = await axios.post("http://localhost:8080/api/v1/admin/changeAccountStatus" ,
       {doctorId : recordId , status : status}
      )
      
      console.log(recordId);
      navigate("/get-all-notification")

    } catch (error) {
      console.log(error);
    }
  };

  // handle navigate another page
  const NavigateDetailsPage = (record)=>{
    // localStorage.setItem("viewing doctor id",record)
    navigate("/details",{state:{record : record}})
  }

  useEffect(() => {
    getDoctors();
  }, []);


  

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "Actions",
      dataIndex: "actions",

      render: (text, record) => (
        <div className="d-flex">
      
          {/* {record.status === "pending" ? (
            <button
              className="btn btn-success"
              onClick={() => handleAccountStatus(record._id , "Approved")}
            >
              Approve
            </button>
          ) : (
            <button className="btn btn-danger">Reject</button>
          )} */}

            
            <button className="btn btn-success" onClick={() => NavigateDetailsPage(record)}> View </button>
            
          
        </div>

        

      ),
    }
  ];

  return (
    <LayoutHome>
      <h1 className="text-center m-3">All Doctors</h1>
      <Table columns={columns} dataSource={doctors} />
    </LayoutHome>
  );
};

export default Doctors;