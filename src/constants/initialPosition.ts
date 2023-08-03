import { Piece, Shade } from '../models/enums'
import { IPieceData } from '../models/interfaces';

const InitialPosition : IPieceData[] = [
    {
        id: 'black-rook-1-8',
        type: Piece.ROOK,
        file: 'a',
        rank: 8,
        shade: Shade.Dark,
    },
    {
        id: 'black-knight-2-8',
        type: Piece.KNIGHT,
        file: 'b',
        rank: 8,
        shade: Shade.Dark,
    },
    {
        id: 'black-bishop-3-8',
        type: Piece.BISHOP,
        file: 'c',
        rank: 8,
        shade: Shade.Dark,
    },
    {
        id: 'black-queen-4-8',
        type: Piece.QUEEN,
        file: 'd',
        rank: 8,
        shade: Shade.Dark,
    },
    {
        id: 'black-king-5-8',
        type: Piece.KING,
        file: 'e',
        rank: 8,
        shade: Shade.Dark,
    },
    {
        id: 'black-bishop-6-8',
        type: Piece.BISHOP,
        file: 'f',
        rank: 8,
        shade: Shade.Dark,
    },
    {
        id: 'black-knight-7-8',
        type: Piece.KNIGHT,
        file: 'g',
        rank: 8,
        shade: Shade.Dark,
    },
    {
        id: 'black-rook-8-8',
        type: Piece.ROOK,
        file: 'h',
        rank: 8,
        shade: Shade.Dark,
    },
    {
        id: 'black-pawn-1-7',
        type: Piece.PAWN,
        rank: 7,
        file: 'a',
        shade: Shade.Dark,
    },
    {
        id: 'black-pawn-2-7',
        type: Piece.PAWN,
        rank: 7,
        file: 'b',
        shade: Shade.Dark,
    },
    {
        id: 'black-pawn-3-7',
        type: Piece.PAWN,
        rank: 7,
        file: 'c',
        shade: Shade.Dark,
    },
    {
        id: 'black-pawn-4-7',
        type: Piece.PAWN,
        rank: 7,
        file: 'd',
        shade: Shade.Dark,
    },
    {
        id: 'black-pawn-5-7',
        type: Piece.PAWN,
        rank: 7,
        file: 'e',
        shade: Shade.Dark,
    },
    {
        id: 'black-pawn-6-7',
        type: Piece.PAWN,
        rank: 7,
        file: 'f',
        shade: Shade.Dark,
    },
    {
        id: 'black-pawn-7-7',
        type: Piece.PAWN,
        rank: 7,
        file: 'g',
        shade: Shade.Dark,
    },
    {
        id: 'black-pawn-8-7',
        type: Piece.PAWN,
        rank: 7,
        file: 'h',
        shade: Shade.Dark,
    },

    {
        id: 'white-rook-1-1',
        type: Piece.ROOK,
        file: 'a',
        rank: 1,
        shade: Shade.Light,
    },
    {
        id: 'white-knight-2-1',
        type: Piece.KNIGHT,
        file: 'b',
        rank: 1,
        shade: Shade.Light,
    },
    {
        id: 'white-bishop-3-1',
        type: Piece.BISHOP,
        file: 'c',
        rank: 1,
        shade: Shade.Light,
    },
    {
        id: 'white-queen-4-1',
        type: Piece.QUEEN,
        file: 'd',
        rank: 1,
        shade: Shade.Light,
    },
    {
        id: 'white-king-5-1',
        type: Piece.KING,
        file: 'e',
        rank: 1,
        shade: Shade.Light,
    },
    {
        id: 'white-bishop-6-1',
        type: Piece.BISHOP,
        file: 'f',
        rank: 1,
        shade: Shade.Light,
    },
    {
        id: 'white-knight-7-1',
        type: Piece.KNIGHT,
        file: 'g',
        rank: 1,
        shade: Shade.Light,
    },
    {
        id: 'white-rook-8-1',
        type: Piece.ROOK,
        file: 'h',
        rank: 1,
        shade: Shade.Light,
    },


    {
        id: 'white-pawn-1-2',
        type: Piece.PAWN,
        rank: 2,
        file: 'a',
        shade: Shade.Light,
    },
    {
        id: 'white-pawn-2-2',
        type: Piece.PAWN,
        rank: 2,
        file: 'b',
        shade: Shade.Light,
    },
    {
        id: 'white-pawn-3-2',
        type: Piece.PAWN,
        rank: 2,
        file: 'c',
        shade: Shade.Light,
    },
    {
        id: 'white-pawn-4-2',
        type: Piece.PAWN,
        rank: 2,
        file: 'd',
        shade: Shade.Light,
    },
    {
        id: 'white-pawn-5-2',
        type: Piece.PAWN,
        rank: 2,
        file: 'e',
        shade: Shade.Light,
    },
    {
        id: 'white-pawn-6-2',
        type: Piece.PAWN,
        rank: 2,
        file: 'f',
        shade: Shade.Light,
    },
    {
        id: 'white-pawn-7-2',
        type: Piece.PAWN,
        rank: 2,
        file: 'g',
        shade: Shade.Light,
    },
    {
        id: 'white-pawn-8-2',
        type: Piece.PAWN,
        rank: 2,
        file: 'h',
        shade: Shade.Light,
    }
];

export const getInitialPosition = (square: string) => {
    

}