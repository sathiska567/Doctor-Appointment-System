import { Col, Row } from 'antd'
import React from 'react'

export default function UserDetailsView(props) {
  return (
    <div>
         <Row>
            <Col flex={1}><b>{props.title}</b></Col>
            <Col flex={2}>{props.value}</Col>
          </Row>
    </div>
  )
}
