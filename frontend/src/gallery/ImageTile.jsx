import Card from "react-bootstrap/Card";

// format of image (for PNG images):
// "data:image/png;base64," + base44 bytes.
const ImageTile = ({ image }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Text</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">footer</small>
      </Card.Footer>
    </Card>
  );
};

export default ImageTile;