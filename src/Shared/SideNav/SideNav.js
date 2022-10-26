import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const SideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h3>All Courses {categories.length} </h3>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
        <div>
          <Button variant="primary" className="mb-3">
            Sign in With Google
          </Button>
          <br />
          <Button variant="primary">Sign in with GitHub</Button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
