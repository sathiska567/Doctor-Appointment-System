import React from 'react'
import LayoutHome from "../Components/LayoutHome";
import { Col, Form, Input, Row, TimePicker, message } from 'antd'
import Item from 'antd/es/list/Item';
// import {useSelector , useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function ApplyDoctor() {

   const navigate = useNavigate();

   const handleFinish = async (values) => {

      try {
         const res = await axios.post("http://localhost:8080/api/v1/user/apply-doctor", values);
          
         console.log(res);


         if (res.data.success) {
           message.success("Register Successfully!");
         //   navigate(`/${res.data.newDoctor.firstName}`);
       
         navigate('/')


         } else {
           message.error(res.data.message);
         }
       } catch (error) {
         console.log(error);
         message.error("Something Went Wrong");
       }

   }


   return (
      <LayoutHome>
         <h2 className='text-center'>User apply page</h2>

         <Form layout='verticle' onFinish={handleFinish} className='m-3'>
            <h3 className='text-light'>Personal Details : </h3>
            <Row gutter={20}>   {/*gutter is use to add any spaces */}

               <Col xs={24} md={24} lg={8}>
                  <Form.Item label='First name' name='firstName' required rules={[{ required: true }]}>
                     <Input type='text' placeholder='Enter your name' />
                  </Form.Item>
               </Col>

                <Col xs={24} md={24} lg={8}>
                  <Form.Item label='last Name' name='lastName' required rules={[{ required: true }]}>
                     <Input type='text' placeholder='Enter your last Name' />
                  </Form.Item>
               </Col>

              <Col xs={24} md={24} lg={8}>
                  <Form.Item label='phone' name='phone' required rules={[{ required: true }]}>
                     <Input type='text' placeholder='Enter your phone' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={24} lg={8}>
                  <Form.Item label='email' name='email' required rules={[{ required: true }]}>
                     <Input type='email' placeholder='Enter your email' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={24} lg={8}>
                  <Form.Item label='website' name='website' required rules={[{ required: true }]}>
                     <Input type='text' placeholder='Enter your website' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={24} lg={8}>
                  <Form.Item label='address' name='address' required rules={[{ required: true }]}>
                     <Input type='text' placeholder='Enter your address' />
                  </Form.Item>
               </Col>
            </Row>


            <h3 className='text-light'>Professional details Details : </h3>
            <Row gutter={20}>  {/* gutter is use to add any spaces */}

              <Col xs={24} md={24} lg={8}>
                  <Form.Item label='specialization' name='specialization' required rules={[{ required: true }]}>
                     <Input type='text' placeholder='Enter your specialization' />
                  </Form.Item>
               </Col>
              <Col xs={24} md={24} lg={8}>
                  <Form.Item label='experience' name='experience' required rules={[{ required: true }]}>
                     <Input type='text' placeholder='Enter your experience' />
                  </Form.Item>
               </Col>
                 <Col xs={24} md={24} lg={8}>
                  <Form.Item label='Fees' name='feesPerConsaltation' required rules={[{ required: true }]}>
                     <Input type='text' placeholder='Enter your feesPerConsaltation' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={24} lg={8}>
                  <Form.Item label='timing' name='timing' required >
                     <TimePicker.RangePicker format="HH:mm" />
                  </Form.Item>
               </Col>

               <Col xs={24} md={24} lg={8}></Col>
               <Col xs={24} md={24} lg={8}>
                  <button className="btn btn-primary form-btn" type='submit'>
                     Submit
                  </button>
               </Col>



            </Row>

         </Form>


      </LayoutHome>
   )
}
