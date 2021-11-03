import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from "react-bootstrap";

import { useState } from 'react';

function App() {

  let [internalName, setInternalName] = useState(null);
  let [toDoList, setToDoList] = useState([]);

  const setToDoName = (value) => {
    setInternalName(value.target.value);
  }

  const createToDo = () => {
    setInternalName("");
    setToDoList([...toDoList, internalName])
  }

  const todoClicked = (index) => {
    setToDoList(toDoList.filter((_, i) => i !== index));
  }


  return (
    <Container>
      <Row className="mt-3">
        <Col xs={10}>
          <Form onSubmit={(e) => { createToDo(); e.preventDefault() }}>
            <Form.Control value={internalName} onChange={(value) => setToDoName(value)} placeholder="ToDo Name" />
          </Form>
        </Col>
        <Col>
          <Button type="submit" onClick={createToDo}>
            Add to List!
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <ListGroup>
            {toDoList.map((toDo, index) => <ListGroup.Item key={index} action onClick={() => todoClicked(index)}>{toDo}</ListGroup.Item>)}
          </ListGroup>
        </Col>
      </Row>
    </Container >
  );
}

export default App;
