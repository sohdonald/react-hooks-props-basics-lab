import React from "react";

function Links(props) {
    return (
      <>
      <h3>Links</h3>
      <a href= {props.github}>{props.github}</a>
      <a href= {props.linkedin}>{props.linkedin}</a>
      {/* this is a functional component */}
      </>
    );
}

export default Links;