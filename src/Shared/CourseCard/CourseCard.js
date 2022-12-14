import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
const CourseCard = ({ course }) => {
  const { name, image, details, id } = course;
  return (
    <div>
      <div>
        <h1 className="text-secondary text-center">{name}</h1>
      </div>
      <Card className="mb-4">
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
          <Button variant="primary">
            Enroll Now <FaAngleDoubleRight></FaAngleDoubleRight>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCard;
