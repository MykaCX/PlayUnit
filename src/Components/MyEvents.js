import React from 'react';
import { Button, NavBar, Image, StyleSheet} from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import './Events.css';
import sampleimage from './LPField.jpg';


const MyEvents = () => {
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/home">Isaac Cho</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text>
                        | Points: <Navbar.Link href="/Rewards">1500 |</Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text pullLeft>Basketball</Navbar.Text>
                    <Navbar.Text pullLeft>Jogging</Navbar.Text>
                    <Navbar.Text pullLeft>Swimming</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <div class="header" >My Events</div>
            <div class="card">
            <h1>Soccer at LesPrince Field</h1>
            <h2>Dec 7, 2017</h2>
            <img src={sampleimage} />
            <p>Description of event blahblah</p>
            </div>
        </div>

    )
}

export default MyEvents