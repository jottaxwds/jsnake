import * as S from './styles';

const ScoreBoard = ({ scores }: { scores: number[]}) => (
    <S.Scores>
        <h4>Top 10:</h4>
        <S.ScoresList>
            {
                [...scores.sort((a, b) => b-a)].map((sc, index) => index <= 9 ? <li>{ sc }</li>: null)
            }
        </S.ScoresList>
    </S.Scores>
);

export default ScoreBoard;