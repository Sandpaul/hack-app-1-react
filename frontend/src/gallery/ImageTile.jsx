// import Card from "react-bootstrap/Card";
// import { readTextFromImage } from "../../../backend/src/handler.mjs";

// // format of image (for PNG images):
// // "data:image/png;base64," + base64 bytes.
// const ImageTile = ({ image }) => {
//   return (
//     <Card>
//       <Card.Img variant="top" src={image} />
//       <Card.Body>
//         <Card.Title>zz Title</Card.Title>
//         <Card.Text>readTextFromImage().text</Card.Text>
//       </Card.Body>
//       <Card.Footer>
//         <small className="text-muted">footer</small>
//       </Card.Footer>
//     </Card>
//   );
// };

// export default ImageTile;
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const ImageTile = ({ image }) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch text from the backend
    const fetchTextFromImage = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/read-text-from-image'); // Adjust this URL if needed
        const data = await response.json();
        setText(data.text || 'No text found');
      } catch (err) {
        setError('Failed to fetch text from image');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTextFromImage();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>zz Title</Card.Title>
        {isLoading && <p>Loading text...</p>}
        {error && <p>{error}</p>}
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">footer</small>
      </Card.Footer>
    </Card>
  );
};

export default ImageTile;