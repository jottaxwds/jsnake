import updateSnakeBoard, { resetGameState, isGameOver, generateNewFruit, isGoingBackwards, defaultGameState } from "..";
import { Direction, GameState } from "../types";

describe('Snake engine', () => {
    let gameState: GameState;
    beforeEach(() => {
      // Set up the initial game state before each test
      gameState = {
        isGameOver: false,
        scores: [],
        score: 0,
        snake: {
          body: [[0, 0]],
          direction: Direction.RIGHT,
        },
        boardSize: 10,
        fruit: [3, 0],
      };
    });
    describe('UpdateSnakeBoard -> ', () => {
        test('Updates snake direction correctly if new one is not backwards', () => {
          const newGameState = updateSnakeBoard(gameState, Direction.DOWN);
          expect(newGameState.snake.direction).toEqual(Direction.DOWN);
        });
      
        test('Should keep snake prev.direction correctly if new one is backwards', () => {
          const newGameState = updateSnakeBoard(gameState, Direction.LEFT);
          expect(newGameState.snake.direction).toEqual(Direction.RIGHT);
        });
      
        test('Should moves snake body correctly if new direction is not backwards', () => {
          const newGameState = updateSnakeBoard(gameState, Direction.DOWN);
          expect(newGameState.snake.body).toEqual([ [ 0, 1 ] ]);
        });
    
        test('Should move snake to prev.direction from snake if new one is backwards', () => {
            const newGameState = updateSnakeBoard(gameState, Direction.LEFT);
            expect(newGameState.snake.body).toEqual([ [ 1, 0 ] ]);
        })
      
        test('increments score when snake eats fruit', () => {
          gameState.snake.body = [[2, 0], [1, 0]];
          const newGameState = updateSnakeBoard(gameState, Direction.RIGHT);
          expect(newGameState.score).toBe(gameState.score + 1);
        });
      
        test('Should set isGameOver to true if snake eats itself', () => {
          gameState.fruit = [9, 9];
          gameState.snake.body = [[3, 1],[4, 1],[4, 0], [3, 0], [2, 0], [1, 0]];
          gameState.snake.direction = Direction.LEFT;
          const newGameState = updateSnakeBoard(gameState, Direction.UP);
          expect(newGameState.isGameOver).toBeTruthy();
        });
    
        test('Should generates a new fruit each time snake eats it', () => {
            gameState.fruit = [1,0];
            const { fruit: newFruit } = updateSnakeBoard(gameState, Direction.RIGHT);
            expect(newFruit !== gameState.fruit).toBeTruthy();
        });
    });
    describe('Reset ->', () => {
        test('Should reset game state', () => {
            const newGameState = resetGameState(gameState);
            expect(newGameState).toEqual({ 
                ...defaultGameState,
                scores: gameState.scores,
            });
        });
    });
});
