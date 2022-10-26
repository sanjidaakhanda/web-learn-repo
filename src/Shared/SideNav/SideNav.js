import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SideNav = () => {
  const { providerLogIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

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
          <Button
            onClick={handleGoogleSignIn}
            variant="primary"
            className="mb-3"
          >
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
