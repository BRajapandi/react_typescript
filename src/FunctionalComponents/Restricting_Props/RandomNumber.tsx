type RandomNumbertype = {
  value: number;
};
type RandomNumber = RandomNumbertype & {
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: never;
};

function RandomNumber({ value, isPositive, isNegative, isZero }: RandomNumber) {
  return <div>RandomNumber</div>;
}
export default RandomNumber;
