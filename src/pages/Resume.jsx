function Resume() {
    return (
        <div className="resume">
            <h1>Resume</h1>

            <iframe
                src="files/Sophia_LaSala_Resume.pdf"
                width="100%"
                height="1000px">
             </iframe>

            <a
                href="/public/resume/Sophia_LaSala_Resume.pdf"
                download
            >
                Download Resume
            </a>
        </div>
    )
}

export default Resume
