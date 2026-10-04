function TrafficControl() {
    return (
    <div className = "traffic-control">
    <h1>Traffic Light Control System</h1>
    <div className = "project-link"><a href="https://github.com/sophia-lasala/Traffic-Light-Control-System" target="_blank">Project Link</a></div> 
    <br></br>
    <div className = "skill-card"><p>Arduino</p></div>
    <div className = "skill-card"><p>C++</p></div>
    <div className = "skill-card"><p>LCD</p></div>
    <div className = "skill-card"><p>LEDs</p></div>
    <h2>Overview</h2> 
    <p>Traffic Light Control System is an Arduino-based embedded systems project that simulates the operation of a traffic light using timed state transitions.</p>
    <p>The system controls a series of LEDs to represent the traffic light while using a Liquid Crystal Display (LCD) to communicate the current state and remaining time to the user.
         Music is also played during the red-light state as an additional output of the system.</p>
    <h2>How It Works</h2>
    <p>The program assigns the LEDs and LCD to specific pins on an Arduino Uno R3 and establishes a preset duration for each traffic light state.</p>
    <p>The system continuously loops through the traffic cycle, keeping track of the amount of time remaining in the current state.
         While each state is active, the LCD displays information about the current traffic light and its remaining time.</p>
    <img
                src="/images/Schematic.png"
                alt="Login Demo"
                className="code-photo"
    />
    <p>Once the current timer reaches its end, the program transitions to the next traffic light state. 
        During the red-light state, the Arduino also plays music. After all states in the traffic cycle have been completed, the timers and state values are reset and the cycle begins again.</p>
    <h2>Design</h2>
    <p>The completed program is able to...</p>
    <ul>
            <li><p>Control multiple LEDs through an Arduino</p></li>
            <li><p>Cycle through traffic light states automatically</p></li>
            <li><p>Track the remaining time for each state</p></li>
            <li><p>Display the current state and timer on an LCD</p></li>
            <li><p>Play music during the red-light state</p></li>
            <li><p>Reset and repeat the traffic cycle continuously</p></li>
    </ul>
    <h2>What I Learned</h2>
    <p>This project gave me experience with the basic principles of embedded systems and timed state transitions. 
        It also provided practical experience controlling multiple hardware outputs from an Arduino while using an LCD to communicate information about the system's current state.</p>
    <h2>Future Improvements</h2>
     <ul>
            <li><p>Build the system physically using an Arduino Uno R3 and solderless breadboard</p></li>
            <li><p>Add additional Arduino components to improve the physical visualization</p></li>
            <li><p>Expand the system with additional traffic-related functionality</p></li>
    </ul>
    <img
                src="/images/Arduino_Design.png"
                alt="Login Demo"
                className="code-photo"
    />
    </div>
)}

export default TrafficControl
