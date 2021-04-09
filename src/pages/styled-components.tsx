import React from 'react';
import GlobalStyles from '../components/styled-components/GlobalStyles';
import { Container } from '../components/styled-components/Container';

export default function StyledComponents() {
    return (
        <>
            <GlobalStyles/>
            <h1>styled-components</h1>
            <Container padding="huge" stack="huge">
                Hello World
            </Container>
            <Container padding="large" stack="large">
                Hello World
            </Container>
            <Container padding="medium" stack="medium">
                Hello World
            </Container>
            <Container padding="small" stack="small">
                Hello World
            </Container>
            <Container padding="none" stack="none">
                Hello World
            </Container>
        </>
    )
}
