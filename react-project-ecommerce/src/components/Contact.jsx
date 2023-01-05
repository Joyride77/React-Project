import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Contact = () => {
    return (
        <Container>
            <Row>
                <Col><p>Need help? Call us: (+98) 0234 456 789</p></Col>
                <Col><p><PlaceOutlinedIcon /> Our store</p></Col>
                <Col><p><LocalShippingOutlinedIcon /> Track your order</p></Col>
            </Row>
        </Container>
    )
}

export default Contact