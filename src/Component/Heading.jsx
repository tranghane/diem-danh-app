import React, { useState } from "react";

const styles = {
  container: {
    backgroundColor: "#fbeaff", // Background color
    width: "100vw", // Full width
    height: "100vh", // Full height
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#00c9a7", // Text color
    fontSize: "24px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    fontSize: "18px",
    border: "2px solid #00c9a7",
    borderRadius: "5px",
    outline: "none",
    textAlign: "center",
  },
};

const Heading = () => {
  const [name, setName] = useState(""); // Stores user input
  const [submitted, setSubmitted] = useState(false); // Tracks submission

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && name.trim() !== "") {
      setSubmitted(true); // Show greeting after pressing Enter
    }
  };

  return (
    <div style={styles.container}>
      {submitted ? (
        <h1 style={styles.heading}>Hello {name}</h1>
      ) : (
        <input
          type="text"
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      )}
    </div>
  );
};

export default Heading;
