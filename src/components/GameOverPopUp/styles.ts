import styled from "styled-components";

const GameOver = styled.div`
    padding: 3.22rem;
    border: 4px double #0F380F;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #9BBC0F;
`;

const ResetButton = styled.button`
    border: 3px solid #306230;
    background: none;
    cursor: pointer;
    &:active {
        border-style: inset;
        border-color: #0F380F;
    }
`;

export {
    GameOver,
    ResetButton,
}