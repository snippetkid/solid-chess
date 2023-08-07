import { For, createSignal } from "solid-js";
import { ISquare } from "../models/interfaces";
import styles from "./Board.module.css";
import { Square } from "./Square";
import { getInitialPosition } from "../constants/initialPosition";

export const Board = () => {
  const light = "#fddeb2";
  const dark = "#df8456";
  const Ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  const Files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const initSquares = () => {
    const squares: ISquare[] = [];
    Ranks.forEach((rank, rindex) => {
      Files.forEach((file, findex) => {
        const square: ISquare = {
          name: `${file}${rank}`,
          shade: (rindex + findex) % 2 === 0 ? dark : light,
          piece: getInitialPosition(`${file}${rank}`)
        }
        squares.push(square);
      })
    });
    return squares;
  }

  const [squares, setSquares] = createSignal(initSquares());
  const [selectedSquare, setSelectedSquare] = createSignal<ISquare>();
  const moves = []
  const onSquareClick = (square: ISquare) => {

    if (selectedSquare()) {
      if (selectedSquare()?.name !== square.name) {

        const pieceToMove = selectedSquare()?.piece;
        const sqs = squares().map(sq => {
          if (sq.name === square.name) {
            return { ...sq, piece: pieceToMove };
          }

          if (sq.name === selectedSquare()?.name) {
            return { ...sq, piece: undefined };
          }
          return sq;
        });
        const squareToMove = sqs.find(sq => sq.name === square.name);
        const squareToEmpty = sqs.find(sq => sq.name === selectedSquare()?.name)
        const isCapture = !!squareToMove?.piece;
        if (squareToMove !== undefined) {
          squareToMove.piece = pieceToMove;
          squareToEmpty!.piece = undefined;
          setSquares(sqs);
        }
        console.log(`Moving ${selectedSquare()?.piece?.shade} ${selectedSquare()?.piece?.type} to ${square.name}`);
      }
      setSelectedSquare();
    }
    else {
      setSelectedSquare(square);
    }
  }

  return (
    <div class={styles.Board}>
      <For each={squares()}>
        {(square) => <Square name={square.name} shade={square.shade} piece={square.piece} onClick={() => onSquareClick(square)} />}
      </For>
    </div>
  );
};
