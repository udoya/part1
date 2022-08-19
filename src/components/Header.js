import React from "react";

export const Header = (props) => {
  console.log(props);
  const { course } = props;
  return <h1>{course.name}</h1>;
};
