import { For, createSignal, onCleanup } from "solid-js";
import { IPiece, ISquare } from "../models/interfaces";
import styles from "./Board.module.css";
import { Square } from "./Square";
import { Chess, Square as Sq } from "chess.js";

interface Props {
  squares: ISquare[];
  onMove: (move: string) => void;
  game: Chess;
}
export const Board = ({ onMove, game }: Props) => {
  const light = "#fddeb2";
  const dark = "#df8456";
  const Ranks = [1, 2, 3, 4, 5, 6, 7, 8];
  const Files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const getPiece = (squareName: string) => {
    const sq = game.get(squareName as Sq);
    const shade = sq.color === "b" ? "d" : "l";
    const type = sq.type;
    return { shade, type } as IPiece;
  };

  const timer = setInterval(() => {
    if (!game.isGameOver()) moveRandom();
  }, 1000);
  onCleanup(() => clearInterval(timer));
  const initSquares = () => {
    const squares: ISquare[] = [];
    Ranks.forEach((rank, rindex) => {
      Files.forEach((file, findex) => {
        const square: ISquare = {
          name: `${file}${rank}`,
          shade: (rindex + findex) % 2 === 0 ? "d" : "l",
          piece: getPiece(`${file}${rank}`),
        };
        squares.push(square);
      });
    });
    return squares;
  };
  const [squares, setSquares] = createSignal(initSquares());
  const [isSelected, setIsSelected] = createSignal(false);
  const [selectedSquare, setSelectedSquare] = createSignal<ISquare>();

  const moveRandom = () => {
    const moves = game.moves();
    const move = moves[Math.floor(Math.random() * moves.length)];
    const playedMove = game.move(move);
    console.log(playedMove);
    movePieceOnBoard(playedMove.from, playedMove.to);
  };

  const movePieceOnBoard = (from: string, to: string) => {
    const sqs = squares().map((sq) => {
      if (sq.name === to) {
        return { ...sq, piece: getPiece(to) };
      }
      if (sq.name === from) {
        return { ...sq, piece: undefined };
      }
      return sq;
    });
    setSquares(sqs);
  };

  const onSquareClick = (square: ISquare) => {
    const selected = selectedSquare();

    if (selectedSquare()) {
      if (selectedSquare()?.name !== square.name) {
        const pieceToMove = selectedSquare()?.piece;
        const availableMoves = game.moves({
          square: selectedSquare()?.name as Sq,
        });
        const sqs = squares().map((sq) => {
          if (sq.name === square.name) {
            return { ...sq, piece: pieceToMove };
          }

          if (sq.name === selectedSquare()?.name) {
            return { ...sq, piece: undefined };
          }
          return sq;
        });
        const squareToMove = sqs.find((sq) => sq.name === square.name);
        const squareToEmpty = sqs.find(
          (sq) => sq.name === selectedSquare()?.name
        );
        const isCapture = !!squareToMove?.piece;
        if (squareToMove !== undefined) {
          squareToMove.piece = pieceToMove;
          squareToEmpty!.piece = undefined;
          setSquares(sqs);
        }
        console.log(
          `Moving ${selectedSquare()?.piece?.shade} ${
            selectedSquare()?.piece?.type
          } to ${square.name}`
        );
      }
      setSelectedSquare();
    } else {
      setSelectedSquare(square);
    }
  };

  return (
    <div class={styles.Board}>
      <For each={squares()}>
        {(square) => (
          <Square
            piece={square.piece}
            name={square.name}
            shade={square.shade === "d" ? dark : light}
            onClick={()=>{}}
          />
        )}
      </For>
    </div>
  );
};
