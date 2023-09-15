type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function InputTypes(props: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
}
export default InputTypes;
