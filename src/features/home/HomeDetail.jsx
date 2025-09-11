import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import LinkButton from "../../ui/LinkButton";

const StyledHome = styled.div`
    padding: 2.4rem 0;
    align-items: center;

    text-align: center;
`;

const ButtonGroup = styled.div`
    margin: 3.2rem 0 0 0;

    display: flex;
    justify-content: center;
    gap: 2.4rem;
`;

const Description = styled.p``;

function HomeDetail() {
    return (
        <StyledHome>
            <Row>
                <Heading as="h1">Hello, I'm George Kandelaki</Heading>
                <Heading as="h2">Full-Stack Web Developer</Heading>

                <Description>
                    Hi, I’m George — a developer who focuses on building clean, practical, and scalable solutions. I
                    care about clarity, performance, and creating work that not only functions well but also feels
                    professional and intuitive. Always learning, always improving.
                </Description>
            </Row>

            <ButtonGroup>
                <LinkButton to="/projects">Visit Projects</LinkButton>
                <LinkButton to="/skills">Visit Skills</LinkButton>
            </ButtonGroup>
        </StyledHome>
    );
}

export default HomeDetail;
