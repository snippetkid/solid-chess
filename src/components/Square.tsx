import { Piece as PieceType, Shade } from "../models/enums";
import { IPiece } from "../models/interfaces";
import { Piece } from "./Piece";
import { createSignal } from "solid-js";

interface Props {
  shade: string;
  name: string;
  pieceType?: PieceType;
  pieceShade?: Shade;
  onClick: () => void;
}

export const Square = ({ name, shade, pieceShade, pieceType, onClick }: Props) => {
  const [piece, setPiece] = createSignal<IPiece>()
  return <div id={name} style={{ "background-color": shade }} onClick={onClick}>
    {
      pieceType && pieceShade && <Piece type={pieceType} square={name} shade={pieceShade} />
    }
  </div>

};
