function AnimalDatabase(){
    return (
        <div className = "animal-database">
        <h1>Animal Shelter Database</h1>
        <div className = "project-link"><a href="https://github.com/sophia-lasala/MP3-Player" target="_blank">Project Link</a></div> 
        <br></br>
        <div className = "skill-card"><p>Python</p></div>
        <div className = "skill-card"><p>SQL</p></div>
        <div className = "skill-card"><p>React</p></div>
        <div className = "skill-card"><p>SHA-256</p></div>
        <h2>Overview</h2>
        <p>Animal Shelter Database is an SQL-based database application being developed to help animal shelter staff organize information about animals, volunteers, supplies, shifts, and shelter communications.</p>
        <p>This project has personal significance to me because I have been volunteering at an animal shelter for over 4½ years. 
            Through that experience, I have seen the amount of information that shelter staff and volunteers need to keep track of and wanted to create a system that could make that information easier to organize and access.</p>
        <p>The project is being developed as a team with Shalini Daniel, with my primary responsibility being the backend development and database architecture. Shalini is responsible for the frontend and React-based GUI.</p>
        <h2>The Problem</h2>
        <p>Animal shelters need to manage several different types of information simultaneously, including animal records, volunteer schedules, supplies, and day-to-day communication between staff and volunteers.</p>
        <p>The goal of this project is to bring these different types of information into a single application, allowing shelter staff to access and update records without having to manage each category separately.</p>
        <h2>Current Progress</h2>
        <p>The backend currently includes the authentication system for the application. User account information is stored in an SQLite database, including usernames, password credentials, account access levels, and account creation dates.</p>
        <p>Rather than storing passwords directly, the system uses SHA-256 hashing with a salt to protect stored password information. 
            When a user attempts to log in, the provided password is processed and compared against the stored credentials.</p>
        <p>New users can also create an account through the login system. After successfully authenticating, the user is directed to the main application.</p>
        <p>The overall structure of the application's pages has also been planned, providing a framework for the database and frontend features that are still being developed.</p>
        <h2>Backend Development</h2>
        <p>My primary responsibility on this project is developing the backend and databases that support the application.</p>
        <p>The planned database functionality includes...</p>
        <ul>
            <li><p>Animals: Name, ID, kennel, age, sex, breed, intake date, walking difficulty, medication, and adoption status</p></li>
            <li><p>Volunteers: Name, shifts, and walking difficulty</p></li>
            <li><p>Supplies: Name, links, quantity, shipment dates, and supply categories</p></li>
            <li><p>Journal: Time-stamped entries associated with the user who created them</p></li>
            <li><p>Shifts: Scheduled volunteers, shift leaders, dates, times, and special shift types</p></li>
        </ul>
        <p>The system will also be able to identify supplies that are running low and organize animal and volunteer information using relevant attributes.</p>
        <h2>Frontend Development</h2>
        <p>The frontend is being developed separately using React by my project partner.</p>
        <p>The planned interface includes a main page displaying current animals, low-stock supplies, and recent journal entries.
             A dedicated shift page will provide a calendar-based interface for viewing scheduled volunteers and shift information.</p>
        <p>The data page will provide access to animal, volunteer, and supply records, as well as tools for searching journal entries using keywords and dates.</p>
        <p>This separation between the frontend and backend allows the database functionality to be developed independently from the user interface while giving the completed application a clear structure.</p>
        <h2>Security</h2>
        <p>User authentication is one of the first backend components implemented in the project.</p>
        <p>The system does not store user passwords directly.
             Instead, passwords are processed using SHA-256 hashing with a unique salt before being stored in the database. 
             During login, the entered password is processed using the stored information and compared against the account's stored credentials.</p>
        <p>This provides experience working with database authentication and handling user credentials more securely than storing passwords as plain text.</p>
        <h2>Future Development</h2>
        <p>The next major stage of the project is implementing the animal and volunteer databases. 
            The supply, journal, and shift systems will then be developed around the same database structure.</p>
        <p>As development continues, the goal is to connect the completed backend functionality with the React frontend so that shelter staff can interact with the database through a unified graphical interface.</p>
        <p>Future features include...</p>
        <ul>
            <li><p>Animal and volunteer database management</p></li>
            <li><p>Supply inventory tracking and low-stock notifications</p></li>
            <li><p>Shift scheduling and calendar functionality</p></li>
            <li><p>Searchable journal entries</p></li>
            <li><p>User access levels</p></li>
            <li><p>Shelter-specific data organization</p></li>
            <li><p>Integration between the backend database and React interface</p></li>
        </ul>
        <p>The completed application is intended to provide a centralized system for managing the information needed to operate an animal shelter while giving me practical experience designing and developing a database-backed application around a real-world use case.</p>
        </div>
)}

export default AnimalDatabase