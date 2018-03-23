import React, { Component } from 'react';
import BookList from './containers/BookList';
import BookDetail from './containers/BookDetail';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <BookList />
                    <BookDetail />
                </div>
            </div>
        );
    }
}

export default App;
