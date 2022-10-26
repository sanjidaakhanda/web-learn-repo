import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";
const Courses = () => {
  const course = useLoaderData();
  const { name, image, details } = course;
  return (
    <div>
      <h1> {course.name}</h1>
      <Card style={{ width: "75%" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant="primary">
            Get premium access <FaHandPointRight></FaHandPointRight>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
