import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Events from './Events/Events';
import Chat from './Chat/Chat';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Profile />
                <Events />
            </div>
        );
    }

}
export default Home