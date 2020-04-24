import * as React from 'react';
import Square from './square'

interface BattleFieldProps {
  currentFieldState: string[],
  makeShoot: any
  hits: number
}

const BattleField: React.SFC<BattleFieldProps> = ({
  hits,
  makeShoot,
  currentFieldState
}) => {

  let status: string = '';
  if (hits === 0) {
    status = 'Игра окончена.';
  } else {
    status = 'Потопите корабли компьютера. O - мимо, X - попал.'
  }

  function renderRows() {
    let id: number = 0;
    const rowsCount: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return rowsCount.map(function(value) {
      const n = id;
      id+=10;
      return <tr key={n}>{renderColumns(n)}</tr>
    });
  }

  function renderColumns(id: number) {
    const columnsCount: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return columnsCount.map(function() {
      const n = id;
      id++;
      return <td key={n}>{renderSquare(n)}</td>
    });
  }

  function renderSquare(id: number) {
    return (
      <Square
        squareId={id}
        makeShoot={makeShoot}
        shootResult={currentFieldState[id]}
      />
    );
  }

  return (
    <div>
      <div className="status">
        {status}
      </div>
      <div>
        <table>
          <tbody key="tbody">
            {renderRows()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BattleField;