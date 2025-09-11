import styled, { css } from "styled-components";

const sizes = {
    small: css`
        font-size: 1.2rem;
        padding: 0.4rem 0.8rem;
        text-transform: uppercase;
        font-weight: 600;
        text-align: center;
    `,
    medium: css`
        font-size: 1.4rem;
        padding: 1.2rem 1.6rem;
        font-weight: 500;
    `,
    large: css`
        font-size: 1.6rem;
        padding: 1.2rem 2.4rem;
        font-weight: 500;
    `,
};

const variations = {
    primary: css`
        background-color: var(--color-indigo-600);
        color: var(--color-grey-700);

        &:hover {
            background-color: var(--color-indigo-900);
        }
    `,
    secondary: css``,
    danger: css``,
};

const Button = styled.button`
    border: none;
    border-radius: var(--border-radius-sm);
    cursor: pointer;

    ${({ variation = "primary" }) => variations[variation || "primary"]}
    ${({ size = "medium" }) => sizes[size || "medium"]}
`;

export default Button;
