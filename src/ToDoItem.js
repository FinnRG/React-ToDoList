import { Badge, ListGroup } from 'react-bootstrap';

const ToDoItem = (props) => {
    return (
        <ListGroup.Item action onClick={props.onClick} className='d-flex justify-content-between align-items-start'>
            <div className='ms-2 me-auto'>{props.toDo.title}</div>
            {props.toDo.checked && (<Badge pill bg='success' >Done</Badge>)}
            {!props.toDo.checked && (<Badge pill bg='danger' >Todo</Badge>)}
        </ListGroup.Item>
    );
}

export default ToDoItem;
