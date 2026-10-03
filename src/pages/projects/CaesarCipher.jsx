function CaesarCipher(){
    return (
        <div className = "caesar-cipher">
        <h1>Recursive Caesar Cipher Decoder</h1>
        <div className = "project-link"><a href="https://github.com/sophia-lasala/Caesar-Cipher" target="_blank">Project Link</a></div> 
        <br></br>
        <div className = "skill-card"><p>Java</p></div>
        <div className = "skill-card"><p>Recursion</p></div>
        <div className = "skill-card"><p>Decoder</p></div>
        <div className = "skill-card"><p>Arrays</p></div>
        <h2>Overview</h2>
        <p>Caesar Cipher Decoder is a Java program designed to decode messages encrypted using a Caesar Cipher without requiring the user to know the original encryption key.</p>
        <p>The project focuses on implementing the cipher itself while using a brute-force approach to allow the user to identify the correct decryption by comparing all possible results.</p>
        <h2>How It Works</h2>
        <p>The program stores the uppercase and lowercase alphabets in separate arrays. 
            When a character is encountered, the program searches for its position within the appropriate array and recursively shifts its index according to the selected key.</p>
        <p>Rather than requiring the user to provide the key, the program automatically tests all 26 possible shifts. 
            Each resulting message is displayed alongside its corresponding key, allowing the user to determine which decoded message makes the most sense.</p>
        <p>The program is divided into two primary classes. Cipher.java handles the encryption and decryption logic, while Main.java manages user input and cycles through the possible keys.</p>
        <h2>Challenges & Design</h2>
        <p>One of the main challenges of the project was implementing the character shifting while accounting for both uppercase and lowercase letters.
             Separating the alphabets into two arrays allowed the program to preserve the capitalization of the original message.</p>
        <p>Recursion was also used to process the message and shift each character according to the selected key. 
            This provided an opportunity to apply recursion to a practical problem rather than simply using it as an isolated programming exercise.</p>
        <h2>Results</h2>
        <p>The completed program allows a user to...</p>
        <ul>
            <li><p>Enter an encrypted message</p></li>
            <li><p>Test all possible Caesar Cipher keys</p></li>
            <li><p>Display each decrypted message alongside its key</p></li>
            <li><p>Preserve uppercase and lowercase characters</p></li>
            <li><p>Identify the most likely solution through brute-force comparison</p></li>
        </ul>
        <h2>What I Learned</h2>
        <p>This project gave me experience applying recursion and arrays to a practical problem. 
            It also introduced me to the concept of brute-force solutions, where a program systematically tests every possible option rather than requiring the user to know the correct key beforehand.</p>
        <h2>Future Improvements</h2>
        <ul>
            <li><p>Allow users to provide a specific key</p></li>
            <li><p>Add the ability to encrypt messages</p></li>
            <li><p>Create a JavaFX graphical interface</p></li>
            <li><p>Automatically identify the most likely decrypted message using common words or phrases</p></li>
        </ul>
        </div>
    )}

    export default CaesarCipher