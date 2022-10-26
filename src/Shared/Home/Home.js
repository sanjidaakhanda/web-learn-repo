import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <h1 className="text-primary">Our Courses</h1>
      {allCourses.map((course) => (
        <CourseCard key={course.id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Home;
