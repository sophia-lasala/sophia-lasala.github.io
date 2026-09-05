function About() {
    return (
        <div className="about">
            <h1>About Me</h1>

            <img
                src="/images/sophia.jpeg"
                alt="Sophia LaSala"
                className="about-photo"
            />

            <p>
             Hello, my name is <b>Sophia LaSala</b> and I am junior 
             at Farmingdale State College <b><i>(FSC)</i></b> pursuing Electrical Engineering Technology <b><i>(EET)</i></b>.
            </p>

            <p>
             I'm interested in software development, embedded systems,
             and projects that combine hardware and programming. I enjoy
             building things and figuring out how the different pieces
             work together.
            </p>

            <p>
             Outside of academics, I enjoy volunteering at my local animal shelter,
             playing video games, reading, and gardening!  
            </p>

            <h2>Skills</h2>

            <div className="skills">
                <div>
                    <h3>Programming</h3>
                    <ul>
                        <li><b>C++</b></li>
                        <li><b>C#</b></li>
                        <li><b>Python</b></li>
                        <li><b>SQL</b></li>
                        <li><b>Java</b></li>
                        <li><b>Javascript</b></li>
                        <li><b>HTML</b></li>
                        <li><b>CSS</b></li>
                    </ul>
                </div>

                <div>
                    <h3>Tools / Hardware</h3>
                    <ul>
                        <li><b>Breadboarding</b></li>
                        <li><b>Soldering</b></li>
                        <li><b>Arduino IDE</b></li>
                        <li><b>LiDAR</b></li>
                        <li><b>Digital Electronics</b></li>
                        <li><b>KiCAD</b></li>
                        <li><b>FreeCAD</b></li>
                        <li><b>PCB Design</b></li>
                    </ul>
                </div>

                <div>
                    <h3>Concepts</h3>
                    <ul>
                        <li><b>Troubleshooting</b></li>
                        <li><b>Circuit Design</b></li>
                        <li><b>Circuit Prototyping</b></li>
                        <li><b>Object Oriented Programming</b></li>
                        <li><b>Data Structures</b></li>
                        <li><b>Microcontroller Programming</b></li>
                        <li><b>Sensor Interfacing</b></li>
                        <li><b>Digital Logic</b></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About

