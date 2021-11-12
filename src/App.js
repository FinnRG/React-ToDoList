import './App.css';
import ToDoList from './ToDoList';
import Login from './Login';

import { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3001'

const App = () => {

    let [loggedIn, setLoggedIn] = useState(false);
    let [failed, setFailed] = useState(false);

    const login = (event) => {
        const data = qs.stringify({
            'name': event.target.name.value,
            'password': event.target.password.value
        });

        const config = {
            method: 'post',
            url: '/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(() => setLoggedIn(true))
            .catch(() => setFailed(true));

        event.preventDefault();
    }

    const signup = (event) => {

        const data = qs.stringify({
            'name': event.target.name.value,
            'password': event.target.password.value
        });

        const config = {
            method: 'post',
            url: '/signup',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(() => setLoggedIn(true))
            .catch(() => setFailed(true));

        event.preventDefault();
    }

    return <Container>
        {!loggedIn && (
            <Login loginCallback={(event) => login(event)} signupCallback={signup} failed={failed} />
        )}
        {loggedIn && (
            <ToDoList />

        )}
    </Container>
}

export default App;
