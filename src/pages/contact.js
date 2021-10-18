import * as React from "react"
import { Container, Col, Row } from "react-bootstrap"

const Contact = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2" className="placeholder bg-secondary">
          1 of 3
        </Col>
        <Col md="auto" className="placeholder bg-success">
          Variable width content
        </Col>
        <Col xs lg="2" className="placeholder bg-danger">
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col className="placeholder bg-warning">1 of 3</Col>
        <Col md="auto" className="placeholder bg-info">
          Variable width content
        </Col>
        <Col xs lg="2" className="placeholder bg-dark">
          3 of 3
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
