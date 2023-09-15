type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function StyleProps(props: ButtonProps) {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>StyleProps</button>
  );
}
export default StyleProps;

type containerProps = {
  styles: React.CSSProperties;
};

export const container = (props: containerProps) => {
  return <div style={props.styles}> Text Style</div>;
};
