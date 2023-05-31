const URL = 'https://portfolio-backend-oobq.onrender.com';
// added a different thing
export const projectsLoader = async () => {
    const response = await fetch(URL + '/projects');
    const projects = await response.json();
    return projects;
}

export const aboutLoader = async () => {
    const response = await fetch(URL + '/about');
    const about = await response.json();
    return about;
}

var thisVariable;
thisVariable = 0;