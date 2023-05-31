function Projects({projects}) {
    console.log(projects)
    return (projects.map((project, index) => {
        console.log(project);
        return <div key={index}>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <br />
            <a href={project.git}>
                <button>Github</button>
            </a>
            <a href={project.live}>
                <button>Live site</button>
            </a>
        </div>
    }))
}

export default Projects;