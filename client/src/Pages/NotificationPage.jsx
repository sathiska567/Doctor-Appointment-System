import LayoutHome from '../Components/LayoutHome'
import { Tabs,message } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NotificationPage() {

  const [user, setUser] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [id, setId] = useState(" ")

  const getUsers = async (value) => {

    try {

      const res = await axios.get("http://localhost:8080/api/v1/user/all-user")

      setUser(res.data.users[2].name);
      setEmail(res.data.users[2].email)
      setId(res.data.users[2]._id)


    } catch (error) {
      console.log(error);
    }

  }



  const handleAccept = async(record,status)=>{
          
    try {

      const res = await axios.get("http://localhost:8080/api/v1/user/all-user")
      
    } catch (error) {

      console.log(error);
      message.error("Error occure in notification Page")
      
    }
     
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <LayoutHome>

      <h1 className='text-center p-3'>Notifications</h1>

      {/* <Tabs>
          <Tabs.TabPane>
                <div className="d-flex justify-content-end">
                  <div className="p-2" onClick={handleMarkAllRead}>
                        Mark All Read
                  </div>
                </div>
          </Tabs.TabPane>
        </Tabs> */}


      <table border='2px solid black' style={{ width: '100%', textAlign: "center" }}>
        <tr>
          <td>{user}</td>
          <td>{email}</td>
          <td>{id}</td>

        </tr>



      </table>
      <br /><br />


      <button onClick={handleAccept}>Accept</button>


    </LayoutHome>
  )
}
