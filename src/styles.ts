import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const BoardWrapper = styled.div<{ area: number; }>`
    display: grid;
    margin: auto;
    background: #9BBC0F;
    width: max-content;
    border: 0.01px solid #306230;
    grid-template-columns: repeat(${({ area }) => `${area}`}, 1fr);
    grid-template-rows: repeat(${({ area }) => `${area}`}, 1fr);
`;

const Cell = styled.div<{ filled?: boolean; }>`
    width: 0.5em;
    height: 0.5em;
    border: 0.01px solid #306230;
    ${({ filled = false }) => filled ? `background-color: #0F380F;` : ``}
`;

const Game = styled.div`
    flex: 1;
`;

const Heading = styled.header`
    text-align: center;
`;

const HowTo = styled.h2`
    font-size: 12px;
    margin-top: 0;
    font-style: italic;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justyfy-content: center;
    align-items: center;
`;

const Score = styled.h3`
    width: 100%;
    text-align: center;
`;

export {
    BoardWrapper,
    Container,
    Cell,
    Game,
    Heading,
    HowTo,
    Main,
    Score,
}