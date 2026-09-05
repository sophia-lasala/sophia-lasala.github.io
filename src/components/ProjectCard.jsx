import { Link } from 'react-router-dom'

function ProjectCard({ title, image, description, link }) {
    return (
        <Link to={link} className="project-card">
            <img src={image} alt={title} />

            <div className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default ProjectCard
