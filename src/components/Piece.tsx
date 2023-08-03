import { Piece as PieceType, Shade } from '../models/enums';
import styles from './Piece.module.css'
import { Bishop } from './pieces/Bishop';
import { King } from './pieces/King';
import { Knight } from './pieces/Knight';
import { Pawn } from './pieces/Pawn';
import { Queen } from './pieces/Queen';
import { Rook } from './pieces/Rook';

interface Props {
	square: string;
	shade: Shade;
	type: PieceType;
}
export const Piece = ({ square, shade, type }: Props) => {
	const fillColor = shade === Shade.Light ? '#f6f8fb' : '#3C4D53'
	const strokeColor = shade === Shade.Light ? '#232D30' : '#0F1D2E'
	const getPiece = () => {
		const props = {
			stroke: strokeColor,
			fill: fillColor,
			square
		}
		switch (type) {
			case PieceType.PAWN:
				return <Pawn {...props} />
			case PieceType.BISHOP:
				return <Bishop {...props} />
			case PieceType.KNIGHT:
				return <Knight {...props} />
			case PieceType.QUEEN:
				return <Queen {...props} />
			case PieceType.KING:
				return <King {...props} />
			case PieceType.ROOK:
				return <Rook {...props} />
			default:
				throw 'Piece not supported';
		}
	}

	return (<div id={square} class={styles.Piece}>
		{getPiece()}
	</div>)
}