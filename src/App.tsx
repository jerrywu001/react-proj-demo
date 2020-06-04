import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import About from './components/About';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/About">About</Link>
                <hr />
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
}

export default App;
