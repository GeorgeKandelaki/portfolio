import styled from "styled-components";

import Row from "../ui/Row";
import Heading from "../ui/Heading";

const StyledAboutMe = styled.div``;

function AboutMe() {
    return (
        <StyledAboutMe>
            <Row>
                <Heading as="h1">About Me</Heading>
            </Row>
        </StyledAboutMe>
    );
}

export default AboutMe;
