import React from "react";

function Links(props) {
    return (
      <>
      <h3>Links</h3>
      <a href= {props.github}/>
      <a href= {props.linkedin}/>
      </>
    );
}

export default Links;