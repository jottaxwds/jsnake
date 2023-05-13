import * as S from './styles';

const GameOverPopUp = ({ onReset }: { onReset: () => void }) => (
    <S.GameOver>
        <h2>You loose!</h2>
        <S.ResetButton onClick={() => onReset()}>Retry</S.ResetButton>
    </S.GameOver>
);

export default GameOverPopUp;