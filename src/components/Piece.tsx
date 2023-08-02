import styles from './Piece.module.css'
import { Bishop } from './pieces/Bishop';
import { Knight } from './pieces/Knight';

interface Props {
	shade: string;
	type?: string;
}
export const Piece = ({ shade, type = 'pawn' }: Props) => {
	const fillColor = shade === 'light' ? '#F5A4A3' : '#6B4D57'
	const strokeColor = shade === 'light' ? '#232D30' : '#0A131F'


	return(<div class={styles.Piece}>
		{/* <Knight stroke={strokeColor} fill={fillColor} /> */}
		<Bishop stroke={strokeColor} fill={fillColor}/>
	</div>)
}