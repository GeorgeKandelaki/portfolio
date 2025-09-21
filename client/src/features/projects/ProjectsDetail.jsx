import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ProjectsActions from "./ProjectsActions";
import ProjectItem from "./ProjectItem";
import { useEffect } from "react";
import { useProjects } from "../../context/ProjectsContext";

const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

const Projects = styled.div`
    display: flex;
    gap: 3.2rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

function ProjectsDetail() {
    const { getProjects, projects, isLoading } = useProjects();

    useEffect(
        function () {
            console.log(getProjects());
        },
        [getProjects]
    );

    if (isLoading) return <Spinner />;

    return (
        <StyledProjects>
            <Row type="horizontal">
                <Heading as="h1">Projects</Heading>

                <ProjectsActions />
            </Row>

            <Projects>
                {projects.map((project) => (
                    <ProjectItem project={project} key={project.id} />
                ))}
            </Projects>
        </StyledProjects>
    );
}

export default ProjectsDetail;
