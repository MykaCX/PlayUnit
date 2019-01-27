import React from 'react';
import { Button, NavBar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';


const Events = () => {
    return (
        <div>
            <Button href = "/MyEvents" bsStyle="primary" bsSize="large" block>
            My Events
        </Button>
            <Button href = "/CreateEvents" bsStyle="primary" bsSize="large" block>
                Create Events
        </Button>
            <Button href = "/NearMe" bsStyle="primary" bsSize="large" block>
                Events Near Me
        </Button>

        </div>
    )
}

export default Events