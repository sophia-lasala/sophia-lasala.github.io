import { HashRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'

function App() {
    return (
        <HashRouter>

            <div className="page">

                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </main>

                <Footer />

            </div>

        </HashRouter>
    )
}

export default App