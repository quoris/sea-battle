const WATER = 'O';
export const SHIP_PART = 'X';

let fourDeckShipPossiblePlacements: number[][] = new Array<Array<number>>();
let threeDeckShipPossiblePlacements: number[][] = new Array<Array<number>>();
let twoDeckShipPossiblePlacements: number[][] = new Array<Array<number>>();
let oneDeckShipPossiblePlacements: number[] = new Array<number>();

function fillFourDeckShipPossiblePlacements() {
  let pos: number = 0;
  
  for (let i:number = 0; i < 20; i++){
    if (pos === 8 || pos === 9) pos = 10;
    if (pos === 18 || pos === 19) pos = 20;
    if (pos === 28 || pos === 29) pos = 30;
    if (pos === 38 || pos === 39) pos = 40;
    if (pos === 48 || pos === 49) pos = 50;
    if (pos === 58 || pos === 59) pos = 60;
    if (pos === 68 || pos === 69) pos = 70;
    if (pos === 78 || pos === 79) pos = 80;
    if (pos === 88 || pos === 89) pos = 90;
    if (pos === 98 || pos === 99) break;

    let placement: number[] = new Array(4) as Array<number>;
    for(let j:number = 0; j < 4; j++){
      placement[j] = pos;
      pos++;
    }
    fourDeckShipPossiblePlacements[i] = placement;
  }
}

function fillThreeDeckShipPossiblePlacements() {
  let pos: number = 0;
  
  for (let i:number = 0; i < 30; i++){
    if (pos === 9) pos = 10;
    if (pos === 19) pos = 20;
    if (pos === 29) pos = 30;
    if (pos === 39) pos = 40;
    if (pos === 49) pos = 50;
    if (pos === 59) pos = 60;
    if (pos === 69) pos = 70;
    if (pos === 79) pos = 80;
    if (pos === 89) pos = 90;
    if (pos === 99) break;
    
    let placement: number[] = new Array(3) as Array<number>;
    for(let j:number = 0; j < 3; j++){
      placement[j] = pos;
      pos++;
    }
    threeDeckShipPossiblePlacements[i] = placement;
  }
}

function fillTwoDeckShipPossiblePlacements() {
  let pos: number = 0;
  for (let i:number = 0; i < 50; i++){
    
    let placement: number[] = new Array(2) as Array<number>;
    for(let j:number = 0; j < 2; j++){
      placement[j] = pos;
      pos++;
    }

    twoDeckShipPossiblePlacements[i] = placement;
  }
}

function fillOneDeckShipPossiblePlacements() {
  for (let i: number = 0; i < 100; i++){
    oneDeckShipPossiblePlacements[i] = i;
  }
}

export let shipsPlacement: string[] = new Array(100).fill(WATER) as Array<string>;

export function generateBattlefield() {
  
  // рассчитываются возможные расположения всех кораблей
  fillFourDeckShipPossiblePlacements();
  fillThreeDeckShipPossiblePlacements();
  fillTwoDeckShipPossiblePlacements();
  fillOneDeckShipPossiblePlacements();

  // 1 раз размещается 4х палубный корабль
  let isFourDeckShipPlaced: boolean = false;

  while (!isFourDeckShipPlaced) {
    const number = getRandomPlacement(0, 20);
    const placement = fourDeckShipPossiblePlacements[number];

    if (shipsPlacement[placement[0]] === WATER && shipsPlacement[placement[1]] === WATER && shipsPlacement[placement[2]] === WATER && shipsPlacement[placement[3]] === WATER) {
      for(let i: number = 0; i < placement.length; i++) {
        shipsPlacement[placement[i]] = SHIP_PART;
      }
      isFourDeckShipPlaced = true;
    }
  }

  // 2 раза размещается 3х палубный корабль
  for (let count: number = 0; count < 2; count++) {
    let isThreeDeckShipPlaced = false;

    while (!isThreeDeckShipPlaced) {
      const number = getRandomPlacement(0, 30);
      const placement = threeDeckShipPossiblePlacements[number];

      if (shipsPlacement[placement[0]] === WATER && shipsPlacement[placement[1]] === WATER && shipsPlacement[placement[2]] === WATER) {
        for(let i: number = 0; i < placement.length; i++) {
          shipsPlacement[placement[i]] = SHIP_PART;
        }
        isThreeDeckShipPlaced = true;
      }
    }
  }

  // 3 раза размещается 2х палубный корабль
  for (let count: number = 0; count < 3; count++) {
    let isTwoDeckShipPlaced = false;

    while (!isTwoDeckShipPlaced) {
      const number = getRandomPlacement(0, 50);
      const placement = twoDeckShipPossiblePlacements[number];

      if (shipsPlacement[placement[0]] === WATER && shipsPlacement[placement[1]] === WATER) {
        for(let i: number = 0; i < placement.length; i++) {
          shipsPlacement[placement[i]] = SHIP_PART;
        }
        isTwoDeckShipPlaced = true;
      }
    }
  }

  // 4 раза размещается 1 палубный корабль
  for (let count: number = 0; count < 4; count++) {
    let isOneDeckShipPlaced = false;

    while (!isOneDeckShipPlaced) {
      const number = getRandomPlacement(0, 100);
      const placement = oneDeckShipPossiblePlacements[number];

      if (shipsPlacement[placement] === WATER) {
        shipsPlacement[placement] = SHIP_PART;
        isOneDeckShipPlaced = true;
      }
    }
  }
}

function getRandomPlacement(max: number, min: number) {
  return Math.floor(
    Math.random() * (max - min) + min
  )
}