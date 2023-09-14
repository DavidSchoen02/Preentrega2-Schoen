import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <Row>
        <Col flex>
          <h1 className="text-center"> {greeting}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
