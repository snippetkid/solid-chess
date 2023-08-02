import { Piece } from "./Piece";

interface Props {
  shade: string;
  name: string;
}

export const Square = ({ name, shade }: Props) => {
  return <div id={name} style={{ "background-color": shade }}>
    <Piece shade={name.includes('1') ? 'light' : 'dark'} />
  </div>

};
