function StreamingLicense() {
    return (
    <div className = "streaming-license">
    <h1>Streaming License Database</h1>
    <div className = "project-link"><a href="https://github.com/sophia-lasala/Licenses" target="_blank">Project Link</a></div> 
    <br></br>
    <div className = "skill-card"><p>Java</p></div>
    <div className = "skill-card"><p>ArrayLists</p></div>
    <div className = "skill-card"><p>LinkedLists</p></div>
    <div className = "skill-card"><p>Hashmaps</p></div>
    <div className = "skill-card"><p>BSTs</p></div>
    <div className = "skill-card"><p>Queues</p></div>
    <div className = "skill-card"><p>Stacks</p></div>
    <h2>Overview</h2>
    <p>Movie Licenses Database is a Java-based database management system designed to help streaming companies keep track of the licensing agreements associated with the movies and television shows available on their platforms.</p>
    <p>Streaming services must maintain Content Distribution Agreements for the media they provide. 
        If a license expires without being renewed, a company may lose the ability to continue offering that content. 
        The purpose of this project was to create a system that could organize license information while providing multiple ways to search, manage, and update the database.</p>
    <p>The project was developed as a team with Lois Robert, with the system incorporating multiple data structures to handle different aspects of the database.</p>
    <h2>The Problem</h2>
    <p>Streaming services may have thousands of pieces of content, each with its own licensing information. 
        Managing these records requires more than simply storing the information; users need to be able to quickly search for specific movies, identify licenses that are approaching expiration, update records, and review previous actions.</p>
    <p>The goal of this project was to create a system that could handle these operations efficiently while demonstrating how different data structures can be selected based on the type of problem being solved.</p>
    <h2>Project Goals</h2>
    <p>The project was designed with the following goals:</p>
    <ul>
            <li><p>Allow users to create a movie license database from scratch</p></li>
            <li><p>Allow users to import an existing .csv file</p></li>
            <li><p>Store license information using dynamic data structures</p></li>
            <li><p>Provide multiple methods for searching the database</p></li>
            <li><p>Identify licenses approaching their expiration dates</p></li>
            <li><p>Allow license information to be renewed and updated</p></li>
            <li><p>Secure and search license IDs using hashing</p></li>
            <li><p>Maintain a history of actions performed during a session</p></li>
            <li><p>Demonstrate practical applications of common data structures</p></li>
        </ul>
        <h2>System Design</h2>
        <p>The database uses several different data structures, with each one serving a specific purpose within the application.</p>
        <p>When a user creates a database from scratch or imports a .csv file, the information is converted into an ArrayList. 
            This allows the database to dynamically grow or shrink rather than requiring a fixed number of records.</p>
        <p>A LinkedList is used to manage license records, while license IDs are processed through a hashing system. 
            The hashed IDs provide another method for identifying and searching for specific licenses within the database.</p>
        <p>The system also maintains several Binary Search Trees (BSTs). Separate trees are created based on movie title, number of views, and cost. 
            This allows users to search and organize the database according to different types of information rather than relying on a single search method.</p>    
        <p>A Queue is used for license renewal. The system identifies the ten licenses with the closest upcoming expiration dates and places them into the queue, with the license expiring soonest handled first. 
            Once a license is renewed, its information can be updated and it is removed from the queue.</p>
        <p>Finally, a Stack is used to maintain a history of actions performed during the current session. 
            This allows users to review previous operations and see what actions were performed and by whom.</p>
        <h2>Why multiple data structures?</h2>
        <p>One of the main goals of the project was to demonstrate that different data structures are useful for different types of operations.</p>
        <p>Rather than attempting to manage the entire database using one structure, the system uses several structures based on the requirements of each feature:</p>
        <ul>
            <li><p>ArrayList — dynamically stores the overall database</p></li>
            <li><p>LinkedList — manages license records</p></li>
            <li><p>Hashmaps — provides a method for managing and searching license IDs</p></li>
            <li><p>Binary Search Trees (BSTs) — organize and search movies by title, views, and cost</p></li>
            <li><p>Queue — prioritizes licenses based on approaching expiration dates</p></li>
            <li><p>Stack — stores the history of actions performed during the session</p></li>
        </ul>        
        <p>This approach allowed the project to demonstrate how the same set of data can be organized in different ways depending on how it needs to be accessed.</p>
        <h2>Searching the Database</h2>
        <p>The database provides several different ways to search for movie information.</p>
        <p>Users can search for movies using Binary Search Trees organized by title, views, or cost.
             This gives the user different ways to locate information depending on what they know about the movie.</p>
        <p>For example, a user who knows the title of a movie can search using the title-based tree, while someone interested in finding content based on its number of views or licensing cost can use one of the corresponding trees.</p>
        <p>The system also allows users to search through the database based on these same categories when they do not have a specific movie in mind.</p>
        <h2>License Renewal</h2>
        <p>One of the more important features of the system is its license renewal process.</p>
        <p>The program identifies the ten licenses with the closest upcoming expiration dates and places them into a Queue. 
            Because a queue follows a first-in, first-out structure, the license with the nearest expiration can be handled first.</p>
        <p>Once the user selects a license for renewal, the expiration date can be updated. After the renewal is completed, the license is removed from the queue.</p>
        <p>This provides a way to prioritize licenses that require attention rather than requiring a user to manually search through the entire database for upcoming expiration dates.</p>
        <h2>Session History</h2>
        <p>The application also records the actions performed during the current session using a Stack.</p>
        <p>Whenever a function is used, information about the operation and the user who performed it is added to the history. 
            Because a Stack follows a last-in, first-out structure, the most recent action can be accessed first.</p>
        <p>This gives the user a way to review what has happened within the current session and provides an additional layer of organization to the database management system.</p>
        <h2>Challenges & Design Considerations</h2>
        <p>One of the main challenges of this project was determining which data structure was appropriate for each operation.</p>
        <p>The database needed to support several different types of interactions, including searching, updating, prioritizing expiring licenses, and tracking user activity.
             Rather than treating these as variations of the same problem, each operation was considered separately and matched with a structure that supported its intended behavior.</p>
        <p>Another challenge was implementing multiple Binary Search Trees for the same underlying database. 
            The system needed to organize movie information according to different attributes, including title, views, and cost. 
            This required considering how the same records could be represented and accessed according to different sorting criteria.</p>
        <p>The license renewal system also required a method of prioritizing records based on their expiration dates. 
            Using a Queue allowed the renewal process to follow a defined order, with the most urgent licenses being handled first.</p>
        <h2>Results</h2>
        <p>The completed application was able to...</p>
        <ul>
            <li><p>Import an existing .csv database</p></li>
            <li><p>Create a database from scratch</p></li>
            <li><p>Dynamically store license records</p></li>
            <li><p>Manage licenses using a LinkedList</p></li>
            <li><p>Hash and search license IDs</p></li>
            <li><p>Search movies by title, views, and cost</p></li>
            <li><p>Organize movie information using multiple Binary Search Trees</p></li>
            <li><p>Identify the ten licenses with the closest expiration dates</p></li>
            <li><p>Prioritize license renewals using a Queue</p></li>
            <li><p>Update license expiration dates</p></li>
            <li><p>Track actions performed during a session using a Stack</p></li>
            <li><p>Display the history of actions performed by users</p></li>
        </ul>   
        <p>The completed project demonstrated how multiple data structures could be combined into a single application to solve different database management problems.</p>
        <h2>What I Learned</h2>
        <p>This project gave me practical experience applying data structures to a larger system rather than using them as isolated programming exercises. 
            Each structure had to serve a specific purpose within the application, which required considering how information would be inserted, accessed, searched, updated, and removed.</p>
        <p>The project also helped demonstrate the importance of choosing a data structure based on the operation being performed.
             An ArrayList, LinkedList, Queue, Stack, Hashing system, and Binary Search Tree all manage data differently, and using them together allowed the application to support several different types of functionality.</p>
        <p>Working with multiple Binary Search Trees was particularly useful because it demonstrated how the same underlying information can be organized around different attributes depending on what the user needs to find.</p>
        <h2>Future Improvements</h2>
        <h3>User Interface</h3>
        <ul>
            <li><p>Create a graphical user interface using JavaFX</p></li>
            <li><p>Make the database easier to navigate and use</p></li>
            <li><p>Improve how search results and license information are displayed</p></li>
        </ul>   
        <h3>Database Management</h3>
        <ul>
            <li><p>Allow users to overwrite existing .csv files</p></li>
            <li><p>Allow users to export updated databases</p></li>
            <li><p>Expand the number of searchable and sortable attributes</p></li>
            <li><p>Create additional Binary Search Trees for other variable types</p></li>
        </ul> 
        <h3>Search & Organization</h3>
        <ul>
            <li><p>Provide more flexible search options</p></li>
            <li><p>Allow users to combine multiple search criteria</p></li>
            <li><p>Improve the organization of search results</p></li>
        </ul> 
        <p>The project could eventually be expanded from a command-line data structure demonstration into a more complete database management application with a graphical interface and more advanced file management.</p>
    </div>
)}

export default StreamingLicense