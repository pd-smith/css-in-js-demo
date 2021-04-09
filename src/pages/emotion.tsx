import React from 'react';
import GlobalStyles from 'src/components/emotion/GlobalStyles';
import Container from '../components/emotion/Container';

export default function Emotion() {
    return (
        <>
            <GlobalStyles/>
            <h1>emotion</h1>
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