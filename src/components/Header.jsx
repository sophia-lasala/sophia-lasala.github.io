import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Sophia LaSala</h1>
            </div>

            <nav>
                <h2>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/resume">Resume</Link>
                </h2>
            </nav>
        </header>
    )
}

export default Header