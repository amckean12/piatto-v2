import React, { Component } from 'react';

const TitleContainer = {
  width: "50%",
  float: "left",
  position: "relative",
  "min-height": "100%",
  textAlign: "center"
}

const TitleComponent = () => {
  return(
    <div className="TitleComponent" style={TitleContainer}>
      <h1>Piatto</h1>
    </div>
  )
}


export default TitleComponent
