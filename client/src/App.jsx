// src/App.js
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name.jsx';  // Updated extension
import Price from './Price.jsx'; // Updated extension
import Description from './Description.jsx'; // Updated extension
import Image from './Image.jsx'; // Updated extension
import product from './product';
import './App.css';


const firstName = 'John'; // Replace with your first name or leave as '' if not provided

const App = () => {
  return (
    <Container className="my-4">
      <Card>
        <Card.Body>
          <Card.Title>Product Details</Card.Title>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      <div className="mt-4 text-center">
        <p>Hello, {firstName || 'there'}!</p>
        {firstName && <img src={product.image} alt="Your Image" />} {/* Use product.image here */}
      </div>
    </Container>
  );
}

export default App;
