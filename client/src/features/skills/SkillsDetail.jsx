import styled from "styled-components";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tree from "../../ui/Tree";

const skills = {
    languages: {
        name: "Languages",
        desc: "nothing for now",
        subtopics: {
            python: {
                name: "Python",
                desc: "nothing for now",
                subtopics: {},
            },
            javascript: {
                name: "JavaScript",
                desc: "nothing for now",
                subtopics: {},
            },
            nodejs: {
                name: "NodeJS",
                desc: "nothing for now",
                subtopics: {},
            },
        },
    },

    frontend: {
        name: "Frontend",
        desc: "nothing for now",
        subtopics: {
            html: {
                name: "HTML",
                desc: "nothing for now",
                subtopics: {},
            },
            css: {
                name: "CSS",
                desc: "nothing for now",
                subtopics: {
                    scss: {
                        name: "SCSS",
                        desc: "nothing for now",
                        subtopics: {},
                    },
                },
            },
            react: {
                name: "React",
                desc: "nothing for now",
                subtopics: {},
            },
        },
    },
    backend: {
        name: "Backend",
        desc: "nothing for now",
        subtopics: {
            express: {
                name: "ExpressJS",
                desc: "nothing for now",
                subtopics: {},
            },
            flask: {
                name: "Flask",
                desc: "nothing for now",
                subtopics: {},
            },
        },
    },

    databases: {
        name: "Databases",
        desc: "nothing for now",
        subtopics: {
            sql: {
                name: "SQL",
                desc: "nothing for now",
                subtopics: {},
            },
            mongodb: {
                name: "MongoDB",
                desc: "nothing for now",
                subtopics: {},
            },
        },
    },
};

const StyledSkillsDetail = styled.div``;

function SkillsDetail() {
    return (
        <StyledSkillsDetail>
            <Row>
                <Heading as="h1">Skill Tree</Heading>
            </Row>
            <Row>
                <Tree data={skills} />
            </Row>
        </StyledSkillsDetail>
    );
}

export default SkillsDetail;
