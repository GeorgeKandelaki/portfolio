import styled from "styled-components";

import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const StyledProjectItem = styled.div`
    max-width: 35rem;
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-md);
    overflow: hidden;
    background-color: var(--color-grey-0);
`;

const StyledProjectInfo = styled.div`
    padding: 0 1.8rem;
`;

const StyledButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.4rem 1.8rem;
`;

function ProjectItem({ project }) {
    return (
        <StyledProjectItem>
            <div style={{ marginBottom: "1.8rem" }}>
                <img src={project.image} alt={`Image of the Project #${project.id}`} />
            </div>

            <StyledProjectInfo>
                <Heading as="h3">{project.name}</Heading>
                <p>{project.description}</p>
            </StyledProjectInfo>

            <StyledButtonGroup>
                <Button onClick={() => window.location.assign(project.githubLink)}>Code</Button>
                <Button onClick={() => window.location.assign(project.liveLink)}>Live</Button>
            </StyledButtonGroup>
        </StyledProjectItem>
    );
}

export default ProjectItem;
