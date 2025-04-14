import '../styles/ProjectSection.css'
import projectsData from '../data/projects.json';

const ProjectSection = () => {
  return (
    <section className="project-section">
        <div className="project-wrapper">
            <div className="section-header">
                <h2>함께하는 일</h2>
                <span>●</span>
                <h2 className="inactive">우리의 흔적</h2>
            </div>
            <div className="projects">
                {projectsData?.projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} loading="lazy" />
                        </div>
                        <div className="project-content">
                            <p>{project.description}</p>
                            <h3>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ProjectSection