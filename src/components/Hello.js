import React from "react";

export const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name} ! You are {props.age} years old
      </p>
    </div>
  );
};
