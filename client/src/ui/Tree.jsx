import styled from "styled-components";

// Styled components using your brand palette
const StyledTree = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    grid-row-gap: 6.4rem; // space between levels

    margin-top: 4.8rem;
`;

const NodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const ChildrenRow = styled.div`
    display: flex;
    gap: 3.2rem; /* space between sibling nodes */
    margin-top: 1.2rem;
`;

const Node = styled.div`
    padding: 1.2rem 2rem;
    background-color: var(--color-brand-600);
    border-radius: var(--border-radius-md);
    width: 13.5rem;
    text-align: center;
    box-shadow: var(--shadow-sm);
    transition: background-color 0.3s, color 0.3s;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: var(--color-brand-700);
        color: var(--color-grey-0);
    }
`;

// Utility function to check if an object is empty
function isEmpty(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) return false;
    }
    return true;
}

/**
 * TreeRenderer
 * Encapsulates all recursion and rendering logic
 */
function TreeRenderer({ node }) {
    if (isEmpty(node)) return null;

    // Get all topics at this level
    const topics = Object.values(node);

    // Render each topic with its children
    const renderedTopics = topics.map((topic) => {
        let children = null;

        if (!isEmpty(topic.subtopics)) {
            children = (
                <ChildrenRow>
                    <TreeRenderer node={topic.subtopics} />
                </ChildrenRow>
            );
        }

        return (
            <NodeContainer key={topic.name}>
                <Node>{topic.name}</Node>
                {children}
            </NodeContainer>
        );
    });

    return renderedTopics;
}

/**
 * Tree component
 * Clean interface: pass the data and it handles everything
 */
export default function Tree({ data }) {
    return (
        <StyledTree>
            <TreeRenderer node={data} />
        </StyledTree>
    );
}
