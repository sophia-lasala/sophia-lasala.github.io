import ProjectCard from '../components/ProjectCard'

function Home() {
    return (
        <div className="home">
            <h1>Upcoming Projects</h1>
            <div className="project-grid">
              <ProjectCard
                    title="Portable MP3 Player"
                    image="/images/MP3P.jpg"
                    description="A Rasberry Pi based MP3 player built using CAD and Python."
                    link="/projects/MP3"
                />

                <ProjectCard
                    title="Animal Shelter Database"
                    image="/images/AnimalP.jpg"
                    description="An SQL based database built with features for animal shelters with a GUI built using React."
                    link="/projects/AnimalDatabase"
                />
            </div>
            <h1>Completed Projects</h1>
            <div className="project-grid">
              <ProjectCard
                    title="Graph-Based Indoor Navigation System"
                    image="/images/GPSP.jpg"
                    description="An indoor navigation system built using .NET Maui alongside C# made to help college students find classrooms and other important areas."
                    link="/projects/CollegeGPS"
                />

                <ProjectCard
                    title="Traffic Control System"
                    image="/images/TrafficP.jpg"
                    description="An Arduino based traffic control simulation made using basic embedded systems."
                    link="/projects/TrafficControl"
                />

                <ProjectCard
                    title="Caesar Cipher Decoder"
                    image="/images/CaesarP.jpg"
                    description="Built in Java, meant to brute force decode ciphers using recursive algorithms."
                    link="/projects/CaesarCipher"
                />

                <ProjectCard
                    title="Streaming License Database"
                    image="/images/LicenseP.jpg"
                    description="A Java database built using basic data structures such as Binary Search Trees (BSTs), Linked Lists, etc. meant to help keep streaming service licenses organized."
                    link="/projects/StreamingLicense"
                />
            </div>
        </div>
    )
}

export default Home
