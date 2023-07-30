interface Props {
  color: string;
}

export const Square = ({ color }: Props) => {
  return <div style={{ "background-color": color }}></div>;
};
