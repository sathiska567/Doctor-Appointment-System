import React, { useEffect, useState } from 'react'
import LayoutHome from '../Components/LayoutHome'
import axios from 'axios'
import { message } from 'antd'


export default  function AcceptPlayer() {
  const [user,setUser] = useState(" ")
  const [email,setEmail] = useState(" ")
  const [id,setId] = useState(" ")

       const getUsers = async(value)=>{

          try {

            const res = await axios.get("http://localhost:8080/api/v1/user/all-user")

          setUser(res.data.users[2].name);
          setEmail(res.data.users[2].email)
          setId(res.data.users[2]._id)
        
            
          } catch (error) {
             console.log(error);
          }

       }

       const handleAccept = async()=>{
          
         try {

        const res = await axios.get("http://localhost:8080/api/v1/user/all-user")
        res.data.users[2].state = true        

        message.success("Successfully Aproved")
            
         } catch (error) {

            console.log(error);
            
         }
          
       }

       
  useEffect(() => {
        getUsers();
      }, []);


  return (
    <div>
        <LayoutHome>

                <table border='2px solid black' style={{width:'100%',textAlign:"center"}}>
                   <tr>
                      <td>{user}</td>
                      <td>{email}</td>
                      <td>{id}</td>
                  
                   </tr>

                  

                </table>
<br /><br />
                <button onClick={handleAccept}>Accept</button>
             
        </LayoutHome>
    </div>
  )
}
