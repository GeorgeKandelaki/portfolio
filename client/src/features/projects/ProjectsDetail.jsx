import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ProjectsActions from "./ProjectsActions";
import ProjectItem from "./ProjectItem";
import { useProjects } from "../../context/ProjectsContext";
import Menus from "../../ui/Menus";

const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 3.2rem;
    align-items: stretch; /* force all items to be equal height */
`;

function ProjectsDetail() {
    const { projects, isLoading } = useProjects();

    if (isLoading) return <Spinner />;

    if (!projects) return <p>Something Went Wrong! 🚨</p>;

    return (
        <StyledProjects>
            <Row type="horizontal">
                <Heading as="h1">Projects</Heading>

                <ProjectsActions />
            </Row>

            <Projects>
                <Menus>
                    {projects.map((project) => (
                        <ProjectItem project={project} key={project._id} />
                    ))}
                </Menus>
            </Projects>
        </StyledProjects>
    );
}

export default ProjectsDetail;
