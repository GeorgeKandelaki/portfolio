import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    & p {
        color: var(--color-grey-500);
        margin-bottom: 1.2rem;
    }

    & div {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
`;

function ConfirmDelete({ resourceName, onCloseModal, onConfirm, disabled: isLoading }) {
    return (
        <StyledConfirmDelete>
            <Heading as="h2">Delete {resourceName}</Heading>
            <p>Are you sure you want to delete this {resourceName} permanently? This action cannot be undone.</p>

            <div>
                <Button variation="secondary" disabled={isLoading} onClick={onCloseModal}>
                    Cancel
                </Button>
                <Button variation="danger" onClick={onConfirm}>
                    Confirm
                </Button>
            </div>
        </StyledConfirmDelete>
    );
}

export default ConfirmDelete;
