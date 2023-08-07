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
	onClick: () => void;
}
export const Piece = (props: Props) => {
	const fillColor = props.shade === Shade.Light ? '#f6f8fb' : '#3C4D53'
	const strokeColor = props.shade === Shade.Light ? '#232D30' : '#0F1D2E'
	const getPiece = () => {
		const _props = {
			stroke: strokeColor,
			fill: fillColor,
			square:props.square
		}
		switch (props.type) {
			case PieceType.PAWN:
				return <Pawn {..._props} />
			case PieceType.BISHOP:
				return <Bishop {..._props} />
			case PieceType.KNIGHT:
				return <Knight {..._props} />
			case PieceType.QUEEN:
				return <Queen {..._props} />
			case PieceType.KING:
				return <King {..._props} />
			case PieceType.ROOK:
				return <Rook {..._props} />
			default:
				throw 'Piece not supported';
		}
	}

	return (<div id={props.square} class={styles.Piece}>
		{getPiece()}
	</div>)
}