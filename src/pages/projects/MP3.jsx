function MP3() {
    return (
        <div className = "mp3">
        <h1>Portable MP3 Player</h1>
        <div className = "project-link"><a href="https://github.com/sophia-lasala/MP3-Player" target="_blank">Project Link</a></div> 
        <br></br>
        <div className = "skill-card"><p>Raspberry Pi</p></div>
        <div className = "skill-card"><p>SolidWorks</p></div>
        <div className = "skill-card"><p>CAD</p></div>
        <div className = "skill-card"><p>Python</p></div>
        <h2>Overview</h2>
        <p>Raspberry Pi-Based MP3 Player is an in-progress hardware and software project focused on designing and building a portable music player using a Raspberry Pi computer.</p>
        <p>The goal of the project is to create a dedicated music player with a physical enclosure, hardware controls, and a custom software interface for organizing and playing a personal music library.</p>
        <p>Because this project combines mechanical design, electronics, and software development, development is being approached in stages. 
            The current focus is learning SolidWorks and designing the physical enclosure before selecting and integrating the remaining components.</p>
        <h2>Current Progress</h2>
        <p>The current stage of the project is focused on the physical design of the MP3 player.</p>
        <p>SolidWorks is being used to develop the enclosure and determine how the internal components can be arranged within the device. 
            The design will be adjusted as the required hardware is selected so that the final enclosure can accommodate the components while remaining compact and durable.</p>
        <p>Since this is my first major project using SolidWorks, part of the current development process has been learning how to approach CAD design and translate the concept for the MP3 player into a physical design.</p>
        <h2>Design Goals</h2>
        <p>The enclosure is being designed with several goals in mind:</p>
         <ul>
            <li><p>Approximately 5.83 * 3.54 * 1.26 inches</p></li>
            <li><p>Durable construction with a focus on drop resistance</p></li>
            <li><p>Compact and portable form factor</p></li>
            <li><p>Space for the internal electronics and battery</p></li>
            <li><p>Physical access to the device's controls and ports</p></li>
            <li><p>Headphone jack and Bluetooth support</p></li>
            <li><p>Long battery life</p></li>
        </ul>
        <p>The physical design will ultimately determine how the internal components are arranged, making the enclosure an important part of the overall system rather than simply an exterior shell.</p>
        <h2>Planned Software</h2>
        <p>Once the physical design and hardware components have been established, development will move toward the MP3 player's software.</p>
        <p>The planned interface will allow users to browse and organize their music library while displaying metadata such as:</p>
          <ul>
            <li><p>Album artwork</p></li>
            <li><p>Artist</p></li>
            <li><p>Genre</p></li>
            <li><p>Album information</p></li>
        </ul>
        <p>The software is also planned to support automatic organization of songs by artist and genre, shuffled albums and playlists, and both light and dark display modes.</p>
        <h2>Development Process</h2>
        <p>The project is being developed incrementally, with the physical design being completed before the hardware and software are finalized.</p>
        <p>The next step is to complete the initial enclosure design and determine the hardware components required for the finished device. 
            Once the component list has been established, the enclosure can be adjusted to fit the actual hardware before moving into the software and user-interface development.</p>
        <h2>Future Development</h2>
        <p>Future stages of the project will include:</p>
         <ul>
            <li><p>Finalizing the SolidWorks enclosure</p></li>
            <li><p>Selecting the Raspberry Pi and supporting hardware</p></li>
            <li><p>Creating a complete component and power-supply list</p></li>
            <li><p>Designing the user interface</p></li>
            <li><p>Developing the music library backend</p></li>
            <li><p>Integrating physical controls</p></li>
            <li><p>Testing battery life and portability</p></li>
            <li><p>Refining the enclosure based on hardware testing</p></li>
        </ul>
        <p>The long-term goal is to create a functional portable MP3 player that combines a custom physical enclosure with software designed specifically around the device.</p>
        </div>
    )
}

export default MP3
