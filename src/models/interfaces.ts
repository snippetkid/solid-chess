import { Piece, Shade } from "./enums";

export interface PieceProps {
  stroke: string;
  fill: string;
  square:string;
}

export interface IPieceData {
  id: string,
  file: string,
  rank: number,
  shade: Shade,
  type: Piece
}

export interface IMove {
  index: number,
  piece: string,
  capture: boolean,
  fromFile?: string,
  fromRank?: number,
  square: string
}

export interface IPiece{
  type:Piece,
  shade:Shade
}

export interface ISquare{
  name:string;
  shade:string
}
