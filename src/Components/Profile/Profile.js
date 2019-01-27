import React from 'react';
import styles from './Profile.css'
import { Button, NavBar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';


<<<<<<< HEAD
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
=======
const Profile = ({position}) => {
    return(
        <div>
            <p>
                {`${position}`}
            </p>

>>>>>>> 0a7799c0ef41c4aa4a030fa29ddfc16ace452034
        </div>

    )
}

export default Profile