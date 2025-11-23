import styled from "styled-components";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

const StyledAboutMe = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 90rem;
    margin: 0 auto;
    padding: 6rem 2rem;
    line-height: 1.8;
    color: var(--color-grey-700);
`;

const IntroText = styled.p`
    font-size: 1.8rem;
    color: var(--color-grey-600);
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const SkillCategory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SkillTitle = styled.h3`
    font-size: 2rem;
    color: var(--color-brand-700);
`;

const SkillList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const Skill = styled.li`
    background-color: var(--color-brand-100);
    color: var(--color-brand-800);
    padding: 0.8rem 1.6rem;
    border-radius: var(--border-radius-md);
    font-weight: 500;
    font-size: 1.5rem;
`;

const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const Experience = styled.div`
    background-color: var(--color-grey-100);
    border-left: 4px solid var(--color-brand-600);
    padding: 1.6rem 2rem;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
`;

const ExpTitle = styled.h4`
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-brand-700);
`;

const ExpTime = styled.span`
    font-size: 1.4rem;
    color: var(--color-grey-500);
`;

const ExpDescription = styled.p`
    font-size: 1.5rem;
    color: var(--color-grey-600);
`;

function AboutMe() {
    return (
        <StyledAboutMe>
            <Row>
                <Heading as="h1">About Me</Heading>
            </Row>

            <IntroText>
                I’m a software developer who loves building things from the ground up — whether it’s a clean front-end
                interface or a full-stack application that actually scales. I focus on writing code that’s clear,
                efficient, and easy to maintain. JavaScript is my main playground, and I’m always digging into how
                things work behind the scenes — from how browsers render pages to how servers handle requests.
            </IntroText>

            <SkillsContainer>
                <SkillCategory>
                    <SkillTitle>Core Skills</SkillTitle>
                    <SkillList>
                        <Skill>JavaScript (ES6+)</Skill>
                        <Skill>HTML5</Skill>
                        <Skill>CSS3 / SCSS</Skill>
                        <Skill>React</Skill>
                        <Skill>Node.js</Skill>
                        <Skill>Express</Skill>
                        <Skill>REST APIs</Skill>
                        <Skill>MongoDB</Skill>
                        <Skill>SQL</Skill>
                    </SkillList>
                </SkillCategory>

                <SkillCategory>
                    <SkillTitle>Other Tools & Concepts</SkillTitle>
                    <SkillList>
                        <Skill>Git & GitHub</Skill>
                        <Skill>Styled-Components</Skill>
                        <Skill>Authentication / JWT</Skill>
                        <Skill>Performance Optimization</Skill>
                        <Skill>Clean Code / DRY Principles</Skill>
                        <Skill>Data Structures & Algorithms</Skill>
                        <Skill>Problem Solving</Skill>
                    </SkillList>
                </SkillCategory>
            </SkillsContainer>

            <ExperienceContainer>
                <Heading as="h2">Experience</Heading>

                <Experience>
                    <ExpTitle>Medical Hackathon Winner — PillMe</ExpTitle>
                    <ExpTime>2025, November 7</ExpTime>
                    <ExpDescription>
                        Participated in a team of 4 at AlteUniversity and WON the Medical Hackathon. Built the entire
                        frontend independently, fully handling UI, state management, and API communication. The project,
                        PillMe, reminded users when to take their pills and included an AI assistant with lip-syncing
                        and an interactive talking avatar capable of giving medical advice and pill-related guidance.
                    </ExpDescription>
                </Experience>

                <Experience>
                    <ExpTitle>DigieduHack 2025 — MEMO (Solo Developer)</ExpTitle>
                    <ExpTime>2025, November 16</ExpTime>
                    <ExpDescription>
                        Competed at DigieduHack 2025, building MEMO — an app designed for students struggling to focus
                        during lectures. Users could record their lectures and ask an AI assistant with lip-syncing and
                        an interactive talking avatar for summaries and explanations. Developed the entire project
                        independently, demonstrating strong problem-solving, autonomy, and end-to-end execution.
                    </ExpDescription>
                </Experience>

                <Experience>
                    <ExpTitle>Personal Full-Stack Projects</ExpTitle>
                    <ExpTime>2023 – Present</ExpTime>
                    <ExpDescription>
                        Developed multiple end-to-end applications, including a task management app similar to Jira
                        (with user authentication, cookies, and CRUD functionality). Focused on writing reusable, DRY,
                        and well-structured JavaScript that reflects real-world scalability.
                    </ExpDescription>
                </Experience>

                <Experience>
                    <ExpTitle>Independent Front-End Developer</ExpTitle>
                    <ExpTime>2022 – 2023</ExpTime>
                    <ExpDescription>
                        Built responsive and accessible web interfaces using React, modern CSS, and reusable UI
                        components. Learned deep fundamentals of how the browser renders and how JS engines handle DOM
                        updates for optimal performance.
                    </ExpDescription>
                </Experience>
            </ExperienceContainer>
        </StyledAboutMe>
    );
}

export default AboutMe;
