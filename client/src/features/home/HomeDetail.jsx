import styled, { keyframes } from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import LinkButton from "../../ui/LinkButton";

// Animations
const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledHome = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 6rem 2.4rem 4rem;

    /* Center slightly above middle for perfect balance */
    transform: translateY(3vh);
`;

const Tagline = styled.p`
    font-size: 1.6rem;
    letter-spacing: 0.15rem;
    color: var(--color-grey-500);
    text-transform: uppercase;
    margin-bottom: 1.6rem;
    animation: ${fadeIn} 0.8s ease both;
`;

const NameHeading = styled(Heading)`
    font-size: 4.2rem;
    font-weight: 700;
    background: linear-gradient(90deg, var(--color-brand-600), var(--color-indigo-700), var(--color-brand-600));
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientMove} 6s ease infinite;
    letter-spacing: 1px;

    @media screen and (max-width: 50em) {
        font-size: 3.4rem;
    }
`;

const RoleHeading = styled(Heading)`
    font-size: 2.4rem;
    font-weight: 500;
    color: var(--color-grey-500);
    margin-top: 0.6rem;
    animation: ${fadeIn} 0.8s ease 0.3s both;
`;

const Description = styled.p`
    max-width: 60ch;
    margin: 2.4rem auto 0;
    font-size: 1.8rem;
    line-height: 1.7;
    color: var(--color-grey-600);
    animation: ${fadeIn} 0.8s ease 0.6s both;
`;

const ButtonGroup = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;
    animation: ${fadeIn} 0.8s ease 0.9s both;

    a {
        transition: all 0.3s ease;
        box-shadow: var(--shadow-md);

        &:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
        }
    }
`;

const ExtraSection = styled.div`
    margin-top: 6rem;
    animation: ${fadeIn} 0.8s ease 1.2s both;
    max-width: 80ch;
    color: var(--color-grey-600);

    h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.2rem;
        color: var(--color-grey-700);
    }

    p {
        font-size: 1.6rem;
        line-height: 1.6;
    }
`;

function HomeDetail() {
    return (
        <StyledHome>
            <Row>
                <Tagline>Passionate about building web experiences</Tagline>
                <NameHeading as="h1">Hello, I’m George Kandelaki</NameHeading>
                <RoleHeading as="h2">Full-Stack Web Developer</RoleHeading>
                <Description>
                    I design and build clean, performant, and intuitive digital experiences. My work blends strong
                    problem-solving, sharp design sense, and attention to detail — turning ideas into interactive,
                    meaningful products.
                </Description>
            </Row>

            <ButtonGroup>
                <LinkButton to="/projects">🚀 View Projects</LinkButton>
                <LinkButton to="/skills">🧠 Explore Skills</LinkButton>
            </ButtonGroup>

            <ExtraSection>
                <h3>What I Do</h3>
                <p>
                    From crafting front-end interfaces that feel effortless, to designing robust back-end logic that
                    scales — I focus on building user-centric, maintainable systems. Whether it’s a startup MVP or a
                    polished production app, I build with clarity and purpose.
                </p>
            </ExtraSection>
        </StyledHome>
    );
}

export default HomeDetail;
