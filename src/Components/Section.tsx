import React from "react";
import styled from "styled-components";
import { customMedia } from "./GlobalStyles";

const Container = styled.div`
    margin-top: 10px;
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 25px;

    ${customMedia.lessThan('mobile')`
        margin-top: 15px;
    `}
`;

interface Props {
    title?: string,
    children: React.ReactNode
}

const Section: React.FunctionComponent<Props> = ({ title, children }) => (
    <Container>
        {title && (
            <Title>{title}</Title>
        )}
        <Grid>{children}</Grid>
    </Container>
);

export default Section;