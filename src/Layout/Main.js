import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Courses from "../Shared/Courses/Courses/Courses";

import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

import SideNav from "../Shared/SideNav/SideNav";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="4">
            <SideNav></SideNav>
          </Col>
          <Col lg="6">
            <Outlet>
              <Courses></Courses>
            </Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
