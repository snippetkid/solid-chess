import { IPiece } from "../models/interfaces";
import { Piece } from "./Piece";

interface Props {
  shade: string;
  name: string;
  piece?: IPiece;
  onClick: (piece:IPiece | null) => void;
}

export const Square = ({ name, shade,piece, onClick }: Props) => {
  return (
    <div id={name} style={{ "background-color": shade }} onClick={()=>onClick(piece!)}>
      {/* <div class={styles.Cordinate}>{name}</div> */}
      {piece?.type && piece?.shade && (
        <Piece
          type={piece?.type!}
          square={name}
          shade={piece?.shade!}
        />
      )}
    </div>
  );
};
