import styles from './Piece.module.css'
import { Bishop } from './pieces/Bishop';
import { Knight } from './pieces/Knight';

interface Props {
	shade: string;
	type?: string;
}
export const Piece = ({ shade, type = 'pawn' }: Props) => {
	const fillColor = shade === 'light' ? '#f6f8fb' : '#3C4D53'
	const strokeColor = shade === 'light' ? '#232D30' : '#0F1D2E'


	return(<div class={styles.Piece}>
		{/* <Knight stroke={strokeColor} fill={fillColor} /> */}
		<Bishop stroke={strokeColor} fill={fillColor}/>
	</div>)
}