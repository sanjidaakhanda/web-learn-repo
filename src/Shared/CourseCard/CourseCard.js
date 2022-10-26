import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  const { name, image, details, id } = course;
  return (
    <div>
      <Card style={{ width: "75%" }} className="mb-4">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {details.length > 100 ? (
              <p>
                {details.slice(0, 100) + "..."}
                <Link to={`/courses/${id}`}>More Details</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
