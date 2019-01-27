import React from 'react';
import styles from './Profile.css'
import { Button, NavBar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';



const Profile = () => {
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Isaac Cho</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text>
                        | Points: <Navbar.Link href="https://www.facebook.com">1500 |</Navbar.Link>
                    </Navbar.Text>
                    <Navbar.Text pullLeft>Basketball</Navbar.Text>
                    <Navbar.Text pullLeft>Jogging</Navbar.Text>
                    <Navbar.Text pullLeft>Swimming</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}

export default Profile