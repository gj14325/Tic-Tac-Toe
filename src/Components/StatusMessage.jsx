const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);

  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          The Winner is{' '}
          <span className={isXNext ? 'text-orange' : 'text-green'}>
            {winner}
          </span>
        </>
      );
    }

    if (!winner && noMovesLeft) {
      return (
        <>
          Game Over! <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> Tied ! No winner!
        </>
      );
    }

    if (!winner && !noMovesLeft) {
      return (
        <>
          The Next PLayer is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }

    return null;
  };

  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
