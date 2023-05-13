import styled from "styled-components";

const ScoresList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const Scores = styled.div`
    width: 100px;
    border: 4px double #306230;
    background: #9BBC0F;
    padding: 1em;
    h4 {
        margin: 0;
        text-decoration: underline;
    }
`;

export {
    ScoresList,
    Scores,
};