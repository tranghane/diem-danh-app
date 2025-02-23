import React from "react";

const styles = {
  container: {
    backgroundColor: "#fbeaff", // Background color
    width: "100vw", // Full width
    height: "100vh", // Full height
    display: "flex", // Center content
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#00c9a7", // Text color
    fontSize: "24px",
    fontWeight: "bold",
  },
};

const Heading = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Hello World</h1>
  </div>
);

export default Heading;
