import * as React from 'react';

interface SquareProps {
  squareId: number,
  shootResult: string,
  makeShoot: any
}

const Square: React.SFC<SquareProps> = ({
  squareId,
  shootResult,
  makeShoot
}) => {
  return (
    <button
      className="square"
      onClick={() => makeShoot(squareId)}
    >
      {shootResult}
    </button>
  );
}

export default Square;