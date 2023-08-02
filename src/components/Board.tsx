import styles from "./Board.module.css";
import { Square } from "./Square";

export const Board = () => {
  const light = "#F7FFF6";
  const dark = "#1FA187";
  const Ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  const Files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  return (
    <div class={styles.Board}>
      {Ranks.map((rank, rindex) => {
        return Files.map((file, findex) => (
          <Square name={`${file}${rank}`} shade={(rindex + findex) % 2 === 0 ? dark : light} />
        ));
      })}
    </div>
  );
};
