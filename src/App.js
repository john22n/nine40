import React from "react";
import { Router, Link } from "@reach/router";
import loadable$2 from "@loadable/component";
import Spinner from './Spinner';
const HomePageComponent = loadable$2(() => import('./HomePage'));

const App = () => {
    return (
        <div>
            <header>
                <Link to="/">9Forty</Link>
                <a href="https://calendly.com/johnnoriega22/tattoo" target="_blank">
                    Schedule appointment
                </a>
            </header>
            <Router>
                <HomePageComponent path="/" />
            </Router>
        </div>
    );
};

export default App;