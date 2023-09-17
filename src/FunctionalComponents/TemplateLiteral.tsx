type Hposition = "left" | "center" | "right";
type Vposition = "top" | "center" | "botton";
type AllPostion = {
  position: Exclude<`${Hposition}-${Vposition}`, "center-center"> | "center";
};
const TemplateLiteral = ({ position }: AllPostion) => {
  return <div>TemplateLiteral</div>;
};
export default TemplateLiteral;
