import Card from "react-bootstrap/Card";
import { readTextFromImage } from "../../../backend/src/handler.mjs";

// format of image (for PNG images):
// "data:image/png;base64," + base64 bytes.
const ImageTile = ({ image }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>zz Title</Card.Title>
        <Card.Text>readTextFromImage().text</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">footer</small>
      </Card.Footer>
    </Card>
  );
};

export default ImageTile;
