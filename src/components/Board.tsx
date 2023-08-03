import { For, createSignal } from "solid-js";
import { ISquare } from "../models/interfaces";
import styles from "./Board.module.css";
import { Square } from "./Square";

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
          shade: (rindex + findex) % 2 === 0 ? dark : light
        }
        squares.push(square);
      })
    });
    return squares;
  }

  const [squares, setSquares] = createSignal(initSquares())

  const moves = []

  const onSquareClick = () => {

  }

  return (
    <div class={styles.Board}>
      <For each={squares()}>
        {(square) => <Square name={square.name} shade={square.shade} onClick={() => console.log(square.name)} />}
      </For>
    </div>
  );
};
