import React, { useState, useEffect } from "react";
import Layout from "./../../Components/LayoutHome";
import axios from "axios";
import { message, Table } from "antd";
import LayoutHome from "./../../Components/LayoutHome";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
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

  const handleAccountStatus = async (recordId , status) => {
    window.location.reload();
    try {

      const res = await axios.post("http://localhost:8080/api/v1/admin/changeAccountStatus" ,
       {doctorId : recordId , status : status}
      )
      
      console.log(recordId);

    } catch (error) {
      console.log(error);
    }
  };

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
      
          {record.status === "pending" ? (
            <button
              className="btn btn-success"
              onClick={() => handleAccountStatus(record._id , "Approved")}
            >
              Approve
            </button>
          ) : (
            <button className="btn btn-danger">Reject</button>
          )}
        </div>
      ),
    },
  ];

  return (
    <LayoutHome>
      <h1 className="text-center m-3">All Doctors</h1>
      <Table columns={columns} dataSource={doctors} />
    </LayoutHome>
  );
};

export default Doctors;