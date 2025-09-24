import styled from "styled-components";

import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

const StyledProjectItem = styled.div`
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-md);
    overflow: hidden;
    background-color: var(--color-grey-0);

    display: flex;
    flex-direction: column; /* stack image/info/buttons */
`;

const StyledProjectInfo = styled.div`
    padding: 0 1.8rem;
    flex-grow: 1; /* pushes buttons to bottom */
    & p {
        font-size: 1.4rem;
    }
`;

const StyledButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.4rem 1.8rem 1.8rem;
`;

const StyledImageContainer = styled.div`
    width: 100%;
    height: 20rem;
    flex-shrink: 0; /* Prevents image from shrinking */

    & img {
        height: 100%;
        width: 100%;
        object-fit: cover; /* use cover for proper scaling */
    }
`;
function ProjectItem({ project }) {
    return (
        <StyledProjectItem>
            <StyledImageContainer style={{ marginBottom: "1.8rem" }}>
                <img src={project.screenshot} alt={`Image of the Project #${project._id}`} />
            </StyledImageContainer>

            <StyledProjectInfo>
                <Heading as="h3">{project.title}</Heading>
                <p>{project.description}</p>
            </StyledProjectInfo>

            <StyledButtonGroup>
                <Button onClick={() => window.location.assign(project.repoURL)}>Code</Button>
                <Button onClick={() => window.location.assign(project.liveURL)}>Live</Button>
            </StyledButtonGroup>
        </StyledProjectItem>
    );
}

export default ProjectItem;
