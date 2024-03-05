import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(1);


  const date = new Date("2024-03-05");
  date.setDate(date.getDate() + (steps * count));

  return (
    <div className='container'>
      <Card>
        <Card.Header>Counter</Card.Header>
        <Card.Body>
          <Card.Title>Change the date</Card.Title>
          <Card.Text>
          <div className='d-flex '>
          <div className='steps'>

            <Button variant='primary' onClick={() => setSteps(steps + -1)}>
              -
            </Button>
            <p>Step : {steps}</p>
            <Button variant='danger' onClick={() => setSteps(steps + 1)}>
              +
            </Button>
          </div>
          <div className='count'>

            <Button  variant='primary' onClick={() => setCount(count + -1)}>
              -
            </Button>
            <p>Count : {count}</p>
            <Button variant='danger' onClick={() => setCount(count + 1)}>
              +
            </Button>
          </div>
          <div className='resultText'>
            <p>Today is  : <Badge bg='info'>{date.toLocaleDateString()}</Badge></p>
          </div>
        </div>
          </Card.Text>
        </Card.Body>
      </Card>


       
     
    </div>
  );
}