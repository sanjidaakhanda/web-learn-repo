import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideNav from "../Shared/SideNav/SideNav";
const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <SideNav></SideNav>
          </Col>
          <Col>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
