import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Courses = () => {
  const course = useLoaderData();
  const { name, image, details, id } = course;
  return (
    <div>
      <h1> {course.name}</h1>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/checkOut/${id}}`}>
            <Button variant="primary">
              Get premium access <FaHandPointRight></FaHandPointRight>
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
