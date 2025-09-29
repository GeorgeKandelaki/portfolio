import styled from "styled-components";

import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

import CreateProjectForm from "./CreateProjectForm";

import { useUser } from "../../context/userContext";

const StyledProjectsActions = styled.div`
    display: flex;
    gap: 1rem;
`;

function ProjectsActions() {
    const { isAuthenticated } = useUser();

    return (
        <StyledProjectsActions>
            {isAuthenticated && (
                <Modal>
                    <Modal.Open opens="projectForm">
                        <Button>Create Project</Button>
                    </Modal.Open>

                    <Modal.Window name="projectForm">
                        <CreateProjectForm />
                    </Modal.Window>
                </Modal>
            )}

            <Filter
                filterField="difficulty"
                options={[
                    {
                        label: "All",
                        value: "all",
                    },
                    {
                        label: "Newbie",
                        value: 0,
                    },
                    {
                        label: "Junior",
                        value: 1,
                    },
                    {
                        label: "Intermediate",
                        value: 2,
                    },
                    {
                        label: "Advanced",
                        value: 3,
                    },
                    {
                        label: "Guru",
                        value: 4,
                    },
                ]}
            />

            <SortBy
                options={[
                    {
                        label: "Sort By Difficulty (Easy First)",
                        value: "difficulty-easy",
                    },
                    {
                        label: "Sort By Difficulty (Hard First)",
                        value: "difficulty-hard",
                    },
                ]}
            />
        </StyledProjectsActions>
    );
}

export default ProjectsActions;
