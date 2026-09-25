function CollegeGPS() {
    return (
        <div className = "college-gps">
        <h1> Graph-Based Indoor Navigation System</h1>
        <div className = "project-link"><a href="https://github.com/sophia-lasala/College-Building-GPS-Tracker" target="_blank">Project Link</a></div> 
        <br></br>
        <div className = "skill-card"><p>.NET MAUI</p></div>
        <div className = "skill-card"><p>C#</p></div>
        <div className = "skill-card"><p>Dijkstra</p></div>
        <div className = "skill-card"><p>Graphs</p></div>
        <div className = "skill-card"><p>Stacks</p></div>
        <div className = "skill-card"><p>Android</p></div>
        <h2>Overview</h2>
        <p>Graph-Based Indoor Navigation System is an Android-based navigation application designed to help students navigate an unfamiliar campus building. 
            The application allows users to select a starting location and destination and generates a visual route along with step-by-step directions. 
            The project was developed as a team, with my primary responsibility being the development of the backend navigation system, including the graph 
            representation of the building, Dijkstra's shortest-path algorithm, directional instructions, and navigation history.</p>
        <h2>The Problem</h2>
        <p>Navigating an unfamiliar college building can be difficult, particularly for new and transfer students who may not know how classrooms and hallways are arranged. 
            Traditional floor plans provide the necessary information, but users still have to interpret the map and determine the best route themselves. This can lead to confusion, 
            particularly when students are trying to locate an unfamiliar classroom while also trying to arrive on time. The goal of this project was to create a more interactive
            navigation system that could provide students with both a visual route and clear, text-based instructions for reaching their destination.</p>
        <h2>Project Goals</h2>
        <p>The project was designed with the following goals:</p>
        <ul>
            <li><p>Create an Android-based interface for indoor navigation</p></li>
            <li><p>Represent the building's hallways and rooms as a graph</p></li>
            <li><p>Generate an optimal route between two locations</p></li>
            <li><p>Provide both visual and text-based directions</p></li>
            <li><p>Make the system intuitive for new students</p></li>
            <li><p>Store previous navigation requests</p></li>
            <li><p>Design the system so it could eventually be expanded to larger and more complex buildings</p></li>
        </ul>
        <h2>System Design</h2>
        <p>The navigation system was divided into two primary components: a .NET MAUI frontend responsible for the user interface and a C# backend responsible for calculating navigation routes. 
            The frontend provides users with a way to select their starting location and destination, while the backend processes those locations and determines the optimal path through the building. 
            The resulting route is then returned to the frontend and displayed visually on the building's floor plan along with text-based directions.</p>
        <p>To represent the building within the navigation system, the backend models the hallways and rooms as a directed, weighted graph.
             Nodes represent locations such as rooms and hallway segments, while edges represent the connections between them. 
             The graph is directed to account for how rooms connect to specific hallway segments, while weights allow different possible routes to be compared. Once the starting and ending locations are identified,
              Dijkstra's algorithm is used to determine the shortest path between them.</p>
        <p>The calculated path then has to be translated into information that a user can understand. 
            Rather than displaying only a sequence of graph nodes, the system determines the user's direction of travel between each node and converts the path into instructions such as "straight," "left," and "right."
            The application also maintains a history of recent navigation requests using a Stack, allowing users to access previous routes and their associated directions.</p>
        <h2>My Contributions</h2>
        <p>My primary contributions to the project were focused on the backend navigation system:</p>    
        <ul>
            <li><p>Designed and developed the directed, weighted graph, including its nodes and edges</p></li>
            <li><p>Developed the algorithm used to determine the user's orientation and generate text-based directions</p></li>
            <li><p>Implemented the navigation history feature using a Stack to store previous routes and their associated directions</p></li>
        </ul>
        <h2>Why a Graph?</h2>
        <p>A graph was a natural representation for this problem because the building could be modeled as a collection of locations and the connections between them.
             Nodes were used to represent rooms and hallway segments, while edges represented the connections between these locations. 
             This allowed the physical layout of the building to be converted into a structure that could be processed algorithmically.</p>
        <p>The graph was directed because rooms were connected to specific hallway segments rather than being freely accessible from any nearby location. 
            Weights were assigned to the connections so that different possible routes could be compared. 
            Dijkstra's algorithm could then use these weights to determine the shortest available path between a starting and ending location.</p>
        <p>This approach allowed the navigation problem to be treated as a pathfinding problem rather than requiring a separate route to be manually programmed for every possible combination of rooms.</p>
        <h2>Generating Readable Directions</h2>
        <p>Finding the shortest path was only one part of creating a useful navigation system.
         Dijkstra's algorithm produces a sequence of nodes representing the calculated route, but a sequence of nodes alone would not be particularly helpful to someone trying to navigate a building. 
         The application therefore needed to determine how the user should move between each node and translate that movement into instructions such as moving straight, turning left, or turning right.</p>
        <p>To accomplish this, the direction of travel was recalculated as the program moved through each pair of nodes in the calculated path. 
            The current position was compared with the next position, and the difference between their x and y coordinates was used to determine the direction of movement.</p>        
        <p>The coordinate system used for determining directions was separate from the graph used to represent the building's layout. 
            The graph was responsible for representing how rooms and hallways were connected, while the coordinate system provided positional information that could be used to determine changes in direction.</p>
        <p>The coordinate differences were interpreted as follows:</p>
        <ul>
            <li><p>A negative change in the x direction indicated movement toward the west</p></li>
            <li><p>A positive change in the x direction indicated movement toward the east</p></li>
            <li><p>A change of zero in the x direction indicated no horizontal movement</p></li>
            <li><p>A negative change in the y direction indicated movement toward the north</p></li>
            <li><p>A positive change in the y direction indicated movement toward the south</p></li>
            <li><p>A change of zero in the y direction indicated no vertical movement</p></li>
        </ul>
        <p>These changes were then compared with the user's current orientation to determine whether the next movement required continuing straight, turning left, or turning right.</p>
        <p>The resulting calculations were used to convert the sequence of nodes into full text-based instructions that could be displayed alongside the visual route.</p>
        <h2>Navigation History</h2>
        <p>The application uses a Stack data structure to store the ten most recent navigation requests. 
            A Stack was appropriate for this feature because it naturally provides access to information in last-in, first-out order, allowing the most recent navigation request to be displayed first.
             Each history entry stores the starting and ending locations along with the associated text-based and visual directions. Users can select a previous request to access its navigation information without having to enter the locations again.</p>
        <h2>Challenges & Troubleshooting</h2>
        <h3>Determining User Orientation</h3>
        <p>One of the first challenges was determining which direction the user was facing and how their movement should be represented as a left or right turn. 
            Without a way to calculate the user's orientation, the application could generate a path but could not provide useful turn-by-turn instructions.</p>
        <p>To solve this, I created a coordinate-grid representation of the building that allowed the movement between consecutive nodes to be represented mathematically.
             By comparing the coordinates of the current and next locations, the program could determine the direction of travel and use that information to determine the appropriate instruction.</p>
        <h3>Finding the Optimal Route</h3>  
        <p>Another challenge was determining how to find the most efficient route between two locations.
             Initially, I had not worked with Dijkstra's algorithm before this project, so I first had to learn how the algorithm worked before implementing it within the navigation system.</p>  
        <p>Dijkstra's algorithm evaluates the cumulative distance from the starting node to other connected nodes and continually selects the unvisited node with the smallest known distance.
             By keeping track of the shortest known distance to each node and the preceding node used to reach it, the program can reconstruct the shortest path once the destination is reached.</p>
        <p>Implementing the algorithm required translating the theoretical process into the graph structure used by the application.
             This gave me practical experience with both graph traversal and implementing an algorithm that I had previously only encountered as a theoretical concept.</p>
        <h2>Results</h2>
        <p>The completed application was able to:</p>
        <ul>
            <li><p>Use a starting and ending location selected through dropdown menus to calculate a route</p></li>
            <li><p>Visually display the calculated route using a coordinate plane overlaid on an image of the building's floor plan</p></li>
            <li><p>Generate text-based instructions alongside the visual route</p></li>
            <li><p>Allow users to access previous navigation requests</p></li>
            <li><p>Provide a user-friendly GUI</p></li>
            <li><p>Display an embedded video of the building represented by the application</p></li>
            <li><p>Provide a page featuring project credits</p></li>
        </ul>
        <p>The final application demonstrated that a building's physical layout could be represented as a graph and used to generate navigation routes that were presented through both visual and text-based instructions.</p>
        <h2>What I Learned</h2>
        <p>One of the main things I learned through this project was how to design a technical application around the needs of its users. 
            Many of my previous projects required some technical knowledge to understand or operate, whereas this application was specifically designed for users who may have no understanding of how the underlying navigation system works.
             This required us to think about how technical information, such as a calculated graph path, could be translated into something intuitive and useful to the user.</p>
        <p>This was also my first time working with the graph data structure and implementing Dijkstra's algorithm. 
            Graphs were significantly more abstract than many of the data structures I had previously worked with, and understanding how to represent a physical building through nodes and edges required me to think about data structures in a different way. 
            Implementing Dijkstra's algorithm gave me experience taking an algorithm I had learned about conceptually and adapting it to solve a practical problem.</p>
        <h2></h2>
        <h3>Navigation</h3>
          <ul>
            <li><p>Multi-floor routing</p></li>
            <li><p>Support for more complex floor plans</p></li>
            <li><p>Expansion to whole-campus navigation</p></li>
            <li><p>Accessibility-aware routing</p></li>
        </ul>
        <h3>User Experience</h3>
          <ul>
            <li><p>Searchable starting and destination locations instead of dropdown menus</p></li>
            <li><p>Additional information about buildings</p></li>
            <li><p>Opening and closing times for specific buildings</p></li>
        </ul>
        <h3>Routing</h3>
          <ul>
            <li><p>Estimated time of arrival</p></li>
            <li><p>More sophisticated edge weighting</p></li>
            <li><p>Additional factors when determining the optimal route</p></li>
        </ul>
        </div>
    )
}

export default CollegeGPS

