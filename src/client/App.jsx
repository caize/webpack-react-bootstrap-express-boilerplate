import React from 'react';
import Navbar from './Navbar';
import Body from './Body';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar/>

                <Body/>
            </div>
        );
    }
}
