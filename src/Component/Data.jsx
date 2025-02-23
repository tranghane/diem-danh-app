import React, { useState, useEffect } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyYvgtzn-3grSRlDzIos1z1YQTML3-cvdA_ekz1hfF5oGiHOwlQ1lzJAL6MBSGLJaTh-Q/exec"; // Replace with your Apps Script URL

const styles = {
  container: {
    backgroundColor: "#fbeaff",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#00c9a7",
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
  error: {
    color: "red",
    marginTop: "10px",
  },
};

const Heading = () => {
  const [name, setName] = useState(""); // Stores user input
  const [submitted, setSubmitted] = useState(false); // Tracks submission
  const [score, setScore] = useState(null); // Stores the found score
  const [data, setData] = useState([]); // Stores Google Sheets data
  const [error, setError] = useState(null); // Error handling

  // Fetch Google Sheets data when component mounts
  useEffect(() => {
    fetch(GOOGLE_SCRIPT_URL)
      .then((response) => response.json())
      .then((result) => {
        setData(result.slice(1)); // Remove the header row
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data.");
      });
  }, []);

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && name.trim() !== "") {
      // Find the corresponding score
      const foundEntry = data.find(
        (row) => row[0].trim().toLowerCase() === name.trim().toLowerCase()
      );
      if (foundEntry) {
        setScore(foundEntry[1]); // Get the score
        setSubmitted(true);
      } else {
        setError("Name not found in the database.");
      }
    }
  };

  return (
    <div style={styles.container}>
      {submitted ? (
        <h1 style={styles.heading}>
          Chào {name}, điểm của bạn là {score}
        </h1>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            style={styles.input}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError(null); // Clear previous error
            }}
            onKeyPress={handleKeyPress}
          />
          {error && <p style={styles.error}>{error}</p>}
        </>
      )}
    </div>
  );
};

export default Heading;
