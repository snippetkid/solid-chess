import styles from "./Board.module.css";
import { Square } from "./Square";

export const Board = () => {
  const light = "#FDDEB2";
  const dark = "#DF8456";
  const Ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  const Files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  return (
    <div class={styles.Board}>
      {Ranks.map((r, rindex) => {
        return Files.map((f, findex) => (
          <Square color={(rindex + findex) % 2 === 0 ? light : dark} />
        ));
      })}
    </div>
  );
};
