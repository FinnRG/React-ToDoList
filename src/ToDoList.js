import { Button, Form, ListGroup, Row, Col } from 'react-bootstrap';
import ToDoItem from './ToDoItem';

import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

function ToDoList() {

    let [internalName, setInternalName] = useState(null);
    let [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        const initiateToDoList = () => {
            var config = {
                method: 'get',
                url: '/todo',
                withCredentials: true
            };

            axios(config)
                .then(function(response) {
                    setToDoList(response.data);
                })
        }
        initiateToDoList();
    }, [])

    const setToDoName = (value) => {
        setInternalName(value.target.value);
    }

    const createToDo = () => {
        let obj = { title: internalName }
        setInternalName('');
        let newToDoList = [...toDoList];
        const data = qs.stringify(obj);

        const config = {
            method: 'post',
            url: '/todo',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function(response) {
                setToDoList([...toDoList, response.data])
            })

    }

    const todoClicked = (index) => {
        let newToDoList = [...toDoList];
        newToDoList[index].checked = !newToDoList[index].checked;

        let obj = {
            checked: newToDoList[index].checked,
            id: newToDoList[index].id
        };

        const data = qs.stringify(obj);

        const config = {
            method: 'post',
            url: '/todo',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function(_response) { })
        setToDoList(newToDoList);
    }


    return (<>

        <Row className='mt-3'>
            <Col xs={10}>
                <Form onSubmit={(e) => { createToDo(); e.preventDefault() }}>
                    <Form.Control value={internalName} onChange={(value) => setToDoName(value)} placeholder='ToDo Name' />
                </Form>
            </Col>
            <Col>
                <Button type='submit' onClick={createToDo}>
                    Add to List!
                </Button>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col>
                <ListGroup>

                    {toDoList.map((toDo, index) => <ToDoItem key={index} onClick={() => todoClicked(index)} toDo={toDo} />)}

                </ListGroup>
            </Col>
        </Row></>
    );
}

export default ToDoList;

