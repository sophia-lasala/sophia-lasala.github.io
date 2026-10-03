import { HashRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'

import CollegeGPS from './pages/projects/CollegeGPS'
import MP3 from './pages/projects/MP3'
import StreamingLicense from './pages/projects/StreamingLicense'
import TrafficControl from './pages/projects/TrafficControl'
import AnimalDatabase from './pages/projects/AnimalDatabase'
import CaesarCipher from './pages/projects/CaesarCipher'

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
                        <Route path="/projects/StreamingLicense" element={<StreamingLicense />}/>
                        <Route path="/projects/TrafficControl" element={<TrafficControl />}/>
                        <Route path="/projects/AnimalDatabase" element={<AnimalDatabase />}/>
                        <Route path="/projects/CaesarCipher" element={<CaesarCipher />}/>


                    </Routes>
                </main>

                <Footer />

            </div>

        </HashRouter>
    )
}

export default App