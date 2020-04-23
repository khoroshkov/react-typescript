import React from "react";
import { useHistory } from "react-router-dom";



export const aboutPage: React.FC = () => {
  const history = useHistory!();
  return (
    <>
      <h1>About this App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        facere cum corporis dolor quod exercitationem esse sint sed earum alias
        fuga odio voluptas, nulla voluptatum itaque consequatur in libero
        numquam expedita molestiae temporibus rerum voluptatibus similique! Quod
        distinctio voluptatibus nam?
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to todos list
      </button>
    </>
  );
};
