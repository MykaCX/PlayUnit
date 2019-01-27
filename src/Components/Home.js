import React, { Component } from 'react';
import Profile from './Profile/Profile';
import Chat from './Chat/Chat';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Profile />
                <Chat />
            </div>
        );
    }

}
export default Home