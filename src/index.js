import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ReactComponent as ReactLogo} from './logo.svg';


function Header() {
    return (
        <header>
            <nav className="nav">
                <ReactLogo className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className='footer'>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div className='main-content'>
            <h1>Reasons Im excited to learn React</h1>
            <ol>
                <li>Its a popular library, so Ill be
                    able to fit in with the cool kids!</li>
                <li>Im more likely to get a job as a developer
                    if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))