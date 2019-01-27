import React from 'react';
import { Button, NavBar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';


const Events = () => {
    return (
        <div >
            <Button bsStyle="primary" bsSize="large" block>
                My Events
        </Button>
            <Button bsStyle="primary" bsSize="large" block onClick={() => alert('fuck you')}>
                Create Events
        </Button>
            <Button bsStyle="primary" bsSize="large" block>
                Events Near Me
        </Button>
        </div>
    )
}

export default Events