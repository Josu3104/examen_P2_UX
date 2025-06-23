import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RestaurantCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> Titulo</Card.Title>
        <Card.Text>
          lorem ipsum
        </Card.Text>
        <Button variant="primary">Ver disponibilidad</Button>
      </Card.Body>
    </Card>
  );
}

export default RestaurantCard;