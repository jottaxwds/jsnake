import React from 'react';
import updateSnakeBoard, { defaultGameState, resetGameState } from './engine';
import useInterval from './hooks/useInterval';
import useArrowKeys from './hooks/useArrowKeys';
import * as S from './styles';
import { GameState } from './engine/types';
import GameOverPopUp from './components/GameOverPopUp/GameOverPopUp';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

const GameBoard = () => {
    const { arrowDirection } = useArrowKeys();
    const [gameState, setGameState] = React.useState<GameState>(defaultGameState);

    useInterval(() => {
        if (gameState.isGameOver) {
            return;
        }
        const newGameState = updateSnakeBoard(gameState, arrowDirection || gameState.snake.direction);
        setGameState(newGameState);
    }, 50);

    const reset = () => {
        setGameState(resetGameState(gameState));
    }

    const isSnake = (col: number, row: number) => gameState.snake.body.some((dot) => col === dot[0] && row === dot[1]);
    const isFruit = (col: number, row: number) => col === gameState.fruit[0] && row === gameState.fruit[1];
    const isFilled = (col: number, row: number) => isSnake(col, row) || isFruit(col, row);

    const getRow = (rowIndex :number) => ([...Array(gameState.boardSize)].map((val, colIndex) => {
        return <S.Cell key={`r${rowIndex}-c${colIndex}`} data-row={rowIndex} data-col={colIndex} filled={isFilled(colIndex, rowIndex)} />
    }));

    return <>
        <S.Main>
            <S.HowTo>(Use arrow keys to play!)</S.HowTo>
            <S.Score>Your score: {gameState.score}</S.Score>
            <S.Container>
                { gameState.isGameOver ?  <GameOverPopUp onReset={reset} /> : 
                <>
                    <S.Game>
                        <S.BoardWrapper area={gameState.boardSize}>
                            {[...Array(gameState.boardSize)].map((val, index) => getRow(index))}
                        </S.BoardWrapper>
                    </S.Game>
                    <ScoreBoard scores={gameState.scores} />
                </>
                }
                
            </S.Container>
        </S.Main>
    </>
};

export default GameBoard;