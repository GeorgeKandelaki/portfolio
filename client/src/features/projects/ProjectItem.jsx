import styled from "styled-components";

import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateProjectForm from "./CreateProjectForm";

import { useUser } from "../../context/userContext";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useProjects } from "../../context/ProjectsContext";

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
    margin: 2.5rem 1.8rem;
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

const URL = "http://localhost:4000/static/images/projects";

function ProjectItem({ project }) {
    const { isAuthenticated } = useUser();
    const { isLoading, deleteProject } = useProjects();
    const imagePath = project.screenshot.includes("cloudinary")
        ? project.screenshot
        : `${URL}/${project.screenshot}` || null;

    return (
        <StyledProjectItem>
            <StyledImageContainer style={{ marginBottom: "1.8rem" }}>
                <img src={imagePath} alt={`Image of the Project #${project._id}`} />
            </StyledImageContainer>

            <StyledProjectInfo>
                {isAuthenticated && (
                    <Modal>
                        <Menus.Menu>
                            <Menus.Toggle id={project._id}></Menus.Toggle>

                            <Menus.List id={project._id}>
                                <Modal.Open opens="edit">
                                    <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                                </Modal.Open>
                                <Modal.Open opens="delete">
                                    <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                                </Modal.Open>
                            </Menus.List>

                            <Modal.Window name="edit">
                                <CreateProjectForm projectToEdit={project} />
                            </Modal.Window>
                            <Modal.Window name="delete">
                                <ConfirmDelete
                                    resourceName="Project"
                                    onConfirm={() => deleteProject(project._id)}
                                    disabled={isLoading}
                                />
                            </Modal.Window>
                        </Menus.Menu>
                    </Modal>
                )}

                <Heading as="h3">{project.title}</Heading>
                <p>{project.description}</p>
            </StyledProjectInfo>

            <StyledButtonGroup>
                <Button onClick={() => window.open(project.repoURL, "_blank").focus()}>Code</Button>
                <Button onClick={() => window.open(project.liveURL, "_blank").focus()}>Live</Button>
            </StyledButtonGroup>
        </StyledProjectItem>
    );
}

export default ProjectItem;
