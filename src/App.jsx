import { HashRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'

import CollegeGPS from './pages/projects/CollegeGPS'
import MP3 from './pages/projects/MP3'


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

                        <Route path="/projects/CollegeGPS" element={<CollegeGPS />}/>
                        <Route path="/projects/MP3" element={<MP3 />}/>
                    </Routes>
                </main>

                <Footer />

            </div>

        </HashRouter>
    )
}

export default App