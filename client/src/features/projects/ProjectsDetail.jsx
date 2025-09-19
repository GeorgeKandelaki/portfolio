import styled from "styled-components";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ProjectsActions from "./ProjectsActions";

const StyledProjects = styled.div``;

const Projects = styled.div``;

function ProjectsDetail() {
    return (
        <StyledProjects>
            <Row type="horizontal">
                <Heading as="h1">Projects</Heading>

                <ProjectsActions />
            </Row>

            <Projects></Projects>
        </StyledProjects>
    );
}

export default ProjectsDetail;
