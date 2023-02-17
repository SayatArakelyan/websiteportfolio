import Project from "../components/Project";
import {projects} from "../helpers/ProjectList";
import {useState} from "react";
import Pagination from "../components/Pagination";
import useQuery from "../hooks/useQuery";
import { useNavigate } from "react-router-dom";



function Projects() {
    let query = useQuery();
    const [currentPage, setCurrentPage] = useState(query.get("page") || 1)
    const [projectPerPage] = useState(3)

    const lastProjectIndex = currentPage * projectPerPage
    const firstProjectIndex = lastProjectIndex - projectPerPage
    const currentProject = projects.slice(firstProjectIndex, lastProjectIndex)
    const navigate = useNavigate();



    const paginate = (pageNumber) => {
        navigate({
            pathname: '/projects',
            search: `?page=${pageNumber}`,
        });
        setCurrentPage(pageNumber)
    }

    return (<div>
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {currentProject.map((project) => (
                        <Project key={project.id} title={project.title} img={project.img} id={project.id}/>))}


                </ul>



                <Pagination projectPerPage={projectPerPage} totalProjects={projects.length} paginate={paginate}/>
            </div>
        </main>
    </div>);
}

export default Projects;