import { Chess, Square } from "chess.js";
import { Board } from "./Board";
import { IPiece, ISquare } from "../models/interfaces";
import { createSignal } from "solid-js";

export const Game = () => {
  const [game] = createSignal(new Chess());
  const [moves, setMoves] = createSignal(game().history());
  const isNewGame = moves().length === 0;

  const Ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  const Files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const initBoard = () => {
    const squares: ISquare[] = [];
    Ranks.forEach((rank, rindex) => {
      Files.forEach((file, findex) => {
        const square: ISquare = {
          name: `${file}${rank}`,
          shade: (rindex + findex) % 2 === 0 ? "d" : "l",
        };
        squares.push(square);
      });
    });
    return squares;
  };

  const getPiece = (square: string) => {
    const pieceInfo = game().get(square as Square);
    const shade = pieceInfo.color === "b" ? "d" : "l";
    const type = pieceInfo.type;
    return { shade, type } as IPiece;
  };

  const onMove = (move: string) => {
    const { san } = game().move("e4");
    setMoves(game().history());
    game().move("Nf6");
    console.log(game().ascii());
  };

  return <Board game={game()} onMove={(move) => onMove(move)} squares={initBoard()} />;
};
