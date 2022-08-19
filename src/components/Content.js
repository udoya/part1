import React from "react";

export const Content = (props) => {
  console.log(props);
  const { course } = props;

  return (
    <div>
      {course.parts.map((part) => {
        return (
          <div key={part.name}>
            <p>{part.name}</p>
          </div>
        );
      })}
    </div>
  );
};
